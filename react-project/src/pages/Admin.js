import { useState } from 'react';
import '../css/Admin.css';

const Admin = options => {
	const [inputs, setInputs] = useState({ type: 'grocery' });
	const [addResult, setAddResult] = useState('');
	const [deleteResult, setDeleteResult] = useState('');

	const handleChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs(values => ({ ...values, [name]: value }));
	};

	const handleImageChange = event => {
		const name = event.target.name;
		const value = event.target.files[0];
		setInputs(values => ({ ...values, [name]: value }));
	};

	const addToServer = async event => {
		event.preventDefault();
		setAddResult('Sending....');

		const formData = new FormData(event.target);

		const response = await fetch(`https://couponder-api.onrender.com/api/coupons?type=${inputs.type}`, {
			method: 'POST',
			body: formData
		});

		if (response.status === 200) {
			const coupon = await response.json();
			options.addCoupon(coupon);
			setAddResult('Coupon successfully added!');
			event.target.reset();
		}
		else {
			setAddResult('An error has occurred!');
		}
	};

	const deleteFromServer = async event => {
		event.preventDefault();

		setDeleteResult('Deleting....');

		const id = document.getElementById('delete-id').value;

		const response = await fetch(`https://couponder-api.onrender.com/api/coupons/${id}`, {
			method: 'DELETE'
		});

		if (response.status === 200) {
			const coupon = await response.json();
			options.deleteCoupon(coupon);
			setDeleteResult('Coupon successfully deleted!');
			event.target.reset();
		}
		else {
			setAddResult('An error has occurred!');
		}
	};

	return <>
		<h2 id='admin-header'>Administrator Only</h2>
		<h3>Add Item</h3>
		<form className='mng-item' onSubmit={addToServer}>
			<div className='columns-all'>
				<label for='id'>Item ID</label>
				<input id='id' type='text' name='_id' required value={inputs._id || ''} onChange={handleChange} />
			</div>
			<div className='columns-all'>
				<label for='image-upload'>Select an image</label>
				<input id='image-upload' type='file' name='image' required onChange={handleImageChange} />
			</div>
			<div className='columns-all'>
				<label for='type'>Item Type</label>
				<select id='type' name='type' required value={inputs.type || 'grocery'} onChange={handleChange}>
					<option value='grocery'>Grocery</option>
					<option value='entertainment'>Entertainment</option>
					<option value='hygiene'>Hygiene</option>
				</select>
			</div>
			<div className='columns-all'>
				<label for='name'>Item Name</label>
				<input id='name' type='text' name='name' required value={inputs.name || ''} onChange={handleChange} />
			</div>
			<div className='columns-all'>
				<label for='store-name'>Store Name</label>
				<input id='store-name' type='text' name='storeName' required value={inputs.storeName || ''} onChange={handleChange} />
			</div>
			<div className='columns-all'>
				<label for='old'>Normal Price</label>
				<input id='old' type='text' name='oldPrice' required value={inputs.oldPrice || ''} onChange={handleChange} />
			</div>
			<div className='columns-all'>
				<label for='new'>Deal or New Price</label>
				<input id='new' type='text' name='deal' required value={inputs.deal || ''} onChange={handleChange} />
			</div>
			{inputs.type === 'entertainment' && <>
				<div className='columns-all'>
					<label for='oldRent'>Normal Rent Price</label>
					<input id='oldRent' type='text' name='oldRent' required value={inputs.oldRent || ''} onChange={handleChange} />
				</div>
				<div className='columns-all'>
					<label for='newRent'>New Rent Price</label>
					<input id='newRent' type='text' name='newRent' required value={inputs.newRent || ''} onChange={handleChange} />
				</div>
			</>}
			<div className='columns-all'>
				<label for='expires'>Expires At</label>
				<input id='expires' type='text' name='expiresAt' required value={inputs.expiresAt || ''} onChange={handleChange} />
			</div>
			<div className='columns-all'>
				<label for='qualifying-items'>Qualifying Items (Optional)</label>
				<input id='qualifying-items' type='text' name='qualifyingItems' value={inputs.qualifyingItems || ''} onChange={handleChange} />
			</div>
			<div className='columns-all'>
				<label for='details'>Coupon Details (Optional)</label>
				<input id='details' type='text' name='details' values={inputs.details} onChange={handleChange} />
			</div>
			<button type='submit' id='add-item'>Add Item</button>
		</form>
		<p>{addResult}</p>
		<h3>Remove Item</h3>
		<form className='mng-item' onSubmit={deleteFromServer}>
			<div className='columns-all'>
				<label for='delete-id'>Item ID</label>
				<input id='delete-id' type='text' name='id' required />
			</div>
			<button id='remove-item' type='submit'>Remove Item</button>
		</form>
		<p>{deleteResult}</p>
	</>;
};

export default Admin;