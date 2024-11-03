import { Link } from 'react-router-dom';
import { getCouponImg, getPrice } from '../functions';

const SecondaryFeatured = options => {
	const coupon = options.coupon;

	return <Link to='/coupon' className='secondary-featured'>
		{getCouponImg(coupon)}
		<p className='bold'>{coupon.name}</p>
		{getPrice(coupon)}
		<p>{coupon.store.name}</p>
		<p>Exp. {coupon.expiresAt}</p>
	</Link>;
};

export default SecondaryFeatured;