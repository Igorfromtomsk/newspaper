import * as Actions from '../../constants/editor/gridSettings';


const initState = {
  gridIsHidden: false,
  columnsAmount: 6,
  columnsOffset: 15
};


export default function GridSettingsReducer(state = initState, action) {
  switch (action.type) {
    case Actions.TOGGLE_GRID_VISIBILITY:
      return {...state, gridIsHidden: !state.gridIsHidden};
    case Actions.CHANGE_COLUMNS_AMOUNT:
      return {...state, columnsAmount: action.payload};
    case Actions.CHANGE_COLUMNS_OFFSET:
      return {...state, columnsOffset: action.payload};
    default:
      return state;
  }
}