import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import {
  passAudioPlayerRef,
  playAudioPlayer,
  pauseAudioPlayer,
  seekAudioPlayer
} from '../../actions/audio_player_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  audioPlayer: state.ui.audioPlayer,
  currentTrack: state.entities.tracks[state.ui.audioPlayer.currentTrackURL]
});

const mapDispatchToProps = dispatch => ({
  passAudioPlayerRef: audioPlayerRef => dispatch(passAudioPlayerRef(audioPlayerRef)),
  playAudioPlayer: trackURL => dispatch(playAudioPlayer(trackURL)),
  pauseAudioPlayer: () => dispatch(pauseAudioPlayer()),
  seekAudioPlayer: (trackURL, playedSeconds, duration) => dispatch(seekAudioPlayer(trackURL, playedSeconds, duration ))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
