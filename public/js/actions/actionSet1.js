
import { FETCHALL, SIGNUP, SIGNIN } from './types.js';

import axios from 'axios';
import { header } from 'express-validator/check';

export const AllFetch = () => dispatch => {
  console.log(FETCHALL)
  fetch('/api/test')
    .then(res => res.json())
    .then(
      (result) => {
        dispatch({
          type: FETCHALL,
          payload: result
        })
      }
    )
}

export const signup = (data) => dispatch => {
  console.log(data);

  axios.post('/api/auth/signup',
  {
    username: data.username,
    password: data.password,
    name: data.name,
    email: data.email,
    _csrf: data._csrf
  },
  {
    headers: {
      'CSRF-Token': data._csrf
    }
  }
  ).then(Response => {
    console.log(Response);
  }).catch(err => {
    console.log(err);
  })



  // fetch('/api/auth/signup', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     Name: data.name,
  //     Username: data.username,
  //     Password: data.password,
  //     Email: data.email
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       dispatch({
  //         type: SIGNUP,
  //         payload: result
  //       })
  //     }
  //   )
}
