import { Link } from 'react-router-dom';
import '../css/Header.css';
import { useState } from 'react';

const Header = header => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [page, setPage] = useState('featured');

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return <header id='main-header' onClick={header.onClick}>
		<div id='top-row' className='columns-all'>
			<h1>CouPonder<img src='images/dollar.png' alt='Dollar sign' />com</h1>
			<div id='header-icons'>
				<Link to='/admin' onClick={() => setPage('')}>
					<img id='admin' src='images/admin.png' alt='Administrator only' />
				</Link>
				<Link to='/cart' onClick={() => setPage('')}>
					<img src='images/cart.png' alt='Cart' />
				</Link>
			</div>
		</div>
		<nav id='main-nav'>
			<div id='toggle-nav' onClick={toggleMenu}>
				<div />
				<div />
				<div />
			</div>
			<ul id='nav-items' className={menuOpen ? '' : 'hidden-small'}>
				<li id={page === 'featured' ? 'current-tab' : ''}><a href='/react-project/' onClick={() => setPage('featured')}>Featured</a></li>
				<li id={page === 'grocery' ? 'current-tab' : ''}><Link to='/grocery' onClick={() => setPage('grocery')}>Grocery</Link></li>
				<li id={page === 'entertainment' ? 'current-tab' : ''}><Link to='/entertainment' onClick={() => setPage('entertainment')}>Entertainment</Link></li>
				<li id={page === 'hygiene' ? 'current-tab' : ''}><Link to='/hygiene' onClick={() => setPage('hygiene')}>Hygiene</Link></li>
				<li id={page === 'about' ? 'current-tab' : ''}><Link to='/about' onClick={() => setPage('about')}>About Us</Link></li>
				<li><input id='search' type='text' placeholder='Search' /></li>
			</ul>
		</nav>
	</header>;
};

export default Header;