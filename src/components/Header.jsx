import React from 'react'

const Header = () => {
  return (
    <section className='__header'>
        <h1>Color Generator</h1>
        <div className='__header-card'>
            <input type='color' />
            <input type='text'></input>
            <button>Pick Color</button>
        </div>
    </section>
  )
}

export default Header