import * as Actions from '../../constants/editor/gridSettings';

export function toggleGridVisibility() {
  return {type: Actions.TOGGLE_GRID_VISIBILITY}
}

export function changeColumnsAmount(amount) {
  return {type: Actions.CHANGE_COLUMNS_AMOUNT, payload: amount}
}

export function changeColumnsOffset(offset) {
  return {type: Actions.CHANGE_COLUMNS_OFFSET, payload: offset}
}

export function changeLeftPadding(offset) {
  return {type: Actions.CHANGE_LEFT_PADDING, payload: offset}
}

export function changeRightPadding(offset) {
  return {type: Actions.CHANGE_RIGHT_PADDING, payload: offset}
}

export function changeWidth(width) {
  return {type: Actions.CHANGE_WIDTH, payload: width}
}

export function toggleSamePadding() {
  return {type: Actions.TOGGLE_SAME_PADDING}
}

export function addNewGuide(guide) {
  return {type: Actions.ADD_NEW_GRID_GUIDE, payload: guide}
}

export function resize(width) {
  return {type: Actions.RESIZE, payload: width}
}

export function showSmartGuide(coords) {
  return {type: Actions.SHOW_SMART_GUIDE, payload: coords}
}

export function hideSmartGuide() {
  return {type: Actions.HIDE_SMART_GUIDE}
}