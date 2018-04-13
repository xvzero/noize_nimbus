import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import TrackPage from './track_page';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.trackUrl],
  author: state.entities.users[ownProps.match.params.userUrl],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: trackUrl => dispatch(fetchTrack(trackUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackPage);
