import { Link } from 'react-router-dom';
import '../css/Header.css';
import { useState } from 'react';

const Header = header => {
	const [menuOpen, setMenuOpen] = useState(false);
	const isCurrent = page => header.page === `/${page}`;

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return <header id='main-header' onClick={header.onClick}>
		<div id='top-row' className='columns-all'>
			<h1>CouPonder<img src='images/dollar.png' alt='Dollar sign' />com</h1>
			<div id='header-icons'>
				<Link to='/admin'>
					<img id='admin' src='images/admin.png' alt='Administrator only' />
				</Link>
				<Link to='/cart'>
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
				<li id={window.location.pathname === '/' ? 'current-tab' : ''}><a href='/react-project/'>Featured</a></li>
				<li id={isCurrent('grocery') ? 'current-tab' : ''}><Link to='/grocery'>Grocery</Link></li>
				<li id={isCurrent('entertainment') ? 'current-tab' : ''}><Link to='/entertainment'>Entertainment</Link></li>
				<li id={isCurrent('hygiene') ? 'current-tab' : ''}><Link to='/hygiene'>Hygiene</Link></li>
				<li id={isCurrent('about') ? 'current-tab' : ''}><Link to='/about'>About Us</Link></li>
				<li><input id='search' type='text' placeholder='Search' /></li>
			</ul>
		</nav>
	</header>;
};

export default Header;