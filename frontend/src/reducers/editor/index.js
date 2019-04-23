import GridSettingsReducer from './girdSettings';


export default function EditorReducer(state = {}, action) {
  return {
    gridSettings: GridSettingsReducer(state.gridSettings, action)
  }
}