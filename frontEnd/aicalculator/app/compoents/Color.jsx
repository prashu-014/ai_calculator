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
    console.log(color);
    
  return (
    <div >
        {
            colors.map((color,i)=>(
                <button className="w-7 h-7 mx-2 rounded-l" style={{ backgroundColor: color.name }} key={i} onClick={()=>setcolor(color.name)}>1</button>
            ))
        }
    </div>
  )
}

export default Color