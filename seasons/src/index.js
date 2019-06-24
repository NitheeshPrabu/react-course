import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	state = {
		lat: null,
		errorMessage: ''
	};
	
	/*	LIFECYCLE METHODS
	/*	- construtor: Setting up state, creating refs and method binding.
	/*	- componentDidMount: Starting AJAX calls to load in data for your component.
	/*	- componentDidUpdate: Reacting to committed changes to the DOM.
	/*	- componentWillUnmount: Cleaning up any leftover debris from your component.
	/*	- render: Returning component JSX.
	/*		SOME RARELY USED ONES
	/* 	- getDerivedStateFromProps: Returning a state object based on the initial props, 
									Updating state based on props, when the props themselves aren’t enough.
	/*	- shouldComponentUpdate: Controlling exactly when your component will re-render.
	/*	- getSnapshotBeforeUpdate: Taking a look at some attribute of the current DOM, and passing that value on to componentDidUpdate.
	
			More info: https://blog.bitsrc.io/react-16-lifecycle-methods-how-and-when-to-use-them-f4ad31fb2282
	*/

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
				this.setState({ errorMessage: '' });
			},
			(error) => {
				this.setState({ errorMessage: error.message });
				this.setState({ lat: null });
			}
		);
	}

	renderComponents() {
		if (!this.state.lat && this.state.errorMessage) {
			return <div>Error: {this.state.errorMessage}</div>;
		}
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Loader message='Please allow location access to continue...' />;
	}

	render() {
		return this.renderComponents();
	};
};

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);