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
    case Actions.UPDATE_LAYER:
      let layers = state.layers;

      state.layers.filter(layer => layer.id === action.payload.id)[0].data = action.payload.data;

      return { ...state, layers};
    default:
      return state;
  }
}

export default LayersReducer