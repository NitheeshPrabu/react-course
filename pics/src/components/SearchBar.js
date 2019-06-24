import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' };

	//fix this context error
	// constructor(props) {
	// 	super(props);

	// 	this.onFormSubmit = this.onFormSubmit.bind(this);
	// }

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				{/* another method to fix this context error
				<form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;