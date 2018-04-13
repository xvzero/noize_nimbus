import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import merge from 'lodash/merge';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    default:
      return state;
  }
};

  export default commentsReducer;
