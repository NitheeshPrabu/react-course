import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

	state = { images: [] };

	//using promises
	// onSearchSubmit(term) {
	// 	axios.get('https://api.unsplash.com/search/photos', {
	// 		params: {
	// 			query: term
	// 		},
	// 		headers: {
	// 			Authorization: 'Client-ID 9894373ae9362e1d4d6e150517f496ece43902aecf9a343528326e9e91c25cd8'
	// 		}
	// 	}).then((response) => {
	// 		console.log(response.data.results);
	// 	});
	// }

	onSearchSubmit = async (term) => {
		// const response = await axios.get('https://api.unsplash.com/search/photos', {
		// 	params: {
		// 		query: term
		// 	},
		// 	headers: {
		// 		Authorization: 'Client-ID 9894373ae9362e1d4d6e150517f496ece43902aecf9a343528326e9e91c25cd8'
		// 	}
		// });

		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});

		this.setState({images: response.data.results});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;