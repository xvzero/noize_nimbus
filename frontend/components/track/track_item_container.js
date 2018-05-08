import React from 'react';
import { connect } from 'react-redux';
import {
  playAudioPlayer,
  pauseAudioPlayer,
  seekAudioPlayer
} from '../../actions/audio_player_actions';
import { fetchUser } from '../../actions/user_actions';
import { deleteTrack } from '../../actions/track_actions';
import TrackItem from './track_item';

const mapStateToProps = (state, ownProps) => ({
  audioPlayer: state.ui.audioPlayer,
  // users: state.entities.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  playAudioPlayer: trackURL => dispatch(playAudioPlayer(trackURL)),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer()),
  seekAudioPlayer: (trackURL, playedSeconds, duration) => dispatch(seekAudioPlayer(trackURL, playedSeconds, duration)),
  deleteTrack: (trackId, trackUrl) => dispatch(deleteTrack(trackId, trackUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackItem);
