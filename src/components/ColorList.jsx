import React from 'react'
import { useSelector } from 'react-redux'
import ColorCard from './ColorCard'

const ColorList = () => {

  const allColors =  useSelector(state => state.color.possibleColors)
  return (
    <div className='__color-list'>
      {allColors.map((color,idx) => <ColorCard color={color} key={idx}/>)}
    </div>
  )
}

export default ColorList