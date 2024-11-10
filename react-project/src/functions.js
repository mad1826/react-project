import { Link } from 'react-router-dom';

export const getCouponImg = coupon => {
	return <img src={`https://couponder-api.onrender.com/images/${coupon.type}/${coupon.image}`} className='image' alt={coupon.name} />;
};

export const createEmpty = (largeOnly = false) => {
	return <Link to='/coupon' className={`item ${largeOnly ? 'large' : 'small'}-only`} />;
};

export const getPrice = (coupon, offset = 0, showPercent = false) => {
	const oldPrice = coupon.prices[offset];
	const newPrice = coupon.prices[offset + 1];
	if (coupon.deal) {
		return <p className='price'>
			<span>{`$${oldPrice} - `}</span>
			<span className='red'>{coupon.deal}</span>
		</p>;
	}
	else {
		let newP;
		if (showPercent) {
			const oldPriceNum = parseFloat(oldPrice.replace('/oz', ''));
			const newPriceNum = parseFloat(newPrice.replace('/oz', ''));
			const dealNum = 1 - (newPriceNum / oldPriceNum);
			newP = ` (${Math.ceil(dealNum * 100 - 1)}% off)`;
		}
		else {
			newP = ` $${newPrice}`;
		}

		return <p className='price'>
			<span className='strikethrough'>${coupon.prices[offset]}</span>
			{' '}
			<span className='red'>{newP}</span>
		</p>;
	}
};