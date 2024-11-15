import GroceryCoupon from '../components/GroceryCoupon';
import '../css/Grocery.css';

const Grocery = options => {
	const uniqueItems = []; // format: (itemName, [storeName, deal, exp])[]

	options.coupons.forEach(coupon => {
		if (coupon.type !== 'grocery') return;

		let found = false;
		uniqueItems.forEach(uniqueItem => {
			if (uniqueItem[0].name === coupon.name) { // found existing item
				uniqueItem[1].push([coupon.store.name, coupon.deal, coupon.expiresAt]);
				found = true;
			}
		});
		if (!found) { // item does not exist yet
			uniqueItems.push([coupon, [[coupon.store.name, coupon.deal, coupon.expiresAt]]]);
		}
	});

	return <>
		<h2>Deals On</h2>
		<div id='grocery-items' className='grid'>
			{uniqueItems.map(coupon =>
				<GroceryCoupon coupon={coupon[0]} details={coupon[1]} setCoupon={options.setCoupon} key={coupon._id} />
			)}
		</div>
	</>;
};

export default Grocery;