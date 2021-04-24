import {combinedReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'

export default combinedReducers({
    authedUser,
    users,
    tweets
})