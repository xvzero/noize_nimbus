import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT_ERRORS = "REMOVE_COMMENT_ERRORS";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const receiveErrors = (uploadId, errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  uploadId,
  errors
});

export const removeErrors = uploadId => ({
  type: REMOVE_COMMENT_ERRORS,
  uploadId
});

export const fetchComments = () => dispatch => (
  APIUtil.fetchComments().then(
    comments => dispatch(receiveComments(comments)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const fetchComment = commentId => dispatch => (
  APIUtil.fetchComment(commentId).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const createComment = (commentInfo, uploadId) => dispatch => (
  APIUtil.createComment(commentInfo).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(uploadId, errors.responseJSON)
  ))
);

export const updateComment = commentInfo => dispatch => (
  APIUtil.updateComment(commentInfo).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const deleteComment = commentId => dispatch => (
  APIUtil.deleteComment(commentId).then(
    () => dispatch(removeComment(commentId)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);
