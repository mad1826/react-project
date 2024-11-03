import PrimaryFeatured from '../components/PrimaryFeatured';
import SecondaryFeatured from '../components/SecondaryFeatured';

const Featured = options => {
	return <>
		<h2>Expiring Soon</h2>
		<div id='expiring-soon' className='columns'>
			{options.coupons.slice(0, 2).map(coupon =>
				<PrimaryFeatured coupon={coupon} setCoupon={options.setCoupon} key={coupon._id} />
			)}
		</div>
		<h2>Recommended for You</h2>
		<div id='recommended' className='columns-all'>
			{options.coupons.slice(2, 6).map(coupon =>
				<SecondaryFeatured coupon={coupon} setCoupon={options.setCoupon} key={coupon._id} />
			)}
		</div>
	</>;
};

export default Featured;