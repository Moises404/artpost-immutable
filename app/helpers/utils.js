import {
  usersPostsExpirationLength,
  usersExpirationLength,
  repliesExpirationLength } from 'config/constants'

export function formatUserInfo (name, avatar, uid) {
  return {
    name,
    avatar,
    uid
  }
}

export function formatPost (text, {name, avatar, uid}) {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now()
  }
}

export function formatReply ({name, uid, avatar}, reply) {
  return {
    name,
    reply,
    uid,
    timestamp: Date.now(),
    avatar
  }
}

export function formatTimestamp (timestamp) {
  const date = new Date(timestamp)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}

function getMilliseconds (timestamp) {
  return new Date().getTime() - new Date(timestamp).getTime()
}

export function stalePosts (timestamp) {
  return getMilliseconds(timestamp) > usersPostsExpirationLength
}

export function staleUser (timestamp) {
  return getMilliseconds(timestamp) > usersExpirationLength
}

export function staleReplies (timestamp) {
  return getMilliseconds(timestamp) > repliesExpirationLength
}
