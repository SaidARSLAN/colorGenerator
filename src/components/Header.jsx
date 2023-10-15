import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SET_COLOR } from '../store/color';
import findAllPossibleColors from '../helpers/utils';

const Header = () => {

    const color =  useSelector(state => state.color.color)
    const [colorName, setColorName] = useState(color);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(SET_COLOR(findAllPossibleColors(colorName)));
    }
  return (
    <section className='__header'>
        <h1>Color Generator</h1>
        <div className='__header-card'>
            <input type='color' onChange={(event) => setColorName(event.target.value)}/>
            <input type='text' value={colorName} onChange={(event) => setColorName(event.target.value)}></input>
            <button style={{background:colorName}} onClick={handleClick}>Pick Color</button>
        </div>
    </section>
  )
}

export default Header