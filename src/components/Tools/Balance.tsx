import React from 'react'
import styles from './Tools.module.scss'
import { btnBalans } from '../img'

const Balance = () => {
  return (
    <div className={styles.balance}>
      <div className={styles.balanceItem}>
        <p>Баланс:</p>
        <div>272 p</div>
      </div>
      <div>
        <img src={btnBalans} alt="" />
      </div>
    </div>
  )
}

export default Balance
