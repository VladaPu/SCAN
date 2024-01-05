import React from 'react';
import './ResultCarousel.css'
const Period = ({date, risk, total, ...rest}) => {
    const dateObj = new Date(date)
    const customDate =`${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`
    return (
    <div  {...rest}>
      <div className='period__item'>{customDate}</div>
      <div className='period__item'>{total}</div>
      <div className='period__item'>{risk}</div>
    </div>
  )
}

export default Period
