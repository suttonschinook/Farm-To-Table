import React from 'react'
import Header from '../ReusableComponents/Header'
import Navbar from '../ReusableComponents/Navbar'
import RecipeMain from '../Content/RecipeMain'
import Footer from '../ReusableComponents/Footer'

export default function Home() {
	return (
		<div>
			<Header />
			<Navbar />
			<RecipeMain />
			<Footer />
		</div>
	)
}
