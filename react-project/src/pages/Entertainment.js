import EntertainmentCoupon from '../components/EntertainmentCoupon';

const Entertainment = options => {
	return <div id='entertainment-items' className='grid'>
		{options.coupons.map(coupon =>
			<EntertainmentCoupon coupon={coupon} setCoupon={options.setCoupon} key={coupon._id} />
		)}
	</div>;
};

export default Entertainment;