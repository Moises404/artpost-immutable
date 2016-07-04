import React, { PropTypes } from 'react'
import { container, title, slogan } from './styles.css'

export default function Home (props) {
  return (
    <div className={container}>
      <p className={title}>{`Artpost`}</p>
      <p className={slogan}>{`The abandoned lovechild of Twitter and Instagram`}</p>
    </div>
  )
}