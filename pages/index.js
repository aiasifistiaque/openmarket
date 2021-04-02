import Head from 'next/head';
import Header from '../components/Header';
import HeroHome from '../components/Home/HeroHome';
import DetailCards from '../components/Home/DetailCards';
import Footer from '../components/Footer';
import Feature from '../components/Home/Feature';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<HeroHome />
			<DetailCards />

			<div style={{ backgroundColor: 'slateblue', padding: '1% 3%' }}>
				<Feature />
			</div>

			<Footer />
		</div>
	);
}
