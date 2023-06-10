import React from 'react'
import styles from './CallsList.module.scss'
import { iconMen } from '../img'

const Call = () => {
  return (
    <tr className={styles.categories}>
      <td>Тип</td>
      <td>19:00</td>
      <td>
        <img src={iconMen} alt="" />
      </td>
      <td>+7 (987) 567-17-12</td>
      <td>Rabota.ru</td>
      <td>Оценка</td>
      <td>12:06</td>
    </tr>
  )
}

export default Call
