import React, { useState } from 'react'

export default function Main() {
	const [inputs, setInputs] = useState("") 
	return (
		<div>
			<h1>Select your produce box</h1>
				<h2>Mixed Fruits and Veggies</h2>
				<h2>Fruit only</h2>
				<h2>Veggies only</h2>
			<form>
				
			</form>
			<p>This is where main content goes</p>
		</div>
	)
}
