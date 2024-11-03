import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

const Layout = () => {
	const [page, setPage] = useState(window.location.pathname);

	const onClick = () => {
		setPage(window.location.pathname);
	};

	return <>
		<Header page={page} onClick={onClick} />

		<div id='content'>
			<Outlet />
		</div>

		<Footer />
	</>;
};

export default Layout;