import React from 'react';
import Header from '../ReusableComponents/Header';
import BootstrapNav from '../ReusableComponents/BootstrapNav';
import Main from '../Content/Main';
import Footer from '../ReusableComponents/Footer';

export default function Home() {
	return (
		<div>
			<BootstrapNav />
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
