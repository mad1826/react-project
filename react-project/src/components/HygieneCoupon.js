import { Link } from 'react-router-dom';
import { getCouponImg, getPrice } from '../functions';

const HygieneCoupon = options => {
	const coupon = options.coupon;

	return <Link to='/coupon' className='item columns-all' onClick={() => options.setCoupon(coupon)}>
		{getCouponImg(coupon)}
		<div className='item-details'>
			<p className='bold'>{coupon.name}</p>
			{getPrice(coupon)}
			<p>{coupon.store.name}</p>
			<br />
			<p>Exp. {coupon.expiresAt}</p>
			<br />
			{coupon.qualifyingItems && <p>Qualifying Items: {coupon.qualifyingItems.join(', ')}</p>}
		</div>
	</Link>;
};

export default HygieneCoupon;