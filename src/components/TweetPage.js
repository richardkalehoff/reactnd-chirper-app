import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatReply } from '../utils/helpers'
import Tweet from './Tweet'

class TweetPage extends Component {
  render() {
    const { tweet, replies } = this.props
    return (
      <div>
        <Tweet tweet={tweet} />
        <h3 className='center'>Replies</h3>
        <ul>
          {replies.map((reply) => (
            <li key={reply.id}>
              <Tweet tweet={reply} />
            </li>
          ))}
        </ul>
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