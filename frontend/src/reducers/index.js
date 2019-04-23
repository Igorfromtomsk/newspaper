import {combineReducers} from "redux";

import PostsReducer from './posts';
import GeneralReducer from './general';
import EditorReducer from './editor';

const MasterReducer = combineReducers({
  PostsReducer,
  GeneralReducer,
  EditorReducer
});

export default MasterReducer;