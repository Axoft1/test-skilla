import React from 'react'
import styles from './ButtonMenu.module.scss'
interface ButtonMenuProps {
  children: string
  img: string
  active?: boolean
}

const ButtonMenu = ({
  children,
  img,
  active,
}: ButtonMenuProps): JSX.Element => {
  return (
    <div className={active ? `${styles.button} ${styles.active}` : `${styles.button}`}>
      <div className={styles.img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.name}>{children}</div>
    </div>
  )
}

export default ButtonMenu
