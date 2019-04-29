import * as Actions from '../../constants/editor/drawRect';


export function saveRectangleDrawing(layer) {
  return {type: Actions.SAVE_RECTANGLE_DRAWING, payload: layer}
}