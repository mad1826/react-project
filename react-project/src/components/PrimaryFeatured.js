import { Link } from 'react-router-dom';
import { getCouponImg } from '../functions';

const PrimaryFeatured = options => {
	const coupon = options.coupon;

	return <Link to='/coupon' className='primary-featured' onClick={() => options.setCoupon(coupon)}>
		{getCouponImg(coupon)}
	</Link>;
};

export default PrimaryFeatured;