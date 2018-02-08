import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toArray, formatTweet } from '../utils/helpers'
import Tweet from './Tweet'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweets.map((tweet) => (
            <li key={tweet.id}>
              <Tweet tweet={tweet} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, tweets, users }) {
  return {
    tweets: toArray(tweets)
      .map((tweet) => formatTweet(
        tweet,
        users[tweet.author],
        authedUser
      ))
  }
}

export default connect(mapStateToProps)(Dashboard)