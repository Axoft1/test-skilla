import React from 'react'
import styles from './Navbar.module.scss'
import Progress from './Progress'
import { iconMen, search } from '../img'
import Arrow from '../Arrow/Arrow'

export const Navbar: React.FC = () => (
  <div className={styles.navbar}>
    <div className={styles.conteiner}>
      <div className={styles.data}>Среда, 13 окт</div>
      <ul className={styles.ratingList}>
        <Progress
          status="20 из 30"
          color="green"
          value="20"
          max="30"
          children="Новые звонки "
        />
        <Progress
          status="40%"
          color="yellow"
          value="40"
          max="100"
          children="Качество разговора "
        />
        <Progress
          status="67%"
          color="red"
          value="67"
          max="100"
          children="Конверсия в заказ "
        />
      </ul>
      <div className={styles.user}>
        <div className={styles.search}>
          <img src={search} alt="" />
        </div>
        <div className={styles.person}>
          <p>ИП Сидорова Александра Михайловна</p>

          <Arrow type="down" />
        </div>
        <div className={styles.person}>
          <div>
            <img src={iconMen} alt="" />
          </div>
          <Arrow type="down" />
        </div>
      </div>
    </div>
  </div>
)
