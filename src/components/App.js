import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Dashboard from './Dashboard'
import TweetPage from './TweetPage'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount () {
    const { dispatch, loading } = this.props
    if (loading === true) {
      dispatch(handleInitialData())
    }
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)