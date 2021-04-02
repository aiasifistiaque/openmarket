import React from 'react';
import { features } from '../../data';
import { Header3 } from '..';
import Subscribe from '../Subscribe';

const Feature = () => {
	return (
		<div className='feature'>
			<Subscribe />
			<h2>Features</h2>
			{features.map((feature, i) => (
				<div key={i} style={{ margin: '8% 0' }}>
					<h3>{feature.title}</h3>
					<p>{feature.data}</p>
				</div>
			))}
		</div>
	);
};

export default Feature;
