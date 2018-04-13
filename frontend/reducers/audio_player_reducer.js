import {
  PLAY_PAUSE_TRACK,
  UPDATE_AUDIO_PLAYER,
  RECEIVE_AUDIO_PLAYER
 } from '../actions/audio_player_actions';
import merge from 'lodash/merge';

const _initialPlayerState = ({
  sessionTracks: {},
  currentTrackId: null,
  playing: false
});

const audioPlayerReducer = (state = _initialPlayerState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case PLAY_PAUSE_TRACK:
      return merge(newState, {
        sessionTracks: {[action.track.id]: action.track},
        currentTrackId: action.track.id,
        playing: !newState.playing
      });
    case UPDATE_AUDIO_PLAYER:
      const track = merge(action.audioPlayer.track, {playedSeconds: action.audioPlayer.playedSeconds});
      return merge(newState, {
        sessionTracks: {[track.id]: track},
        playing: action.audioPlayer.playing
      });
    case RECEIVE_AUDIO_PLAYER:
      return state;
    default:
      return state;
  }
};

export default audioPlayerReducer;
