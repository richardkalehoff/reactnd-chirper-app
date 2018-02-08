import React from 'react'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom'

export default function Tweet ({ tweet }) {
  const {
    name, avatar, timestamp, author, text, hasLiked, likes, replies, id
  } = tweet

  return (
    <div className='tweet'>
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className='avatar'
      />
      <div className='tweet-info'>
        <div>
          <span>{name}</span>
          <span>{author}</span>
          <div>{formatDate(timestamp)}</div>
          <p>{text}</p>
        </div>
        <div className='tweet-icons'>
          <Link to={`/tweet/${id}`}>
            <TiArrowBackOutline className='tweet-icon' />
          </Link>
          <span>{replies !== 0 && replies}</span>
          {hasLiked === true
            ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
            : <TiHeartOutline className='tweet-icon' />}
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </div>
  )
}