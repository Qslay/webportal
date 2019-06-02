import {
  CREATE_MENU
} from '../actions/types'

const initialState = {
  menuItem: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MENU:
      return {
        ...state,
        menuItem: action.payload
      }
    default:
      return state;
  }

}