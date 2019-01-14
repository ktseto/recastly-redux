import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

var rootReducer = combineReducers({
  currentVideo: currentVideoReducer,
  videos: videoListReducer,
});

export default rootReducer;
