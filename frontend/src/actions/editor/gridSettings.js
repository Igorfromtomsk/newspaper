import * as Actions from '../../constants/editor/gridSettings';

export function toggleGridVisibility() {
  return { type: Actions.TOGGLE_GRID_VISIBILITY }
}

export function changeColumnsAmount(amount) {
  return { type: Actions.CHANGE_COLUMNS_AMOUNT, payload: amount }
}

export function changeColumnsOffset(offset) {
  return { type: Actions.CHANGE_COLUMNS_OFFSET, payload: offset }
}