import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const createUser = userInfo => dispatch => (
  APIUtil.createUser(userInfo).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const updateUser = userInfo => dispatch => (
  APIUtil.updateUser(userInfo).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const deleteUser = userId => dispatch => (
  APIUtil.deleteUser(userId).then(
    () => dispatch(removeUser(userId)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);
