import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Page = ({ title, children }) => {
	return (
		<div>
			<Head>
				<title>{title || 'open market'}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<div className='page'> {children}</div>

			<Footer />
		</div>
	);
};

export default Page;
