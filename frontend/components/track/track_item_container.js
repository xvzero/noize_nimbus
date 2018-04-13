import React from 'react';
import { connect } from 'react-redux';
import { playPauseTrack, getAudioPlayer } from '../../actions/audio_player_actions';
import { fetchUser } from '../../actions/user_actions';
import { deleteTrack } from '../../actions/track_actions';
import TrackItem from './track_item';

const mapStateToProps = (state, ownProps) => ({
  audioPlayer: state.ui.audioPlayer,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  playPauseTrack: track => dispatch(playPauseTrack(track)),
  deleteTrack: (trackId, trackUrl) => dispatch(deleteTrack(trackId, trackUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackItem);
