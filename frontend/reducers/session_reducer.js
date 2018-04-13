import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullSession = ({
  currentUser: null
});

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    let currentUser = null;
      if (action.currentUser) {
        currentUser = {
          id: action.currentUser.id,
          profile_url: action.currentUser.profile_url,
          display_name: action.currentUser.display_name,
          session_token: action.currentUser.session_token
        };
      }
      return merge({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
