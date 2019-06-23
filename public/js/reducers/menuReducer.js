import {
  CREATE_MENU,
  CREATE_CATEGORY
} from '../actions/types'

const initialState = {
  menuItem: {},
  categoryItem: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MENU:
      return {
        ...state,
        menuItem: action.payload
      }
    case CREATE_CATEGORY:
      return {
        ...state,
        categoryItem: action.payload
      }
    default:
      return state;
  }

}