import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		applyMiddleware(routerMiddleware(history), thunk, logger)
	);

	return store;
}
