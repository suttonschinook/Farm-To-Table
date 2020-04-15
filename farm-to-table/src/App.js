import React from 'react'
import { Route, Switch } from 'react-router-dom'

export default function App() {
	return (
		<div>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</div>
	)
}
