import React from 'react';
import Page from '../components/Page';
import DetailCards from '../components/Home/DetailCards';
import ContactPage from '../components/ContactPage';

const contact = () => {
	return (
		<Page title='contact us'>
			<ContactPage />
			<DetailCards />
		</Page>
	);
};

const ContactFrom = ({ children }) => {
	return <div>{children}</div>;
};

export default contact;
