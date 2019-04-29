import * as Actions from '../../constants/editor/gridSettings';


const initState = {
  gridIsHidden: false,
  columnsAmount: 6,
  columnsOffset: 15,
  leftPadding: 218,
  rightPadding: 218,
  width: 800,
  samePadding: true,
  gridGuides: [],
  gridSmartGuide: {
    shown: false,
    coords: {}
  },
  captureRadius: 5,
  smartGuides: true,
  windowWidth: 1236
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
    case Actions.CHANGE_WIDTH:
      return {...state, width: action.payload};
    case Actions.ADD_NEW_GRID_GUIDE:
      return {...state, gridGuides: [...state.gridGuides, action.payload]};
    case Actions.RESIZE:
      return {...state, windowWidth: action.payload};
    default:
      return state;
  }
}