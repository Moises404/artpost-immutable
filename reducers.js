////////////
//  USER  //
////////////

const initialUserState = {
	lastUpdated: 0,
	info: {
		name: '',
		uid: '',
		avatar: ''
	}
}

function user (state = initialUserState, action) {
	switch (action.type) {
		case FETCHING_USER_SUCCESS :
			return {
				...state,
				info: action.user,
				lastUpdated: action.timestamp
			}
		default :
			return state
	}
}

/////////////
//  USERS  //
/////////////

const initialState = {
	isFetching: false,
	error: '',
	isAuthed: false,
	authedId: ''
}

function users (state = initialState, action) {
	switch (action.type) {
		case AUTH_USER :
			return {
				...state,
				isAuthed: true,
				authedId: action.uid
			}
		case UNAUTH_USER :
			return {
				...state,
				isAuthed: false,
				authedId: ''
			}
		case FETCHING_USER :
			return {
				...state,
				isFetching: true
			}
		case FETCHING_USER_FAILURE :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case FETCHING_USER_SUCCESS :
			return action.user === null
				? {
					...state,
					error: '',
					isFetching: false
				}
				: {
					...state,
					error: '',
					isFetching: false,
					[action.uid]: user(state[action.uid], action)
				}
		default :
			return state
	}
}


////////////
//  POST  //
////////////

const getInitialPostState = {
	lastUpdated: 0,
	info: {
		avatar: '',
		postid: '',
		name: '',
		text: '',
		timestamp: 0,
		uid: ''
	}
}

function post (state = getInitialPostState, action) {
	default :
		return state
}


/////////////
//  POSTS  //
/////////////

const getInitialState = {
	isFetching: true,
	error: '',
	postId: ''
}

function posts (state = getInitialPostsState, action) {
	switch (action.type) {
		case FETCHING_POST :
			return {
				...state,
				isFetching: true
			}
		case ADD_POST :
		case FETCHING_POST_SUCCESS :
			return {
				...state,
				isFetching: false,
				error: '',
				[action.post.postId]: action.post
			}
		case FETCHING_POST_ERROR :
			return {
				...state,
				isFetching: false,
				action: action.error
			}
		case REMOVE_FETCHING :
			return {
				...state,
				isFetching: false,
				error: ''
			}
		case ADD_MULTIPLE_POSTS :
			return {
				...state,
				...action.posts
			}
		case REMOVE_POST :
			return {
				...state,
			}
		case REMOVE_MULTIPLE_POST :
			return {
				...state,
			}
		case ADD_LAYER :
			return {
				...state,
			}
		case REMOVE_LAYER :
			return {
				...state,
			}
		case ADD_TEXT_ITEM :
			return {
				...state,
			}
		case ADD_MULTIPLE_TEXT_ITEMS :
			return {
				...state,
			}
		case REMOVE_TEXT_ITEM :
			return {
				...state,
			}
		case REMOVE_MULTIPLE_TEXT_ITEMS :
			return {
				...state,
			}
		case ADD_SURFACE_ITEM :
			return {
				...state,
			}
		case ADD_MUTIPLE_SURFACE_ITEMS :
			return {
				...state,
			}
		case REMOVE_SURFACE_ITEM :
			return {
				...state,
			}
		case REMOVE_MULTIPLE_SURFACE_ITEMS :
			return {
				...state
			}
		default :
			return state
	}
}

////////////
//  FEED  //
////////////

const getInitialState = {
	isFetching: false,
	newPostsAvailable: false,
	newPostsToAdd: [],
	error: '',
	postIds: []
}

function feed (state = getInitialState, action) {
	switch (action.type) {
		case SETTING_FEED_LISTENER :
			return {
				...state,
				isFetching: true
			} 
		case SETTING_FEED_LISTENER_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case SETTING_FEED_LISTENER_SUCCESS :
			return {
				...state,
				isFetching: false,
				error: '',
				postIds: action.postIds,
				newPostsAvailable: false
			}
		case ADD_NEW_POST_ID_TO_FEED :
			return {
				...state,
				newPostsToAdd: [action.postId, ...state.newPostsToAdd]
			}
		case RESET_NEW_POSTS_AVAILABLE :
			return {
				...state,
				postIds: [...state.newPostsToAdd, ...state.postIds],
				newPostsToAdd: [],
				newPostsAvailable: false
			}
		default :
			return state
	}
}


////////////////
//  LISTENER  //
////////////////

export default function listeners (state = {}, action) {
	switch (action.type) {
		case ADD_LISTENER :
			return {
				...state,
				[action.listenerId]: true
			}
		default :
			return state
	}
}


/////////////
//  MODAL  //
/////////////

const initialState = {
	postText: '',
	isOpen: false
}

