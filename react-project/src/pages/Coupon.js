import { useState } from 'react';
import DeleteModal from '../components/DeleteModal';
import SecondaryFeatured from '../components/SecondaryFeatured';
import '../css/Coupon.css';
import { getCouponImg } from '../functions';
import EditModal from '../components/EditModal';

const Coupon = options => {
	const [coupon, setCoupon] = useState(options.coupon);
	const rec = options.rec;

	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	const closeDeleteModal = () => {
		setShowDeleteModal(false);
	};

	const openDeleteModal = () => {
		setShowDeleteModal(true);
	};

	const closeEditModal = () => {
		setShowEditModal(false);
	};

	const openEditModal = () => {
		setShowEditModal(true);
	};

	return <>
		<div id='coupon-columns' className='columns'>
			<div id='coupon-image' className='primary-featured'>
				{getCouponImg(coupon)}
			</div>
			<div id='coupon' className='primary-featured'>
				<h3>{coupon.name}</h3>
				<div id='store' className='columns-all'>
					{coupon.store.logo && <p className='coupon-column'>
						<img src={`https://couponder-api.onrender.com/images/stores/${coupon.store.logo}`} alt={coupon.store.name} />
					</p>}
					<p id='store-name' className='coupon-column'>
						{coupon.store.name}
					</p>
				</div>
				<p id='old-price'>${coupon.prices[0]}</p>
				<p id='new-price' className='red'>${coupon.prices[1]}!</p>
				<button id='add-to-cart'>Add to Cart</button>
				<p id='expires-at'>Exp. {coupon.expiresAt}</p>
				<button id='edit-coupon' onClick={openEditModal}>✎</button>
				<button id='delete-coupon' onClick={openDeleteModal}>X</button>
			</div>
		</div>
		<p id='item-notes'>{coupon.details}</p>
		<hr />
		<h2>You Might Also Like</h2>
		<div id='recommended' className='columns-all'>
			{rec.map(recCoupon =>
				<SecondaryFeatured coupon={recCoupon} setCoupon={options.setCoupon} key={recCoupon._id} />
			)}
		</div>
		{showDeleteModal && <DeleteModal coupon={coupon} closeModal={closeDeleteModal} deleteCoupon={options.deleteCoupon} />}
		{showEditModal && <EditModal coupon={coupon} closeModal={closeEditModal} editCoupon={options.editCoupon} setCoupon={setCoupon} />}
	</>;
};

export default Coupon;