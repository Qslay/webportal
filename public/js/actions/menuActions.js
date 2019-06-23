import { CREATE_MENU, CREATE_CATEGORY } from './types.js';
import axios from 'axios';

export const create_menu = (menuData) => dispatch => {
  console.log("Menu", menuData);
  axios.post('/api/menu', {
    menu: menuData
  }, {
      headers: {
        'CSRF-Token': menuData._csrf
      }
    }
  ).then(Response => dispatch({
    type: CREATE_MENU,
    payload: Response
  })).catch(err => {
    console.error(err)
  })
}

export const create_category = (categoryData) => dispatch => {
  axios.post('/api/menu/category', {
    category: categoryData
  }
  ).then(Response => dispatch({
    type: CREATE_CATEGORY,
    payload: Response
  })).catch(err => {
    console.error(err)
  })
}


