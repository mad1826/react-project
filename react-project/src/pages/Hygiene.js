import HygieneCoupon from '../components/HygieneCoupon';
import '../css/Hygiene.css';

const Hygiene = options => {
	return <div id='hygiene-items' className='grid'>
		{options.coupons.map(coupon =>
			<HygieneCoupon coupon={coupon} setCoupon={options.setCoupon} key={coupon._id} />
		)}
	</div>;
};

export default Hygiene;