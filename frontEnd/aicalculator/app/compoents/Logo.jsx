import React from 'react'
import Image from 'next/image'
import logo from ".././logo1.png.png"

const Logo = () => {
  return (
   <>
      <Image src={logo} alt="logo.png" width={110} height={100} />
    </>
  )
}

export default Logo