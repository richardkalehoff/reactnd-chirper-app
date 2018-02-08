import { combineReducers } from 'redux'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer
})