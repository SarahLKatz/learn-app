import {createStore} from 'redux';

/* ACTIONS  */
const SAVE_NAME = 'SAVE_NAME';
const RESET_NAME = 'RESET_NAME';

/* ACTION CREATORS */
export const saveName = (name) => {
  return {type: SAVE_NAME, name}
}

export const resetName = () => {
  return {type: RESET_NAME}
}

/* INITIAL STATE */
const initialState = {
  name: 'Anonymous User'
}

/* REDUCER */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NAME:
      return {name: action.name}
    case RESET_NAME:
      return initialState
    default:
      return state
  }
}

const store = createStore(reducer)

export default store;