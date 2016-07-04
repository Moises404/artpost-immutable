import React, { PropTypes } from 'react'
import { newPostContainer, header } from './styles.css'
import { PostContainer } from 'containers'
import { errorMsg } from 'sharedStyles/styles.css'
import { List } from 'immutable'

NewPostsAvailable.propTypes = {
  handleClick: PropTypes.func.isRequired
}

function NewPostsAvailable ({handleClick}) {
  return (
    <div className={newPostContainer} onClick={handleClick}>
      {`New Posts Available`}
    </div>
  )
}

Feed.propTypes = {
  postIds: PropTypes.instanceOf(List),
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newPostsAvailable: PropTypes.bool.isRequired,
  resetNewPostsAvailable: PropTypes.func.isRequired
}

export default function Feed (props) {
  return props.isFetching === true
    ? <h1 className={header}>{`Fetching`}</h1>
    : <div>
        {props.newPostsAvailable ? <NewPostsAvailable handleClick={props.resetNewPostsAvailable} /> : null}
        {props.postIds.size === 0
          ? <p className={header}>{`This is unfortunate.`} <br/> {`It appears there are no posts yet :(`}</p>
          : null}
        {props.postIds.map((id) => (
          <PostContainer
            postId={id}
            key={id} />
        ))}
        {props.error ? <p className={errorMsg}>{props.error}</p> : null}
      </div>
}