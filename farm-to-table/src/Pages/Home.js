import React from 'react'
import Header from '../ReusableComponents/Header'
import Navbar from '../ReusableComponents/Navbar'
import Main from '../Content/Main'
import Footer from '../ReusableComponents/Footer'

export default function Home() {
	return (
		<div>
			<Header />
			<Navbar />
			<Main />
			<Footer />
		</div>
	)
}
