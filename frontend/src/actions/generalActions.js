import * as Actions from '../constants/general';


export function hideFooter() {
  return { type: Actions.FOOTER_HIDE }
}

export function showFooter() {
  return { type: Actions.FOOTER_SHOW }
}