import React from 'react';
import Page from '../components/Page';
import ContactPage from '../components/ContactPage';
import DetailCards from '../components/Home/DetailCards';

const pricing = () => {
	return (
		<Page title='pricing'>
			<div style={{ backgroundColor: 'slateblue', padding: '5%' }}>
				<PricingSection />
				<ContactPage />
			</div>
			<DetailCards />
		</Page>
	);
};

const PricingSection = () => {
	return (
		<div className='pricing-section'>
			<h3>OpenMarket Api pricing</h3>
			<p>Our flexible pricing enables every business to quickly</p>
			<p>and seamlessly compose differentiated</p>
			<p>commerce experiences.</p>
			<div className='sales-button'>
				<p style={{ fontSize: 16 }}>Contact Sales Now</p>
			</div>
		</div>
	);
};

export default pricing;
