"use client"

import React, { useState } from 'react'

import brush from '.././brush.png'
import Image from 'next/image'

const Brush = () => {

  const [brushSize,setBrushSize] = useState(2);


  

  return (
    <div className='bg-slate-100  flex px-2 py-1 rounded-md'>
      <Image src={brush} alt="brush" className='bg-slate-50 ' width={35}  loading='lazy'/>
      <select name="" id="" className='text-slate-950 mx-1' onClick={(e)=>setBrushSize(e.target.value)}>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
      </select>

    </div>
  )
}

export default Brush