import React from 'react';
import { connect } from 'react-redux';
import { playPauseTrack } from '../../actions/audio_player_actions';
import TrackItem from './track_item';

const mapDispatchToProps = dispatch => ({
  playPauseTrack: action => dispatch(playPauseTrack(action))
});

export default connect(
  null,
  mapDispatchToProps
)(TrackItem);
