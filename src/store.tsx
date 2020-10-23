import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import './constants/Interfaces';

const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f: any) => f))
export default store