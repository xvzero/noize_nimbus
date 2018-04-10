import {
  PLAY_PAUSE_TRACK,
  UPDATE_TRACK
 } from '../actions/audio_player_actions';
import merge from 'lodash/merge';

const _initialPlayerState = ({
  sessionTracks: {}
});

const audioPlayerReducer = (state = _initialPlayerState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case PLAY_PAUSE_TRACK:
      const track = {[action.trackInfo.id]: action.trackInfo};
      return merge(newState, {sessionTracks: track, currentTrackId: action.trackInfo.id});
    case UPDATE_TRACK:
      return state;
    default:
      return state;
  }
};

export default audioPlayerReducer;
