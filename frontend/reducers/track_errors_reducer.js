import {
  RECEIVE_TRACK_ERRORS,
  RECEIVE_TRACK,
  REMOVE_TRACK_ERRORS
} from '../actions/track_actions';

const trackErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    case REMOVE_TRACK_ERRORS:
      return [];
    case RECEIVE_TRACK:
      return [];
    default:
      return state;
  }
};

export default trackErrorsReducer;
