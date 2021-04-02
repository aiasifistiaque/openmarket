import React from 'react';
import { colors } from '../constants';

export const Header3 = ({ children, color }) => {
	return (
		<div className='header-three' style={{ color: color || colors.dark }}>
			{children}
		</div>
	);
};

export const OutlinedButton = ({ title, onClick }) => {
	return (
		<div className='button-outlined'>
			<p>{title}</p>
		</div>
	);
};

export const SolidButton = ({ title, onClick }) => {
	return (
		<div className='button-solid'>
			<p style={{ color: 'whitesmoke' }}>{title}</p>
		</div>
	);
};
