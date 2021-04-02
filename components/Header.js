import React from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar expand='lg' className='header'>
			<Navbar.Brand className='header-logo'>
				<Link href='/'>
					<p>Open Market</p>
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='header-items'>
					<Link href='/'>
						<p>Home</p>
					</Link>
					<Link href='/pricing'>
						<p>Pricing</p>
					</Link>
					<Link href='/contact'>
						<p>Contact</p>
					</Link>
					<Link href='/about'>
						<p>About us</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
