import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
	return <footer>
		<ul>
			<li>&copy; mad1826 2024</li>
			<li>
				Images by
				{' '}
				<Link to='https://www.freepik.com/'>FreePik</Link>
				{' and '}
				<Link to='https://images.google.com/'>Google Images</Link>
			</li>
			<li><Link to='about.html#contact-us'>Contact Us</Link></li>
		</ul>
	</footer>;
};

export default Footer;