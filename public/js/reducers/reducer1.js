import {
  FETCHALL,
  SIGNUP,
  SIGNIN, 
  PROFILE_FETCH
} from '../actions/types'

const initialState = {
  item: {},
  signupFeedback: {},
  profile : {}
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
    case PROFILE_FETCH:
      return{
        ...state,
        profile: action.payload.data
      }

    default:
      return state;
  }
}