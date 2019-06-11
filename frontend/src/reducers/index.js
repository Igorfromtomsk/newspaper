import {combineReducers} from "redux";

import PostsReducer from './posts';
import GeneralReducer from './general';
import EditorReducer from './editor';
import * as EditorActions from "../constants/editor";

function undoable(reducer) {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  };

  return function(state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case EditorActions.UNDO:
        if (past) {
          return {
            past: past.slice(0, past.length - 1),
            present: past[past.length - 1],
            future: [present, ...future]
          };
        } else {
          return {
            past,
            present,
            future
          };
        }
      case EditorActions.REDO:
        if (!future[0]) {
          return {
            past,
            present,
            future
          };
        } else {
          return {
            past: [...past, present],
            present: future[0],
            future: future.slice(1)
          };
        }

      default:
        const newPresent = reducer(present, action);

        if (present === newPresent) {
          return state
        }

        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }
}

const MasterReducer = combineReducers({
  PostsReducer,
  GeneralReducer,
  EditorReducer: undoable(EditorReducer)
});

export default MasterReducer;