import {
  RECEIVE_USERS,
  RECEIVE_USER,
  REMOVE_USER
} from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_CURRENT_USER:
      if (action.currentUser)
        return merge({}, state, {[action.currentUser.profile_url]: action.currentUser});
      else
        return state;
    default:
      return state;
  }
};

  export default usersReducer;
