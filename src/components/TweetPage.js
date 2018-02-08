import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatReply } from '../utils/helpers'

class TweetPage extends Component {
  render() {
    console.log('hsekfjheskjfehskfj', this.props)
    return (
      <div>
        Tweet Page
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, tweets, replies, users }, props) {
  const { id } = props.match.params
  const tweet = tweets[id]

  return {
    tweet: formatTweet(tweet, users[tweet.author], authedUser),
    replies: tweet.replies.map((replyId) => {
      const reply = replies[replyId]
      return formatTweet(reply, users[reply.author], authedUser)
    })
  }
}

export default connect(mapStateToProps)(TweetPage)