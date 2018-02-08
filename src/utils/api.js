import {
  _getUsers,
  _getTweets,
  _getReplies,
  _saveLikeToggle,
} from './_DATA.js'

function formatUsers (users) {
  return users
}

function formatTweets (tweets) {
  return tweets
}

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getTweets(),
  ]).then(([users, tweets, replies]) => ({
    users: formatUsers(users),
    tweets: formatTweets(tweets),
  }))
}

export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}