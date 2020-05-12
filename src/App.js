import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';

import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
	return (
		<div className="App">
			<header className="App-header" />
			<Auth />
		</div>
	);
}

export default withAuthenticator(App);
