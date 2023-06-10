import React from 'react'
import styles from './Navbar.module.scss'

interface ProgressProps {
  color: 'red' | 'yellow' | 'green'
  value: string
  max: string
  children: string
  status: string
}
const Progress = ({
  color,
  value,
  max,
  children,
  status,
}: ProgressProps): JSX.Element => {
  let col: string = ''
  switch (color) {
    case 'green':
      col = '#28A879'
      break
    case 'red':
      col = '#EA1A4F'
      break
    case 'yellow':
      col = '#FFD500'
      break
    default:
      col = '#FFD500'
  }

  return (
    <li>
      <div>
        <div className={styles.text}>
          <p>{children}</p>
          <p style={{ color: `${col}` }}>{status}</p>
        </div>
        <progress className={`${styles[color]}`} value={value} max={max} />
      </div>
    </li>
  )
}

export default Progress
