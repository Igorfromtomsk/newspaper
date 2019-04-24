import * as Actions from '../../constants/editor/drawRect';


const initState = {
  drawingModeOn: false,
  layers: [],
  activeLayerId: null,
  drawingIsStarted: false
};


export default function DrawRectangleReducer(state = initState, action) {
  switch (action.type) {
    case Actions.RECTANGLE_DRAWING_MODE_ON:
      return {...state, drawingModeOn: true};
    case Actions.CANCEL_RECTANGLE_DRAWING:
      return {...state, drawingModeOn: false, activeLayerId: null, drawingIsStarted: false};
    case Actions.SAVE_RECTANGLE_DRAWING:
      return {
        ...state,
        layers: state.layers.filter(layer => layer !== action.payload),
        drawingModeOn: false,
        activeLayerId: null,
        drawingIsStarted: false
      };
    case Actions.START_RECTANGLE_DRAWING:
      return {
        ...state,
        layers: [...state.layers, action.payload],
        drawingIsStarted: true,
        activeLayerId: action.payload.id
      };
    default:
      return state;
  }
}