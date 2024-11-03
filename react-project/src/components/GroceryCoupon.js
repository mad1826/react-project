import { Link } from 'react-router-dom';
import { getCouponImg } from '../functions';
import GroceryCouponDetails from './GroceryCouponDetails';
import { useState } from 'react';

const GroceryCoupon = options => {
	const coupon = options.coupon;
	const details = options.details;

	const [hidden, setHidden] = useState(true);

	const style = hidden
		? { marginBottom: '15px' }
		: { marginBottom: `${details.length * 40}px`, outlineBottom: 'none' };

	const onClick = e => {
		if ((e.target.tagName === 'A' && !e.target.classList.contains('grocery-item')) || e.target.tagName === 'UL' || e.target.tagName === 'LI') return; // Go to item details page as normal

		// The image was clicked and the details should be toggled
		e.preventDefault();

		if (hidden) {
			setHidden(false);
		}
		else {
			setHidden(true);
		}
	};

	return <Link to='#' className='item grocery-item' style={style} onClick={onClick}>
		{getCouponImg(coupon)}
		<p>{coupon.name}</p>
		<div className={`item-details${hidden ? ' hidden' : ''}`}>
			{details.map(detail =>
				<GroceryCouponDetails coupon={coupon} store={detail[0]} deal={detail[1]} exp={detail[2]} setCoupon={options.setCoupon} key={detail[0]} />
			)}
		</div>
	</Link>;
};

export default GroceryCoupon;