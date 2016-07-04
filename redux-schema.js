{
	modal: {
		post,
		isOpen
	},
	users: {
		isAuthed,
		isFetching,
		error,
		authedId,
		[uid]: {
			lastUpdated,

			info: {
				name,
				uid,
				avatar
			}
		}
	},
	posts: {
		isFetching,
		error,
		
		[postid]: {
			lastUpdated,

			info: {
				avatar,
				postid,
				name,
				text,
				timestamp,
				uid
			}
		}
	},
	usersPosts: {
		isFetching,
		error,
		[uid]: {
			lastUpdated,
			postIds: [postid, postid, postid]
		}
	},
	likeCount: {
		[postid]: 0
	},
	usersLikes: {
		[postid]: true
	},
	replies: {
		isFetching,
		error,
		[postid]: {
			lastUpdated,
			replies: {
				[replyid]: {
					name
					reply
					uid
					timestamp
					avatar,
					replyId
				}
			}
		}
	},
	listeners: {
		[listenersId]: true
	},
	feed: {
		isFetching,
		error,
		newPostsAvailable,
		newPostsToAdd: [postid, postid, postid ],
		postIds: [postId, postid, postid]
	}
}