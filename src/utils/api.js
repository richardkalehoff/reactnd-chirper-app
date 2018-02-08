import {
  _getUsers,
  _getTweets,
  _saveLikeToggle,
  _saveTweet,
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

export function saveTweet (info) {
  return _saveTweet(info)
}