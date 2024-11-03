import { Link } from 'react-router-dom';

const GroceryCouponDetails = options => {
	const coupon = {
		...options.coupon,
		store: {
			...options.coupon.store,
			name: options.store
		},
		deal: options.deal,
		exp: options.exp
	};
	return <Link to='/coupon' onClick={() => options.setCoupon(coupon)}>
		<ul>
			<li>{options.store}</li>
			<li>{options.deal}</li>
			<li>{options.exp}</li>
		</ul>
	</Link>;
};

export default GroceryCouponDetails;