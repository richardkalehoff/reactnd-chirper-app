export function toArray (obj) {
  return Object.keys(obj)
    .map((key) => obj[key])
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatTweet (tweet, author, authedUser) {
  const { id, likes, replies = null, text, timestamp } = tweet
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies === null ? null : replies.length,
    hasLiked: likes.includes(authedUser)
  }
}