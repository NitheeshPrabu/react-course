import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSumbit = event => {
    event.preventDefault();

    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
