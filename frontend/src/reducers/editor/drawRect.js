import * as Actions from '../../constants/editor/drawRect';
import * as EditorActions from '../../constants/editor';


const initState = {
  drawingModeOn: false,
  layers: [],
  activeLayerId: null,
  drawingIsStarted: false
};


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
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);

        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        };
      case EditorActions.REDO:
        const next = future[0];
        const newFuture = future.slice(1);

        return {
          past: [...past, present],
          present: next,
          future: newFuture
        };
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


function DrawRectangleReducer(state = initState, action) {
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

export default undoable(DrawRectangleReducer)