import React, { PropTypes } from 'react'
import { default as ReactModal } from 'react-modal'
import {
  newPostTop, pointer, newPostInputContainer,
  newPostInput, submitPostBtn, darkBtn } from './styles.css'
import { formatPost } from 'helpers/utils'

const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0
  }
}

const { object, string, func, bool } = PropTypes

Modal.PropTypes = {
  postText: string.isRequired,
  closeModal: func.isRequired,
  isOpen: bool.isRequired,
  isSumitDisabled: bool.isRequired,
  openModal: func.isRequired,
  postFanout: func.isRequired,
  updatePostText: func.isRequired,
  user: object.isRequired
}

export default function Modal (props) {
  function submitPost () {
    return props.postFanout(formatPost(props.postText, props.user))
  }

  return (
    <span className={darkBtn} onClick={props.openModal}>
      {`Post`}
      <ReactModal style={modalStyles} isOpen={props.isOpen} onRequestClose={props.closeModal}>
        <div className={newPostTop}>
          <span>{`Compose new Post`}</span>
          <span onClick={props.closeModal} className={pointer}>{`X`}</span>
        </div>
        <div className={newPostInputContainer}>
          <textarea
            onChange={(e) => props.updatePostText(e.target.value)}
            value={props.postText}
            maxLength={140}
            type='text'
            className={newPostInput}
            placeholder="Type something amazing" />
        </div>
        <button
          className={submitPostBtn}
          disabled={props.isSubmitDisabled}
          onClick={submitPost}>
            {`Post`}
        </button>
      </ReactModal>
    </span>
  )
}