export default function modal (state = initialState, action) {
	switch (action.type) {
		case OPEN_MODAL :
			return {
				...state,
				isOpen: true
			}
		case CLOSE_MODAL :
			return {
				postText: '',
				isOpen: false
			}
		case UPDATE_POST_TEXT :
			return {
				...state,
				postText: action.newPostText
			}
		default :
			return state
	}
}


///////////////////
//  USERS LIKES  //
///////////////////

const initialState = {
	isFetching: false,
	error: ''
}

export default function usersLikes (state = initialState) {
	switch (actions.type) {
		case FETCHING_LIKES :
			return {
				...state,
				isFetching: true
			}
		case FETCHING_LIKES_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case FETCHING_LIKES_SUCCESS :
			return {
				...state,
				...action.likes,
				isFetching: false,
				error: '',
			}
		case ADD_LIKE :
			return {
				...state,
				[action.postId]: true
			}
		case REMOVE_LIKE :
			return Object.keys(state)
			.filter((postId) => action.postId !== postId)
			.reduce((prev, current) => {
				prev[current] = state[current]
				return prev
			}, {})
		default :
			return state
	}
}


////////////////////////
//  USER LIKES COUNT  //
////////////////////////

function count (state = 0, action) {
	switch (action.type) {
		case ADD_LIKE :
			return state + 1
		case REMOVE_LIKE :
			return state - 1
		default :
			return state
	}
}

const initialState = {
	isFetching: 'false',
	error: ''
}

export default function likeCount (state = initialState, action) {
	switch (action.type) {
		case FETCHING_COUNT :
			return {
				...state,
				isFetching: true
			}
		case FETCHING_COUNT_ERROR :
			return {
				isFetching: false,
				error: action.error
			}
		case FETCHING_COUNT_SUCCESS :
			return {
				...state,
				...initialState,
				[action.postId]: action.count
			}
		case ADD_LIKE :
		case REMOVE_LIKE :
			return typeof state[action.postId] === undefined
				? state
				:  {
					...state,
					[action.postId]: count(state[action.postId], action)
				}
		default :
			return state
	}
}


//////////////////
//  USERS POST  //
//////////////////

const initialUserPostState = {
	switch (action.type) {
		case ADD_SINGLE_USERS_POST :
			return {
				...state,
				postIds: state.postIds.concat([action.postId])
			}
		case REMOVE_SINGLE_USERS_POST :
			return {
				...state
			}
	}
}

const initialState = {
	isFetching: true,
	error: ''
}

export default function usersPosts (state = initialState, action) {
	switch (action.type) {
		case FETCHING_USERS_POSTS :
			return {
				...state,
				isFetching: true
			}
		case FETCHING_USERS_POSTS_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case FETCHING_USERS_POSTS_SUCCESS :
			return {
				...state,
				isFetching: false,
				error: '',
				[action.uid]: {
					lastUpdated: action.lasstUpdated,
					postIds: action.postIds
				}
			}
		case ADD_SINGLE_USERS_POST :
		case REMOVE_SINGLE_USERS_POST :
			return typeof state[action.uid] === 'undefined'
			? state
			: {
				...state,
				isFetching: false,
				error: '',
				[action.uid]: usersPost(state[action.uid], action)
			}
		default:
			return state
	}
}


///////////////
//  REPLIES  //
///////////////

const intialReply = {
	name: '',
	reply: '',
	uid: '',
	timestamp: 0,
	avatar: '',
	replyId: ''
}

function postReplies (state = initialReply, action) {
	switch (action.type) {
		case ADD_REPLY :
			return {
				...state,
				[action.reply.replyId]: action.reply
			}
		case REMOVE_REPLY :
			retunr {
				...state,
				[action.reply.replyId]: undefined
			}
		default :
			return state
	}
}

const initialPostState = {
	lastUpdated: Date.now(),
	replies: {}
}

function repliesAndLastUpdated (state = initialPostState, action) {
	switch (action.type) {
		case FETCHING_REPLIES_SUCCESS :
			return {
				...state,
				lastUpdated: action.lastUpdated,
				replies: action.replies
			}
		case ADD_REPLY :
		case REMOVE_REPLY :
			return {
				...state,
				replies: postReplies(state.replies, action)
			}
		default :
			return state
	}
}

const initialState = {
	isFetching: false,
	error: ''
}

export default function replies (state = initialState, action) {
	switch (action.type) {
		case FETCHING_REPLIES :
			return {
				...state,
				isFetching: true,
			}
		case FETCHING_REPLIES_ERROR :
		case ADD_REPLY_ERROR :
			return {
				...state,
				isFetching: false,
				error: action.error
			}
		case ADD_REPLY :
		case FETCHING_REPLIES_SUCCESS :
		case REMOVE_REPLY :
			return {
				isFetching: false,
				error: '',
				[action.postId] repliesAndLastUpdated(state[action.postId], action)
			}
		default :
			return state
	}
}
