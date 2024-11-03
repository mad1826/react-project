import { Link } from 'react-router-dom';
import '../css/Entertainment.css';
import { getCouponImg, getPrice } from '../functions';

const EntertainmentCoupon = options => {
	const coupon = options.coupon;
	return <Link to='/coupon' className='item' onClick={() => options.setCoupon(coupon)}>
		{getCouponImg(coupon)}
		<div>
			<p className='bold'>{coupon.name}</p>
			<p>{coupon.store.name}</p>
			<p className='bold'>Buy</p>
			{getPrice(coupon)}
			<p className='bold'>Rent</p>
			{getPrice(coupon, 2)}
			<p>Exp. {coupon.expiresAt}</p>
		</div>
	</Link>;
};

export default EntertainmentCoupon;