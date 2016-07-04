////////////////////
//  USER ACTIONS  //
////////////////////

{
	type: AUTH_USER,
	uid,
}

{
	type: UNAUTH_USER,
}

{
	type: FETCHING_USER
}

{
	type: FETCHING_USER_FAILURE,
	error: 'Error fetching user'
}

{
	type: FETCHING_USER_SUCCESS,
	uid,
	user,
	timestamp
}


////////////////////
//  POST ACTIONS  //
////////////////////

{
	type: FETCHING_POST
}

{
	type: FETCHING_POST_ERROR,
	error: 'Error fetching post'
}

{
	type: FETCHING_POST_SUCCESS,
	post
}

{
	type: REMOVE_FETCHING
}

{
	type: ADD_POST,
	post
}

{
	type: ADD_MULTIPLE_POSTS,
	posts
}

{
	type: REMOVE_POST
	post
}

{
	type: REMOVE_MULTIPLE_POSTS,
	posts
}

{
	type: ADD_LAYER
	layer
}

{
	type: REMOVE_LAYER
	layer
}

{
	type: ADD_TEXT_ITEM
	text
}

{
	type: ADD_MULTIPLE_TEXT_ITEMS
	texts
}

{
	type: REMOVE_TEXT_ITEM
	text
}

{
	type: REMOVE_MULTIPLE_TEXT_ITEMS
	texts
}

{
	type: ADD_SURFACE_ITEM
	surface
}

{
	type: ADD_MULTIPLE_SURFACE_ITEMS
	surfaces
}

{
	type: REMOVE_SURFACE_ITEM
	surface
}

{
	type: REMOVE_MULTIPLE_SURFACE_ITEMS
	surfaces
}



////////////////////
//  FEED ACTIONS  //
////////////////////

{
	type: SETTING_FEED_LISTENER
}

{
	type: SETTING_FEED_LISTENER_ERROR,
	error: 'Error fetching feeds'
}

{
	type: SETTING_FEED_LISTENER_SUCCESS,
	postIds
}

{
	type: ADD_NEW_POST_ID_TO_FEED,
	postId
}

{
	type: RESET_NEW_POSTS_AVAILABLE
}



/////////////////
//  LISTENERS  //
/////////////////

{
	type: ADD_LISTENER,
	listenerId
}


/////////////
//  MODAL  //
/////////////

{
	type: OPEN_MODAL
}


{
	type: CLOSE_MODAL
}

{
	type: UPDATE_POST_TEXT,
	newPostText
}


///////////////
//  REPLIES  //
///////////////

{
	type: FETCHING_REPLIES
}

{
	type: FETCHING_REPLIES_ERROR,
	error: 'Error fetching replies'
}

{
	type: FETCHING_REPLIES_SUCCESS,
	replies,
	postId,
	lastUpdated: Date.now()
}

{
	type: ADD_REPLY,
	postId,
	reply
}

{
	type: ADD_REPLY_ERROR,
	error: 'Error adding reply'
}

{
	type: REMOVE_REPLY,
	replyId
}


//////////////////
//  LIKE COUNT  //
//////////////////

{
	type: FETCHING_COUNT
}

{
	type: FETCHING_COUNT_ERROR,
	error: 'Error fetching post\'s like count'
}

{
	type: FETCHING_COUNT_SUCCESS,
	postId,
	count
}


///////////////////////////
//  FETCHING USERS POST  //
///////////////////////////

{
	type: FETCHING_USERS_POSTS,
	uid
}

{
	type: FETCHING_USERS_POSTS_ERROR,
	error: 'Error fetching Users Post Ids'
}

{
	type: FETCHING_USERS_POSTS_SUCCESS,
	uid,
	postIds,
	lastUpdated
}

{
	type: ADD_SINGLE_USERS_POST,
	uid,
	postIds,
	lastUpdated
}

//////////////////
//  POST LIKES  //
//////////////////


{
	type: FETCHING_LIKES
}

{
	type: FETCHING_LIKES_ERROR,
	error: 'Error fetching likes'
}

{
	type: FETCHING_LIKES_SUCCESS,
	likes
}

{
	type: ADD_LIKE,
	postId
}

{
	type: REMOVE_LIKE,
	postId
}
