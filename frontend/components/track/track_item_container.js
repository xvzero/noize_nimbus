import React from 'react';
import { connect } from 'react-redux';
import { playPauseTrack } from '../../actions/audio_player_actions';
import { fetchUser } from '../../actions/user_actions';
import TrackItem from './track_item';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  playPauseTrack: action => dispatch(playPauseTrack(action)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
  null,
  mapDispatchToProps
)(TrackItem);
