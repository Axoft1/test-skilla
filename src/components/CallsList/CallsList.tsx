import React from 'react'
import styles from './CallsList.module.scss'
import Call from './Call'

const CallsList = () => {
  return (
    <table className={styles.callsList}>
      <tr className={styles.categories}>
        <th>Тип</th>
        <th>Время</th>
        <th>Сотрудник</th>
        <th>Звонок</th>
        <th>Источник</th>
        <th>Оценка</th>
        <th>Длительность</th>
      </tr>
      <Call />
    </table>
  )
}

export default CallsList
