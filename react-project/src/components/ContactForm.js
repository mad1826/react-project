import { useState } from 'react';

const ContactForm = () => {
	const [result, setResult] = useState('');

	const onSubmit = async event => {
		event.preventDefault();
		setResult('Sending message . . .');
		const formData = new FormData(event.target);

		formData.append('access_key', 'e2e85acb-a31c-4618-b04a-371a26d51324');

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData
		});

		const data = await response.json();

		if (data.success) {
			setResult('Your message has been sent!');
			event.target.reset();
		}
		else {
			console.log('Error', data);
			setResult(data.message);
		}
	};

	return <form id='contact-form' onSubmit={onSubmit}>
		<input type='hidden' name='access_key' value='e2e85acb-a31c-4618-b04a-371a26d51324' />
		<div className='columns'>
			<label for='name'>Name:</label>
			<input id='name' type='text' placeholder='Example: John Doe' name='name' required />
		</div>
		<div className='columns'>
			<label for='email'>Email:</label>
			<input id='email' type='email' placeholder='Example: jd@gmail.com' name='email' required />
		</div>
		<div className='columns'>
			<label for='message'>Message:</label>
			<textarea id='message' name='message' required />
		</div>
		<input type='hidden' name='subject' value='CouPonder Message Received' />
		<input type='hidden' name='from_name' value='CouPonder.com' />

		<p>
			<button type='submit'>Send Message</button>
		</p>

		<p id='result'>{result}</p>
	</form>;
};

export default ContactForm;