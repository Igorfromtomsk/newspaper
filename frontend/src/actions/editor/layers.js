import * as Actions from '../../constants/editor/layers';


export function saveRectangleDrawing(layer) {
  return {type: Actions.SAVE_RECTANGLE_DRAWING, payload: layer}
}

export function updateLayer(layer) {
  return {type: Actions.UPDATE_LAYER, payload: layer}
}