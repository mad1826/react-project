import '../css/Admin.css';

const Admin = () => {
	return <>
		<h2 id='admin-header'>Administrator Only</h2>
		<h3>Add Item</h3>
		<div className='mng-item'>
			<div className='columns-all'>
				<label for='id'>Item ID</label>
				<input id='id' type='text' />
			</div>
			<div className='columns-all'>
				<label for='image-upload'>Select an image</label>
				<input id='image-upload' type='file' />
			</div>
			<div className='columns-all'>
				<label for='type'>Item Type</label>
				<select id='type'>
					<option value='featured'>Featured</option>
					<option value='featured'>Grocery</option>
					<option value='featured'>Entertainment</option>
					<option value='featured'>Hygiene</option>
				</select>
			</div>
			<div className='columns-all'>
				<label for='name'>Item Name</label>
				<input id='name' type='text' />
			</div>
			<div className='columns-all'>
				<label for='store-name'>Store Name</label>
				<input id='store-name' type='text' />
			</div>
			<div className='columns-all'>
				<label for='store-logo'>Store Logo</label>
				<input id='store-logo' type='file' />
			</div>
			<div className='columns-all'>
				<label for='old'>Normal Price</label>
				<input id='old' type='text' />
			</div>
			<div className='columns-all'>
				<label for='new'>Deal or New Price</label>
				<input id='new' type='text' />
			</div>
			<div className='columns-all'>
				<label for='expires'>Expires At</label>
				<input id='expires' type='text' />
			</div>
			<div className='columns-all'>
				<label for='qualifying-items'>Qualifying Items (Optional)</label>
				<input id='qualifying-items' type='text' />
			</div>
			<div className='columns-all'>
				<label for='details'>Coupon Details (Optional)</label>
				<input id='details' type='text' />
			</div>
		</div>
		<button id='add-item'>Add Item</button>
		<h3>Remove Item</h3>
		<div className='mng-item'>
			<div className='columns-all'>
				<label for='id'>Item ID</label>
				<input id='id' type='text' />
			</div>
		</div>
		<button id='remove-item'>Remove Item</button>
	</>;
};

export default Admin;