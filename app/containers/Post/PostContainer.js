import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Post } from 'components'
import * as usersLikesAction from 'redux/modules/usersLikes'
const { func, object, bool, number } = PropTypes

const PostContainer = React.createClass({
  propTypes: {
    post: object.isRequired,
    handleClick: func,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    isLiked: bool.isRequired,
    numberOfLikes: number,
    addAndHandleLike: func.isRequired,
    handleDeleteLike: func.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true,
    }
  },
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.post.get('uid'))
  },
  handleClick (e) {
    e.preventDefault()
    this.context.router.push('/postDetail/' + this.props.post.get('postId'))
  },
  render () {
    return (
      <Post
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  },
})

function mapStateToProps ({posts, likeCount, usersLikes}, props) {
  return {
    post: posts.get(props.postId),
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.postId] === true,
    numberOfLikes: likeCount[props.postId],
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(usersLikesAction, dispatch)
)(PostContainer)
