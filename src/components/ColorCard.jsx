import React from 'react'

const ColorCard = ({color}) => {
  return (
    <div style={{background:color}} className='colorCard'>
        {color}
    </div>
  )
}

export default ColorCard