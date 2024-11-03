import SecondaryFeatured from '../components/SecondaryFeatured';
import '../css/Coupon.css';
import { getCouponImg } from '../functions';

const Coupon = options => {
	const coupon = options.coupon;
	const rec = options.rec;

	console.log(coupon);
	return <>
		<div id='coupon-columns' className='columns'>
			<div id='coupon-image' className='primary-featured'>
				{getCouponImg(coupon)}
			</div>
			<div id='coupon' className='primary-featured'>
				<h3>{coupon.name}</h3>
				<div id='store' className='columns-all'>
					{coupon.store.logo && <p className='coupon-column'>
						<img src={`images/stores/${coupon.store.logo}`} />
					</p>}
					<p id='store-name' className='coupon-column'>
						{coupon.store.name}
					</p>
				</div>
				<p id='old-price'>${coupon.prices[0]}</p>
				<p id='new-price' className='red'>${coupon.prices[1]}!</p>
				<button>Add to Cart</button>
				<p id='expires-at'>Exp. {coupon.expiresAt}</p>
			</div>
		</div>
		<p id='item-notes'>{coupon.details}</p>
		<hr />
		<h2>You Might Also Like</h2>
		<div id='recommended' className='columns-all'>
			{rec.map(recCoupon =>
				<SecondaryFeatured coupon={recCoupon} key={recCoupon._id} />
			)}
		</div>
	</>;
};

export default Coupon;