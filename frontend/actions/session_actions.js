import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

export const signup = userInfo => dispatch => (
  APIUtil.signup(userInfo).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => (dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const login = userInfo => dispatch => (
  APIUtil.login(userInfo).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => (dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    errors => (dispatch(receiveErrors(errors.responseJSON))
  ))
);
