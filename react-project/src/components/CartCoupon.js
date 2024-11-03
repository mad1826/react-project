import { getCouponImg, getPrice } from '../functions';

const CartCoupon = options => {
	const coupon = options.coupon;
	// TODO price
	return <div className='cart-coupon'>
		{getCouponImg(coupon)}
		<div className='cart-coupon-details'>
			{getPrice(coupon, 0, true)}
			<h3 className='name'>{coupon.name}</h3>
			<h3 className='store-name'>
				<a href='#' className='open-location'>{coupon.store.name}</a>
			</h3>
			<img className='share' src='images/share.png' alt='share' />
			<img className='remove' src='images/trash.png' alt='delete' />
			{coupon.details ? <p className='notes'>{coupon.details}</p> : coupon.qualifyingItems ? <p className='notes'>Qualifying Items: {coupon.qualifyingItems.join(', ')}</p> : null}
			<p className='expires-at'>Exp. {coupon.expiresAt}</p>
		</div>
	</div>;
};

export default CartCoupon;