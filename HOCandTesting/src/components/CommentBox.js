import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSumbit = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button type="submit">Submit Comment</button>
          <button className="fetch-comments" type="button" onClick={this.props.fetchComments}>
            Fetch Comments
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
