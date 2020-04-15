import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="about" component={About} />
				<Route exact path="recipes" component={Recipes} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	)
}
