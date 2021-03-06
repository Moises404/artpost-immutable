import { bindActionCreators } from 'redux'
import { Modal } from 'components'
import { connect } from 'react-redux'
import * as modalActionCreators from 'redux/modules/modal'
import * as postsActionCreators from 'redux/modules/posts'

function mapStateToProps ({modal, users}, props) {
  const postTextLength = modal.postText.length
  return {
    user: users[users.authedId] ? users[users.authedId].info : {},
    postText: modal.postText,
    isOpen: modal.isOpen,
    isSubmitDisabled: postTextLength <= 0 || postTextLength > 140
  }
}

function mapDispatchToProps (dispatch, props) {
  return bindActionCreators({
    ...modalActionCreators,
    ...postsActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
