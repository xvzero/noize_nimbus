import {
  RECEIVE_USERS,
  RECEIVE_USER,
  REMOVE_USER
} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      if (action.currentUser)
        return merge(newState, {[action.currentUser.profile_url]: action.currentUser});
      else
        return state;
    case RECEIVE_USER:
      return merge(newState, {[action.user.profile_url]: action.user});
    case REMOVE_USER:
      delete newState[action.user.profile_url];
      return newState;
    default:
      return state;
  }
};

  export default usersReducer;
