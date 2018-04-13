import {
  RECEIVE_TRACK_ERRORS,
  RECEIVE_TRACK,
  REMOVE_UPLOAD_ERRORS,
  REMOVE_TRACK_ERRORS
} from '../actions/track_actions';
import merge from 'lodash/merge';

const trackErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return merge(newState, {[action.uploadId]: action.errors});
    case REMOVE_UPLOAD_ERRORS:
      if (newState[action.uploadId]) delete newState[action.uploadId];
        return newState;
    case REMOVE_TRACK_ERRORS:
      return {};
    case RECEIVE_TRACK:
      if (newState[action.uploadId]) delete newState[action.uploadId];
        return newState;
    default:
      return state;
  }
};

export default trackErrorsReducer;
