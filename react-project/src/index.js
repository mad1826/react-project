import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/index.css';
import Layout from './Layout';
import About from './pages/About';
import Featured from './pages/Featured';
import Cart from './pages/Cart';
import Entertainment from './pages/Entertainment';
import Grocery from './pages/Grocery';
import Hygiene from './pages/Hygiene';
import Admin from './pages/Admin';
import Coupon from './pages/Coupon';

const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
	const [coupons, setCoupons] = useState([]);
	const [carts, setCarts] = useState([]);
	const [coupon, setCoupon] = useState({
		_id: 1,
		type: 'grocery',
		image: 'apple.png',
		name: 'Apples',
		store: {
			name: 'Food Lion',
			logo: 'food-lion.png',
			location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13230.888422060465!2d-81.0320934407241!3d33.99967102082561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a532cbb7bea1%3A0x55235f2e7f75a1!2sFood%20Lion!5e0!3m2!1sen!2sus!4v1730065700902!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
		},
		prices: ['5.00/oz', '2.99/oz'],
		deal: 'Buy One, Get One Free',
		expiresAt: '1/1/25',
		details: 'Only applicable toward Fuji, Granny Smith, and Golden apples.'
	});

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

	const filterCoupons = type => coupons.filter(c => c.type === type);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path='/' element={(<Layout />)}>
					<Route index element={(<Featured coupons={coupons} setCoupon={setCoupon} />)} />
					<Route path='coupon' element={(<Coupon coupon={coupon} rec={coupons.slice(2, 6)} setCoupon={setCoupon} />)} />
					<Route path='grocery' element={(<Grocery coupons={filterCoupons('grocery')} setCoupon={setCoupon} />)} />
					<Route path='entertainment' element={(<Entertainment coupons={filterCoupons('entertainment')} setCoupon={setCoupon} />)} />
					<Route path='hygiene' element={(<Hygiene coupons={filterCoupons('hygiene')} setCoupon={setCoupon} />)} />
					<Route path='about' element={(<About />)} />
					<Route path='admin' element={(<Admin />)} />
					<Route path='cart' element={(<Cart coupons={coupons.filter(c => carts[0]?.items.includes(c._id))} cart={carts[0]} />)} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

root.render(
	<App />
);