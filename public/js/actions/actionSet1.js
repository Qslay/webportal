
import { FETCHALL, SIGNUP, SIGNIN } from './types.js';

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
  fetch('/api/auth/signup', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(
      (result) => {
        dispatch({
          type: SIGNUP,
          payload: result
        })
      }
    )
}
