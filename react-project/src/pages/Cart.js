import CartCoupon from '../components/CartCoupon';
import '../css/Cart.css';

const Cart = options => {
	const cart = options.cart;
	const coupons = options.coupons.filter(coupon => cart.items.includes(coupon._id));

	if (!cart) {
		return <p>Loading...</p>;
	}

	return <>
		<div id='cart-header'>
			<h2 className='left'>
				Welcome back, <span id='first-name' className='bold'>{cart.firstName}</span>!
			</h2>
			<button className='right bold'>REMOVE ALL</button>
			<h2 className='right'>Total Coupons: <span id='coupon-count'>{coupons.length}</span></h2>
		</div>
		<div id='cart-list'>
			{coupons.map(coupon =>
				<CartCoupon coupon={coupon} key={coupon._id} />
			)}
		</div>
	</>;
};

export default Cart;