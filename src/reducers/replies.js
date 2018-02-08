import { RECEIVE_REPLIES } from '../actions/replies'

export default function replies (state = {}, action) {
  switch (action.type) {
    case RECEIVE_REPLIES :
      return {
        ...state,
        ...action.replies,
      }
    default :
      return state
  }
}