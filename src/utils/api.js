import {
  _getUsers,
  _getTweets,
  _getReplies,
} from './_DATA.js'

function formatUsers (users) {
  return users
}

function formatTweets (tweets) {
  return tweets
}

function formatReplies (replies) {
  return replies
}

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getTweets(),
    _getReplies()
  ]).then(([users, tweets, replies]) => ({
    users: formatUsers(users),
    tweets: formatTweets(tweets),
    replies: formatReplies(replies)
  }))
}