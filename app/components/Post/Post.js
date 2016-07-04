import React, { PropTypes } from 'react'
import { formatTimestamp } from 'helpers/utils'
import Reply from 'react-icons/lib/fa/mail-reply'
import Star from 'react-icons/lib/fa/star'

import {
  postContainer, contentContainer, avatar,
  actionContainer, header, text, likeReplyContainer,
  icon, likedIcon, author
} from './styles.css'

import { Map } from 'immutable'
// Immutable PropTypes

Post.propTypes = {
  post: PropTypes.instanceOf(Map),
  onClick: PropTypes.func,
  isLiked: PropTypes.bool.isRequired,
  addAndHandleLike: PropTypes.func.isRequired,
  handleDeleteLike: PropTypes.func.isRequired,
  numberOfLikes: PropTypes.number,
  hideReplyBtn: PropTypes.bool.isRequired,
  hideLikeCount: PropTypes.bool.isRequired,
  goToProfile: PropTypes.func.isRequired
}

export default function Post (props) {
  const starIcon = props.isLiked === true
    ? likedIcon
    : icon

  const starFn = props.isLiked === true
    ? props.handleDeleteLike
    : props.addAndHandleLike

  return (
    <div className={postContainer}
      style={{cursor: props.hideReplyBtn === true ? 'default' : 'pointer'}}
      onClick={props.onClick}>

      <img src={props.post.get('avatar')} className={avatar}/>
      <div className={contentContainer}>
        <div className={header}>
          <div onClick={props.goToProfile} className={author}>
            {props.post.get('name')}
          </div>
          <div>{formatTimestamp(props.post.get('timestamp'))}</div>
        </div>
        <div className={text}>{props.post.get('text')}</div>
        <div className={likeReplyContainer}>
          {props.hideReplyBtn === true
            ? null
            : <Reply className={icon}/>}
          <div className={actionContainer}>
            <Star className={starIcon}
                  onClick={(e) => starFn(props.post.get('postId'), e)} />
            {props.hideLikeCount === true
              ? null
              : <div>{props.numberOfLikes}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}