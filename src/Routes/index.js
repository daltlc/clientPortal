import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';

import AdminRoutes from './AdminRoutes';
import GeneralRoutes from './GeneralRoutes';

export default class Routes extends Component {
	render() {
		const { groups } = this.props;
		console.log({ groups });
		const isAdmin = groups && groups.indexOf('Admin') > -1;
		const isMember = groups && groups.indexOf('Member') > -1;
		return groups ? (
			<ConnectedRouter history={history}>
				{isAdmin ? <AdminRoutes /> : isMember ? <GeneralRoutes /> : <GeneralRoutes />}
			</ConnectedRouter>
		) : (
			<div>Loading...</div>
		);
	}
}
