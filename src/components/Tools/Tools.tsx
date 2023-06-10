import React from 'react'
import Calendar from './Calendar'
import Balance from './Balance'
import styles from './Tools.module.scss'

const Tools = () => {
  return (
    <div className={styles.tools}>
      <Balance />
      <Calendar />
    </div>
  )
}

export default Tools
