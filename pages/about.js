import React from 'react';
import Page from '../components/Page';
import { Header3 } from '../components';
import Image from 'next/image';
import { founders } from '../data';
import JoinTeam from '../components/JoinTeam';

const about = () => {
	return (
		<Page title='about'>
			<div className='about'>
				<div className='about-headers'>
					<h3>
						OpenMarket is a concern of ThinkCrypt technologies Ltd. Our mission
						is to build technology that accelerates growth, making it easy for
						stand-out brands to deliver unique digital experiences that unlock
						revenue growth at speed.
					</h3>
					<br />
					<h3>
						As the API-first Headless Commerce Service, OpenMarket is your
						release from rigid, bloated platforms that slow you down. The only
						solution that provides both the flexibility and speed required to
						bring even the most complex commerce requirements to life in only a
						few weeks.
					</h3>
				</div>
				<div className='founder-box'>
					<div className='founders'>
						<h2>Our Founders</h2>
						<FounderBox>
							{founders.map((founder, i) => (
								<FounderItem
									key={i}
									src={founder.src}
									name={founder.name}
									post={founder.post}
								/>
							))}
						</FounderBox>
					</div>
					<JoinTeam />
				</div>
			</div>
		</Page>
	);
};

const FounderBox = ({ children }) => {
	return <div className='founder-item-container'>{children}</div>;
};

const FounderItem = ({ name, src, post }) => {
	const source = src == 'male' ? '/male_avatar.png' : '/female_avatar.png';
	return (
		<div className='founder-item'>
			<Image
				src={source}
				alt='Picture of the author'
				width={220}
				height={200}
			/>
			<h3>{name}</h3>
			<p>{post}</p>
		</div>
	);
};

export default about;
