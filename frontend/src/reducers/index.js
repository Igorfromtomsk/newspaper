import {combineReducers} from "redux";

import PostsReducer from './posts';

const MasterReducer = combineReducers({
  PostsReducer
});

export default MasterReducer;