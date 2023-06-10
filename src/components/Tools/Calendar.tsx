import React from 'react'
import Arrow from '../Arrow/Arrow'
import styles from './Tools.module.scss'
import { iconCalendar } from '../img'

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <Arrow type="left" />
      <div className={styles.day}>
        <img src={iconCalendar} alt="" />
        <div>3 дня</div>
      </div>
      <Arrow type="right" />
    </div>
  )
}

export default Calendar
