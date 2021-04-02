import React from 'react';
import Image from 'next/image';
import { SolidButton } from '../components/index';
import { colors } from '../constants';
import Subscribe from '../components/Subscribe';

const ContactPage = () => {
	return (
		<div className='contact-page'>
			<div className='contact-page-image'>
				<Image
					src='/contactimage.png'
					alt='Picture of the author'
					width={500}
					height={500}
				/>
			</div>
			<div className='contact-page-form'>
				<ContactInput label='Name' type='text' placeholder='Enter your name' />
				<ContactInput
					label='Contact Number'
					type='text'
					placeholder='Contact Number'
				/>
				<ContactInput label='E-mail' type='text' placeholder='E-mail' />
				<ContactInput label='Query' type='textarea' placeholder='query' />
				<p>
					By submitting your information you agree with our ​​​
					<span style={{ color: 'slateblue', cursor: 'pointer' }}>
						Terms of Use.​
					</span>
				</p>
				<SolidButton title='submit' />
			</div>
		</div>
	);
};

const ContactInput = ({ label, type, placeholder }) => {
	return (
		<div className='contact-input'>
			<p className='input-label'>{label}</p>
			{type == 'textarea' ? (
				<textarea rows='10'></textarea>
			) : (
				<input
					className='input-field'
					type={type || 'text'}
					placeholder={placeholder}
				/>
			)}
		</div>
	);
};

export default ContactPage;
