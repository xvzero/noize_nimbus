import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import TrackPage from './track_page';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackUrl],
  author: state.entities.users[ownProps.match.params.userUrl],
  audio_player: state.ui.audioPlayer,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackUrl => dispatch(fetchTrack(trackUrl)),
  fetchComments: trackId => dispatch(fetchComments(trackId)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPage);
