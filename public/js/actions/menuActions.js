import { CREATE_MENU } from './types.js';
import axios from 'axios';

export const create_menu = (menuData) => dispatch => {
  axios.post('/api/menu/', {
    menu: menuData._data
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

