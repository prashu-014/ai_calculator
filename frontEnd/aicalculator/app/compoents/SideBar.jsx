import React, { useState,useEffect } from "react";

import closeIcon from "../close.png";
import Image from "next/image";
const SideBar = ({ sideBar,setSideBar }) => {
    const [isOpen, setIsOpen] = useState(sideBar);

    useEffect(()=>{
        setIsOpen(sideBar)
        
        
    },[sideBar])

    const handleClose =()=>{
      setIsOpen(false);
      setSideBar(false);
    }


  return (
    <div
      className={`bg-zinc-900 absolute top-0 ${
        isOpen ? ("left-0") : ("-left-full")
      }  h-dvh min-w-80 transition-all duration-500 ease-in-out  z-20`}
    >
      <div className="bg-slate-100 flex justify-between items-center px-2 py-2">
        <h1 className=" text-zinc-800 text-xl">History</h1>
        <Image
          src={closeIcon}
          width={35}
          height={35}
          alt="closeIcon"
          loading="lazy"
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SideBar;
