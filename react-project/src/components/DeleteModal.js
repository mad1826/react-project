import { useState } from 'react';
import '../css/DeleteModal.css';

const DeleteModal = options => {
	const coupon = options.coupon;

	const [result, setResult] = useState('');

	const deleteCoupon = async () => {
		const response = await fetch(`https://couponder-api.onrender.com/api/coupons/${coupon._id}`, {
			method: 'DELETE'
		});

		if (response.status === 200) {
			const coupon = await response.json();
			options.deleteCoupon(coupon);
			setResult('Coupon successfully deleted! Redirecting in 5 seconds...');
			setTimeout(() => {
				window.location.href = 'https://mad1826.github.io/react-project/';
			}, 5000);
		}
		else {
			setResult('An error has occurred!');
		}
	};

	return <div id='delete-modal' className='w3-modal'>
		<div id='delete-modal-content' className='w3-modal-content'>
			<h3>Are you sure you want to delete {coupon.name}?</h3>
			<div className='columns-all'>
				<button onClick={options.closeModal}>No</button>
				<button id='delete-btn' onClick={deleteCoupon}>Yes</button>
			</div>
			<p>{result}</p>
		</div>
	</div>;
};

export default DeleteModal;