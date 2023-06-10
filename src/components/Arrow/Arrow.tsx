import React from 'react'
import { downArrow, upArrow, rightArrow, leftArrow } from '../img'

interface ArrowProps {
  type: 'up' | 'down' | 'right' | 'left';
}

const Arrow = ({ type }: ArrowProps) => {
  let arrow = ''
  switch (type) {
    case 'up':
      arrow = upArrow
      break
    case 'down':
      arrow = downArrow
      break
    case 'right':
      arrow = rightArrow
      break
    case 'left':
      arrow = leftArrow
      break
    default:
      arrow = downArrow
  }

  return (
    <div>
      <img src={arrow} alt="" />
    </div>
  )
}

export default Arrow
