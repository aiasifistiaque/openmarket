import React from 'react';
import { Header3 } from '../index';

const DetailCards = () => {
	return (
		<div className='detail-cards'>
			<Header3 color='whitesmoke'>Why choose OpemMarket Api?</Header3>
			<Header3 color='whitesmoke'>
				Rapidly outmaneuver competition, unlock new business models and markets,
				and adapt to changing customer demands with our API first, headless
				commerce microservices solution. Take back control of your vision
			</Header3>
			<div className='card-box'>
				<Card title='Take back control of your vision'>
					Say goodbye to rigid, monolithic platforms and overly complex
					microservices. Deliver unique, unified commerce experiences across any
					digital touchpoint with ease.
				</Card>
				<Card title='Accelerate your time-to-market'>
					Quickly build, deploy, and continuously optimize your commerce
					experiences with our powerful APIs, ready-to-use commerce
					applications, and comprehensive developer docs.
				</Card>
				<Card title='Ensure Business Success'>
					Sleep easy knowing your business is powered by a company with
					expertise. We know how to support mission critical launches,
					high-volume projects like Cyber Monday, and how to keep your data
					secure.
				</Card>
			</div>
		</div>
	);
};

const Card = ({ title, children }) => {
	return (
		<div className='card'>
			<h3>{title}</h3>
			<p>{children}</p>
		</div>
	);
};

export default DetailCards;
