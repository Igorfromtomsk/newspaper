import GridSettingsReducer from './girdSettings';
import * as Actions from "../../constants/editor";
import LayersReducer from "./addLayer";


const initialState = {
  uiIsHidden: false
};


function index(state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_UI_VISIBILITY:
      return {...state, uiIsHidden: !state.uiIsHidden};
    default:
      return state;
  }
}

export default function EditorReducer(state = {}, action) {
  return {
    index: index(state.index, action),
    gridSettings: GridSettingsReducer(state.gridSettings, action),
    drawRect: LayersReducer(state.drawRect, action)
  }
}