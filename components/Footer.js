import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-section-box'>
				<FooterSection title='Product'>
					<FooterItem>Overview</FooterItem>
					<FooterItem>Developer Docs</FooterItem>
					<FooterItem>Trial</FooterItem>
				</FooterSection>
				<FooterSection title='Partners'>
					<FooterItem>Become a partner</FooterItem>
					<FooterItem>Technology Partners</FooterItem>
					<FooterItem>Tech Blogs</FooterItem>
				</FooterSection>
				<FooterSection title='Support'>
					<FooterItem>Customer Support</FooterItem>
					<FooterItem>Community Support</FooterItem>
					<FooterItem>Training</FooterItem>
				</FooterSection>
				<FooterSection title='Company'>
					<FooterItem>About us</FooterItem>
					<FooterItem>Careers</FooterItem>
					<FooterItem>Contact</FooterItem>
					<FooterItem>Privacy Policy</FooterItem>
					<FooterItem>Terms of Use</FooterItem>
				</FooterSection>
			</div>
			<CopyRight>
				©2020 Copyright OpenMarket Api - A ThinkCrypt Company. All Rights
				Reserved
			</CopyRight>
		</div>
	);
};

const FooterSection = ({ title, children }) => {
	return (
		<div className='footer-section'>
			<h3>{title}</h3>
			{children}
		</div>
	);
};

const FooterItem = ({ children }) => {
	return (
		<div className='footer-item'>
			<p>{children}</p>
		</div>
	);
};

const CopyRight = ({ children }) => {
	return (
		<div className='copyright'>
			<p>{children}</p>
		</div>
	);
};

export default Footer;
