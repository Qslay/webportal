import {
  CREATE_MENU,
  FETCH_MENU,
  CREATE_CATEGORY
} from '../actions/types'

const initialState = {
  menuItem: {},
  categoryItem: {},
  menu_collection:[]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_MENU:
      return {
        ...state,
        menuItem: action.payload.data
      }
    case CREATE_CATEGORY:
      return {
        ...state,
        categoryItem: action.payload
      }
    case FETCH_MENU:
      return{
        ...state,
        menu_collection:action.payload.data
      }
    default:
      return state;
  }

}