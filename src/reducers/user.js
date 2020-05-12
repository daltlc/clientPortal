const INITIAL_STATE = {
	profile: {}
};

export default (state = INITIAL_STATE, action) => {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case 'SET_USER':
			newState.profile = action.payload;
			break;
		default:
			return newState;
	}

	return newState;
};
