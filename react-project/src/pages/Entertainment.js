import EntertainmentCoupon from '../components/EntertainmentCoupon';
import { createEmpty } from '../functions';

const Entertainment = options => {
	return <div id='entertainment-items' className='columns-all'>
		{options.coupons.map(coupon =>
			<EntertainmentCoupon coupon={coupon} setCoupon={options.setCoupon} key={coupon._id} />
		)}
		{options.coupons.length % 2 === 1 && createEmpty()}
	</div>;
};

export default Entertainment;