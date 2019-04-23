import * as Actions from '../constants/general';


const initState = {
  title: 'Newspaper Project',
  version: process.env.REACT_APP_VERSION,
  footerIsHidden: false
};


export default function GeneralReducer(state = initState, action) {
  switch (action.type) {
    case Actions.FOOTER_HIDE:
      return {...state, footerIsHidden: true};
    case Actions.FOOTER_SHOW:
      return {...state, footerIsHidden: false};
    default:
      return state;
  }
}