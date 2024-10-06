import React from 'react'
import Image from 'next/image'
import logo from ".././logo1.png.png"

const Logo = () => {
  return (
    <div className=''>
      <Image src={logo} alt="logo.png" width={110} />
    </div>
  )
}

export default Logo