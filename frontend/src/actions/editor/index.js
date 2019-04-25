import * as Actions from '../../constants/editor';

export function toggleUiVisibility() {
  return { type: Actions.TOGGLE_UI_VISIBILITY }
}

export function undo() {
  return { type: Actions.UNDO }
}

export function redo() {
  return { type: Actions.REDO }
}
