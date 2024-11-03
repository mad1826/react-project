import HygieneCoupon from '../components/HygieneCoupon';
import '../css/Hygiene.css';
import { createEmpty } from '../functions';

const Hygiene = options => {
	return <div id='hygiene-items' className='columns-all'>
		{options.coupons.map(coupon =>
			<HygieneCoupon coupon={coupon} setCoupon={options.setCoupon} key={coupon._id} />
		)}
		{options.coupons.length % 2 === 1 && createEmpty()}
	</div>;
};

export default Hygiene;