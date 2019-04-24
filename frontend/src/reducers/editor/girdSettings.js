import * as Actions from '../../constants/editor/gridSettings';


const initState = {
  gridIsHidden: false,
  columnsAmount: 6,
  columnsOffset: 15,
  leftPadding: 150,
  rightPadding: 150,
  samePadding: true
};


export default function GridSettingsReducer(state = initState, action) {
  switch (action.type) {
    case Actions.TOGGLE_GRID_VISIBILITY:
      return {...state, gridIsHidden: !state.gridIsHidden};
    case Actions.CHANGE_COLUMNS_AMOUNT:
      return {...state, columnsAmount: action.payload};
    case Actions.CHANGE_COLUMNS_OFFSET:
      return {...state, columnsOffset: action.payload};
    case Actions.CHANGE_LEFT_PADDING:
      return {...state, leftPadding: action.payload};
    case Actions.CHANGE_RIGHT_PADDING:
      return {...state, rightPadding: action.payload};
    case Actions.TOGGLE_SAME_PADDING:
      return {...state, samePadding: !state.samePadding};
    default:
      return state;
  }
}