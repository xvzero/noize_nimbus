import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tracksReducer from './tracks_reducer';
// import commentsReducer from './comments_reducer';
import uploadsReducer from './uploads_reducer';
// import playlistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
  // comments: commentsReducer,

  uploads: uploadsReducer
});

export default entitiesReducer;
