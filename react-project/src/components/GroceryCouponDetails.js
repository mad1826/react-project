import { Link } from 'react-router-dom';

const GroceryCouponDetails = details => {
	return <Link to='/coupon'>
		<ul>
			<li>{details.store}</li>
			<li>{details.deal}</li>
			<li>{details.exp}</li>
		</ul>
	</Link>;
};

export default GroceryCouponDetails;