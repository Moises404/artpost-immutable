import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Replies } from 'components'
import { staleReplies } from 'helpers/utils'
import * as repliesActionCreators from 'redux/modules/replies'

const RepliesContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    replies: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    fetchAndHandleReplies: PropTypes.func.isRequired
  },

  getDefaultProps () {
    return {
      lastUpdated: 0,
      replies: {}
    }
  },

  componentDidMount () {
    if (staleReplies(this.props.lastUpdated)) {
      this.props.fetchAndHandleReplies(this.props.postId)
    }
  },

  render() {
    return (
      <Replies
        isFetching={this.props.isFetching}
        error={this.props.error}
        lastUpdated={this.props.lastUpdated}
        replies={this.props.replies} />
    )
  }
})

function mapStateToProps (state, props) {
  const postRepliesInfo = state.replies[props.postId] || {}
  const { lastUpdated, replies } = postRepliesInfo
  return {
    isFetching: state.replies.isFetching,
    error: state.replies.error,
    lastUpdated,
    replies
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(repliesActionCreators, dispatch)
)(RepliesContainer)
