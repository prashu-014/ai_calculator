"use client";

import React,{useEffect, useState} from "react";
import Logo from "./Logo";
import Shape from "./Shape";
import Color from "./Color";
import Brush from "./Brush";

import Image from "next/image";

import MenuIcon from "../menu-bar.png";
import SideBar from "./SideBar";

const Navbar = () => {

  const [sideBar,setSideBar] = useState(false);

  

  return (
    <div className="flex gap-2 md:justify-between items-center py-1 md:py-3 px-4 bg-zinc-900 relative ">
      
        <Image
          src={MenuIcon}
          alt="menubar"
          width={35}
          height={35}
          className="bg-slate-50 rounded-md cursor-pointer"
          onClick={() => setSideBar(!sideBar)}
        />
      
      <Logo />

      <div className="  hidden md:flex md:gap-2 justify-end">
        <Color />
        <Brush />
      </div>
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  );
};

export default Navbar;
