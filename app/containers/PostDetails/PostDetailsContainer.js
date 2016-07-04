import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PostDetails } from 'components'
import * as postActionCreators from 'redux/modules/posts'
import * as likeCountActionCreators from 'redux/modules/likeCount'
import * as repliesActionCreators from 'redux/modules/replies'
const { func, object, string, bool } = PropTypes

const PostDetailsContainer = React.createClass({
  propTypes: {
    authedUser: object.isRequired,
    postId: string.isRequired,
    error: string.isRequired,
    isFetching: bool.isRequired,
    removeFetching: func.isRequired,
    fetchAndHandlePost: func.isRequired,
    postAlreadyFetched: bool.isRequired,
    initLikeFetch: func.isRequired,
    addAndHandleReply: func.isRequired
  },

  componentDidMount () {
    this.props.initLikeFetch(this.props.postId)

    if (this.props.postAlreadyFetched === false) {
      this.props.fetchAndHandlePost(this.props.postId)
    } else {
      this.props.removeFetching()
    }
  },

  render () {
    return (
      <PostDetails
        authedUser={this.props.authedUser}
        postId={this.props.postId}
        error={this.props.error}
        isFetching={this.props.isFetching}
        addAndHandleReply={this.props.addAndHandleReply} />
    )
  }
})

function mapStateToProps ({posts, likeCount, users}, props) {
  return {
    isFetching: posts.get('isFetching') || likeCount.isFetching,
    error: posts.get('error'),
    authedUser: users[users.authedId].info,
    postId: props.routeParams.postId,
    postAlreadyFetched: !!posts.get(props.routeParams.postId)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...postActionCreators,
    ...likeCountActionCreators,
    ...repliesActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailsContainer)

