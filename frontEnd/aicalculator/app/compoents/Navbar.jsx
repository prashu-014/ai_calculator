import React from 'react'
import Logo from './Logo'
import Shape from './Shape'
import Color from './Color'
import Brush from './Brush'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <Logo />
        <Shape />
        <Color />
        <Brush />
    </div>
  )
}

export default Navbar