import { getInitialData } from '../utils/api'
import { setAuthedUser } from '../actions/authedUser'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { receiveReplies } from '../actions/replies'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets, replies }) => {
        dispatch(hideLoading())
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(receiveReplies(replies))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}