import { Link } from 'react-router-dom';
import { getCouponImg, getPrice } from '../functions';

const CartCoupon = options => {
	const coupon = options.coupon;
	return <div className='cart-coupon'>
		{getCouponImg(coupon)}
		<div className='cart-coupon-details'>
			{getPrice(coupon, 0, true)}
			<h3 className='name'>{coupon.name}</h3>
			<h3 className='store-name'>
				<Link to='#' className='open-location'>{coupon.store.name}</Link>
			</h3>
			<img className='share' src='images/share.png' alt='share' />
			<img className='remove' src='images/trash.png' alt='delete' />
			{coupon.details ? <p className='notes'>{coupon.details}</p> : coupon.qualifyingItems?.length ? <p className='notes'>Qualifying Items: {coupon.qualifyingItems.join(', ')}</p> : null}
			<p className='expires-at'>Exp. {coupon.expiresAt}</p>
		</div>
	</div>;
};

export default CartCoupon;