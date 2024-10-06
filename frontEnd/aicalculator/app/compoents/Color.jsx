"use client"

import React, { useState } from 'react'


const colors = [
    {
        id:1,
        name:"#ff0000"
    },
    {
        id:2,
        name:"#008000"
    },
    {
        id:3,
        name:"#FFFF00"
    },
    {
        id:4,
        name:"#0000FF"
    },
    {
        id:5,
        name:"#3d85c6"
    },
    {
        id:6,
        name:"#FFC0CB"
    }
];

const Color = () => {
    const [color ,setcolor ] = useState("#fff");
    const [active,setActive] = useState("#ff0000");
  

    const handleColor = (color)=>{
        setcolor(color)
        
        setActive(color)
      
        
    }
    
  return (
    <div className='flex  items-center'>
        {
            colors.map((color,i)=>(
                <button className={`${active === color.name ? ("border-2 border-slate-50"): ""} w-7 h-7 mx-2 rounded-full `} style={{ backgroundColor: color.name }} key={i} onClick={()=>handleColor(color.name)}></button>
            ))
        }
    </div>
  )
}

export default Color