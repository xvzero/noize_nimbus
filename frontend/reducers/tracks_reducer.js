import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK
} from '../actions/track_actions';
import merge from 'lodash/merge';

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      return merge(newState, {[action.track.track_url]: action.track});
    case REMOVE_TRACK:
      delete newState[action.trackurl];
      return newState;
    default:
      return state;
  }
};

  export default tracksReducer;
