import {SET_AUTHED_ID} from '../actions/authedUser'

export default function authedUser(state= null, action){
    switch(action.type){
        case SET_AUTHED_ID:
            return action.id
        default:
            return state
    }
}