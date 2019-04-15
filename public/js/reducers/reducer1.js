import {
  FETCHALL,
  SIGNUP,
  SIGNIN
} from '../actions/types'

const initialState = {
  item: {},
  signupFeedback: {}
}

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCHALL:
      return {
        ...state,
        item: action.payload
      }
    case SIGNUP:
      return {
        ...state,
        signupFeedback: action.payload
      }

    default:
      return state;
  }
}