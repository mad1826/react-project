import { useState } from 'react';
import '../css/EditModal.css';

const EditModal = options => {
	const coupon = options.coupon;

	const initExpiresAt = coupon.expiresAt.match(/(\d+)\/(\d+)\/(\d+)/);
	const [, month, date, year] = initExpiresAt;
	const initExpiresAtStr = `20${year}-${parseInt(month) < 10 ? `0${parseInt(month)}` : parseInt(month)}-${parseInt(date) < 10 ? `0${parseInt(date)}` : parseInt(date)}`;

	const [newCoupon, setNewCoupon] = useState({ ...coupon, storeName: coupon.store.name, storeLocation: coupon.store.location, oldPrice: coupon.prices[0], newPrice: coupon.prices[1], oldRent: coupon.prices[2], newRent: coupon.prices[3], qualifyingItems: coupon.qualifyingItems?.join(', '), expiresAt: initExpiresAtStr });
	const [result, setResult] = useState('');

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setNewCoupon(values => ({ ...values, [name]: value }));
	};

	const handleImageChange = event => {
		const name = event.target.name;
		const value = event.target.files[0];
		setNewCoupon(values => ({ ...values, [name]: value }));
	};

	const editCoupon = async event => {
		event.preventDefault();
		setResult('Editing...');

		const formData = new FormData(event.target);

		const response = await fetch(`https://couponder-api.onrender.com/api/coupons/${coupon._id}?type=${coupon.type}`, {
			method: 'PUT',
			body: formData
		});

		if (response.status === 200) {
			const res = await response.json();
			options.editCoupon(res);
			options.setCoupon(res);
			options.closeModal();
		}
		else {
			setResult('An error has occurred!');
			response.text().then(console.log);
		}
	};

	return <div id='edit-modal' className='w3-modal'>
		<div id='edit-modal-content' className='w3-modal-content'>
			<h3>Now Editing {coupon.name}</h3>
			<form onSubmit={editCoupon}>
				<div className='columns-all'>
					<label for='image-upload'>Item Image</label>
					<input id='image-upload' type='file' name='image' onChange={handleImageChange} />
				</div>
				<div className='columns-all'>
					<label for='name'>Item Name</label>
					<input id='name' type='text' name='name' required value={newCoupon.name} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='store-name'>Store Name</label>
					<input id='store-name' type='text' name='storeName' required value={newCoupon.storeName} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='old'>Normal Price</label>
					<input id='old' type='text' name='oldPrice' required value={newCoupon.oldPrice} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='new'>New Price</label>
					<input id='new' type='text' name='newPrice' required value={newCoupon.newPrice} onChange={handleChange} />
				</div>
				{coupon.type === 'entertainment' && <>
					<div className='columns-all'>
						<label for='oldRent'>Normal Rent Price</label>
						<input id='oldRent' type='text' name='oldRent' required value={newCoupon.oldRent} onChange={handleChange} />
					</div>
					<div className='columns-all'>
						<label for='newRent'>New Rent Price</label>
						<input id='newRent' type='text' name='newRent' required value={newCoupon.newRent} onChange={handleChange} />
					</div>
				</>}
				<div className='columns-all'>
					<label for='expires'>Expires At</label>
					<input id='expires' type='date'name='expiresAt' required value={newCoupon.expiresAt} format onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='deal'>Deal (Optional)</label>
					<input id='deal' type='text' name='deal' value={newCoupon.deal} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='qualifying-items'>Qualifying Items (Optional)</label>
					<input id='qualifying-items' type='text' name='qualifyingItems' value={newCoupon.qualifyingItems} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='details'>Coupon Details (Optional)</label>
					<input id='details' type='text' name='details' values={newCoupon.details} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<button onClick={options.closeModal}>Cancel</button>
					<button id='edit-btn' type='submit'>Save</button>
				</div>
			</form>
			<p id='edit-result'>{result}</p>
		</div>
	</div>;
};

export default EditModal;