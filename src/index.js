import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import configureStore, { history } from './store';

const store = configureStore();
Amplify.configure(awsExports);

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App history={history} />
		</Provider>,
		document.getElementById('root')
	);
};
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
