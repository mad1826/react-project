import ContactForm from '../components/ContactForm';
import '../css/About.css';

const About = () => {
	return <div id='about-us-text'>
		<div>
			<h2>Our Commitment to You</h2>
			<p>
				Every person is a shopper, and every shopper loves a good deal. We
				at Couponder.com know that these deals can be a slight convenience
				at worse or a life-saving necessity at best. Our coupons are
				specially curated to show the biggest deals at the most relevant and
				available retailers. Our coupons stay up-to-date so you can be sure
				that whatever you save today can be used when you next go to the
				store. We hope someone can make use of each and every coupon
				available here and that those savings add up to a more fulfilling
				lifestyle!
			</p>
		</div>
		<div>
			<h2>What Data We Collect</h2>
			<p>
				We prioritize user privacy to the utmost degree. Only the bare
				minimum information is collected to balance a user-friendly
				experience with a negligible risk of breachable data. Your first
				name is collected to greet you and identify your personal accounts.
				Your phone number is your login method as well as your point of
				contact, allowing you to share and update coupons across multiple
				devices simultaneously.
			</p>
		</div>
		<div id='contact-us'>
			<h2>Contact Us</h2>
			<p>
				We would love to hear your feedback! Whether it's suggestions, bug
				reports, or any other thoughts on our services, you can reach us at
				support@couponder.com. We do our best to respond to all serious
				inquiries within 2-5 business days. If a response seems slow, fear
				not! We work diligently to review all inquiries as they come in, so
				please be patient as we work through all feedback.
			</p>
			<ContactForm />
		</div>
	</div>;
};

export default About;