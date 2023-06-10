import React from 'react'
import Arrow from '../Arrow/Arrow'
import styles from './Filter.module.scss'

interface BtnFilterProps {
  children: string
}

const BtnFilter = ({ children }: BtnFilterProps): JSX.Element => {
  return (
    <div className={styles.btnFilter}>
      <p>{children}</p>
      <Arrow type={'down'} />
    </div>
  )
}

export default BtnFilter
