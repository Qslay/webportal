
import { FETCHALL, SIGNUP, SIGNIN, PROFILE_FETCH } from './types.js';

import axios from 'axios';

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
  ).then(Response => dispatch({
    type: SIGNUP,
    payload: Response
  })).catch(err => {
    console.log(err);
  })
}

export const fetchProfile = (csrf) => dispatch => {
  axios.get('/api/profile', {
    _csrf: csrf
  })
    .then(Response => dispatch({
      type: PROFILE_FETCH,
      payload: Response
    })).catch(err => {
      console.log(err);
    })
}