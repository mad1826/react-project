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

	return <Router coupons={coupons} carts={carts} />;
};

root.render(
	<App />
);