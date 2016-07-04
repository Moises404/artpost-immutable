import React, { PropTypes } from 'react'
import { text } from './styles.css'

export default function Lougout (props) {
  return (
    <div>
      <div className={text}>{`You are now logged out`}</div>
    </div>
  )
}