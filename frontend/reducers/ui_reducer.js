import { combineReducers } from 'redux';
import audioPlayerReducer from './audio_player_reducer'; 

const uiReducer = combineReducers({
  audioPlayer: audioPlayerReducer
});

export default uiReducer;
