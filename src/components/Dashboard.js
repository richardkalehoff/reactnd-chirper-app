import React, { Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component {
    render() {
        return(
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {this.props.tweetsIds.map((id) => (
                        <li key={id}>
                            <div>TWEET ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({tweets}){
    return{
        tweetsIds: Object.keys(tweets)
            .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)