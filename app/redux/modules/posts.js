import { savePost, fetchPost } from 'helpers/api'
import { closeModal } from './modal'
import { addSingleUsersPost } from './usersPosts'
import { Map, fromJS } from 'immutable'

const FETCHING_POST = 'FETCHING_POST'
const FETCHING_POST_ERROR = 'FETCHING_POST_ERROR'
const FETCHING_POST_SUCCESS = 'FETCHING_POST_SUCCESS'
const ADD_POST = 'ADD_POST'
const ADD_MULTIPLE_POSTS = 'ADD_MULTIPLE_POSTS'
const REMOVE_FETCHING = 'REMOVE_FETCHING'

function fetchingPost() {
  return {
    type: FETCHING_POST
  }
}

function fetchingPostError(error) {
  console.warn(error)
  return {
    type: FETCHING_POST_ERROR,
    error: 'Error fetching Post'
  }
}

function fetchingPostSuccess(post) {
  return {
    type: FETCHING_POST_SUCCESS,
    post
  }
}

export function removeFetching() {
  return {
    type: REMOVE_FETCHING
  }
}

function addPost(post) {
  return {
    type: ADD_POST,
    post
  }
}

export function addMultiplePosts(posts) {
  return {
    type: ADD_MULTIPLE_POSTS,
    posts
  }
}

export function postFanout(post) {
  return function (dispatch, getState) {
    const uid = getState().users.authedId
    savePost(post)
      .then((postWithID) => {
        dispatch(addPost(postWithID))
        dispatch(closeModal())
        dispatch(addSingleUsersPost(uid, postWithID.postId))
      })
      .catch((err) => {
        console.warn('Error in postFanout', err)
      })
  }
}

export function fetchAndHandlePost (postId) {
  return function (dispatch, getState) {
    dispatch(fetchingPost())
    fetchPost(postId)
      .then((post) => dispatch(fetchingPostSuccess(post)))
      .catch((error) => dispatch(fetchingPostError(error)))
  }
}

const initialState = Map({
  isFetching: true,
  error: ''
})

export default function posts(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POST :
      return state.merge({
        isFetching: true
      })
    case ADD_POST :
    case FETCHING_POST_SUCCESS :
      return state.merge({
        error: '',
        isFetching: false,
        [action.post.postId]: action.post
      })
    case FETCHING_POST_ERROR :
      return state.merge({
        isFetching: false,
        error: action.error
      })
    case REMOVE_FETCHING :
      return state.merge({
        error: '',
        isFetching: false
      })
    case ADD_MULTIPLE_POSTS :
      return state.merge(action.posts)
    default:
      return state
  }
}
