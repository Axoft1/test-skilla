import React from 'react'
import { search } from '../img'
import BtnFilter from './BtnFilter'

import styles from './Filter.module.scss'
const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <div>
          <img src={search} alt="" />
        </div>
        <p>Поиск по звонкам</p>
      </div>
      <div className={styles.filterList}>
        <BtnFilter children="Все типы" />
        <BtnFilter children="Все сотрудники" />
        <BtnFilter children="Все звонки" />
        <BtnFilter children="Все источники" />
        <BtnFilter children="Все оценки" />
        <BtnFilter children="Все ошибки" />
      </div>
    </div>
  )
}

export default Filter
