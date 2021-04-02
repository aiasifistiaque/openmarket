import React from 'react';

const HeroHome = () => {
	return (
		<div className='hero-home'>
			<div>
				<h1>A modern design system</h1>
				<h1>for your new</h1>
				<h1 style={{ color: 'slateblue' }}>e-commerce</h1>
			</div>
			<div>
				<h3>
					Unify experiences on the leading API-first headless commerce platform
				</h3>
				<div className='button-box'>
					<div className='button-solid'>
						<p>Get in Touch</p>
					</div>
					<div className='button-outlined'>
						<p>Documentation</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroHome;
