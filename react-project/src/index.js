import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
	const [coupons, setCoupons] = useState([]);
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		const getCoupons = async () => {
			const res = await fetch('https://couponder-api.onrender.com/api/coupons');
			const json = await res.json();
			setCoupons(json);
		};
		const getCarts = async () => {
			const res = await fetch('https://couponder-api.onrender.com/api/carts');
			const json = await res.json();
			setCarts(json);
		};

		getCoupons();
		getCarts();
	}, []);

	const addCoupon = coupon => {
		setCoupons(coupons => [...coupons, coupon]);
	};

	const deleteCoupon = coupon => {
		setCoupons(coupons => coupons.filter(c => c._id !== coupon._id));
	};

	const editCoupon = coupon => {
		setCoupons(coupons => coupons.map(c => {
			if (c._id === coupon._id) return coupon;
			return c;
		}));
	};

	return <Router coupons={coupons} carts={carts} addCoupon={addCoupon} deleteCoupon={deleteCoupon} editCoupon={editCoupon} />;
};

root.render(
	<App />
);