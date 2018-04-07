import {
  RECEIVE_UPLOAD,
  REMOVE_UPLOAD
 } from '../actions/upload_actions';
import merge from 'lodash/merge';

const uploadReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UPLOAD:
      return merge({}, state, {[action.upload.id]: action.upload});
    case REMOVE_UPLOAD:
      const newState = merge({}, state);
      delete newState[action.uploadId];
      return newState;
    default:
      return state;
  }
};

export default uploadReducer;
