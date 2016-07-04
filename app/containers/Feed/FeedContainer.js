import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Feed } from 'components'
import { bindActionCreators } from 'redux'
import * as feedActionCreators from 'redux/modules/feed'
import { List } from 'immutable'

const FeedContainer = React.createClass({
  propTypes: {
    postIds: PropTypes.instanceOf(List),
    newPostsAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setAndHandleFeedListener: PropTypes.func.isRequired,
    resetNewPostsAvailable: PropTypes.func.isRequired
  },

  componentDidMount() {
    this.props.setAndHandleFeedListener()
  },

  render () {
    return (
      <Feed
        postIds={this.props.postIds}
        newPostsAvailable={this.props.newPostsAvailable}
        error={this.props.error}
        isFetching={this.props.isFetching}
        resetNewPostsAvailable={this.props.resetNewPostsAvailable} />
    )
  }
})

function mapStateToProps ({feed}) {
  return {
    newPostsAvailable: feed.get('newPostsAvailable'),
    error: feed.get('error'),
    isFetching: feed.get('isFetching'),
    postIds: feed.get('postIds')
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(feedActionCreators, dispatch)
)(FeedContainer)
