export const RECEIVE_REPLIES = 'RECEIVE_REPLIES'

export function receiveReplies (replies) {
  return {
    type: RECEIVE_REPLIES,
    replies,
  }
}