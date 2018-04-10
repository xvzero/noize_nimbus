import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import { updateCurrentTrack } from '../../actions/audio_player_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  currentTrackId: state.ui.audioPlayer.currentTrackId,
  sessionTracks: state.ui.audioPlayer.sessionTracks
});

const mapDispatchToProps = dispatch => ({
  updateCurrentTrack: duration => updateCurrentTrack(duration)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
