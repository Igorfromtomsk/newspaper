import * as Actions from '../../constants/editor/layers';


const initState = {
  layers: [],
};


function LayersReducer(state = initState, action) {
  switch (action.type) {
    case Actions.SAVE_RECTANGLE_DRAWING:
      return {
        ...state,
        layers: [...state.layers, action.payload]
      };
    default:
      return state;
  }
}

export default LayersReducer