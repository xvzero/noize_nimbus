import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mapStateToProps = state => ({
  comments: state.entities.comments
});

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(fetchComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
