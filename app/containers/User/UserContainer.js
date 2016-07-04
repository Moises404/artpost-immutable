import React, { PropTypes } from 'react'
import { User } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { stalePosts, staleUser } from 'helpers/utils'
import * as usersActionCreators from 'redux/modules/users'
import * as usersPostsActionCreators from 'redux/modules/usersPosts'

const UserContainer = React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    noUser: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    postIds: PropTypes.array.isRequired,
    routeParams: PropTypes.shape({uid: PropTypes.string.isRequired}),
    fetchAndHandleUsersPosts: PropTypes.func.isRequired,
    fetchAndHandleUser: PropTypes.func.isRequired,
  },
  componentDidMount () {
    const uid = this.props.routeParams.uid

    if (this.props.noUser === true || staleUser(this.props.lastUpdated)) {
      this.props.fetchAndHandleUser(uid)
    }

    // console.log('NO-USER: ', this.props.noUser)
    // console.log('stalePosts: ', this.props.lastUpdated)
    // if (this.props.noUser === true || stalePosts(this.props.lastUpdated)) {
      this.props.fetchAndHandleUsersPosts(uid)
    // }
  },
  render () {
    return (
      <User
        noUser={this.props.noUser}
        isFetching={this.props.isFetching}
        name={this.props.name}
        error={this.props.error}
        postIds={this.props.postIds} />
    )
  },
})

function mapStateToProps ({users, usersPosts}, props) {

  const specificUsersPosts = usersPosts[props.routeParams.uid]
  const user = users[props.routeParams.uid]
  const noUser = typeof user === 'undefined'
  const name = noUser ? '' : user.info.name

  // console.log('ROUTE-UID: ', props.routeParams.uid)
  // console.log('USERS-POST: ', usersPosts)
  // console.log('USER: ', user)

  return {
    noUser,
    name,
    isFetching: users.isFetching || usersPosts.isFetching,
    error: users.error || usersPosts.error,
    lastUpdated: specificUsersPosts ? specificUsersPosts.lastUpdated : 0,
    postIds: specificUsersPosts ? specificUsersPosts.postIds : []
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...usersActionCreators,
    ...usersPostsActionCreators
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
