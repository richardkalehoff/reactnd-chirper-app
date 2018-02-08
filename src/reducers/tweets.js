import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets'

export default function tweets (state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets,
      }
    case TOGGLE_TWEET :
      const tweet = state[action.id]

      return {
        ...state,
        [action.id]: {
          ...tweet,
          likes: action.hasLiked === true
            ? tweet.likes.filter((uid) => uid !== action.authedUser)
            : tweet.likes.concat([action.authedUser])
        }
      }
    case ADD_TWEET :
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    default :
      return state
  }
}