export const getCouponImg = (coupon, onlySrc = false) => {
	const src = `https://couponder-api.onrender.com/images/${coupon.type}/${coupon.image}`;
	if (onlySrc) return src;
	return <img src={src} className='image' alt={coupon.name} />;
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