import * as Actions from '../../constants/editor/drawRect';

export function rectangleDrawingModeOn() {
  return {type: Actions.RECTANGLE_DRAWING_MODE_ON}
}

export function startRectangleDrawing(layer) {
  return {type: Actions.START_RECTANGLE_DRAWING, payload: layer}
}

export function saveRectangleDrawing() {
  return {type: Actions.SAVE_RECTANGLE_DRAWING}
}

export function cancelRectangleDrawing(id) {
  return {type: Actions.CANCEL_RECTANGLE_DRAWING, payload: id}
}