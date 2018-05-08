import {
  PASS_AUDIO_PLAYER,
  PLAY_AUDIO_PLAYER,
  PAUSE_AUDIO_PLAYER,
  SEEK_AUDIO_PLAYER
 } from '../actions/audio_player_actions';
import merge from 'lodash/merge';

const _initialPlayerState = ({
  playerRef: null,
  sessionTracks: {},
  playedSeconds: 0,
  currentTrackURL: null,
  playing: false,
  duration: 0
});

const audioPlayerReducer = (state = _initialPlayerState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case PASS_AUDIO_PLAYER:
      return merge(newState, {playerRef: action.audioPlayerRef});
    case PLAY_AUDIO_PLAYER:
      //save current track position if passed in track is different
      if (newState.currentTrackURL !== action.trackURL) {
        if (newState.currentTrackURL)
          newState.sessionTracks[newState.currentTrackURL] = newState.playerRef.getCurrentTime();
        newState.currentTrackURL = action.trackURL;
      }

      //load new track's saved info if it's been played before
      if (newState.sessionTracks[action.trackURL])
        newState.playedSeconds = newState.sessionTracks[action.trackURL];
      else
        newState.playedSeconds = 0;

      newState.playing = true;
      return newState;
    case PAUSE_AUDIO_PLAYER:
      //save current track position to sync up everywhere on play
      newState.sessionTracks[newState.currentTrackURL] = newState.playerRef.getCurrentTime();
      newState.playedSeconds = newState.playerRef.getCurrentTime();
      newState.playing = false;
      return newState;
    case SEEK_AUDIO_PLAYER:
      //save current track position if passed in track is different
      if (newState.currentTrackURL !== action.trackURL) {
        if (newState.currentTrackURL)
          newState.sessionTracks[newState.currentTrackURL] = newState.playerRef.getCurrentTime();
        newState.currentTrackURL = action.trackURL;
      }
      //save position for new track
      newState.sessionTracks[newState.currentTrackURL] = action.playedSeconds;

      //set position to passed in position
      newState.playedSeconds = action.playedSeconds;

      //set duration to new track's duration
      newState.duration = action.duration;

      return newState;
    default:
      return state;
  }
};

export default audioPlayerReducer;
