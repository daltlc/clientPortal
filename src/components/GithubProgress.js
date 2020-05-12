import React from 'react';
import axios from 'axios';

class GithubProgress extends React.Component {
	state = { results: [] };
	async componentDidMount() {
		// const profile = await axios.get('http://api.github.com/repos/daltlc/amplify-react-native-SharePlz/commits');
		// this.setState({ results: profile.data });
		// console.log(this.state.results);
	}

	selectCorrectRepo() {}
	render() {
		return <div>{/* <h1>{this.state.results}</h1> */}</div>;
	}
}
export default GithubProgress;
