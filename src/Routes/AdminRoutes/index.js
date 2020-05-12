import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function GeneralRoutes() {
	return (
		<Switch>
			<Route exact path="/">
				<Dashboard />
			</Route>
		</Switch>
	);
}

export default GeneralRoutes;
