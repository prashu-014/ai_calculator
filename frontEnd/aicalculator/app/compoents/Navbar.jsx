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
    <div className="grid grid-cols-2 gap-4 grid-flow-col justify-between items-center py-3 px-4 bg-zinc-900 relative">
      <div>
        <Image
          src={MenuIcon}
          alt="menubar"
          width={40}
          height={40}
          className="bg-slate-50 rounded-md cursor-pointer"
          onClick={() => setSideBar(!sideBar)}
        />
      </div>
      <Logo />

      <div className="flex gap-3 ">
        <Color />
        <Brush />
      </div>
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  );
};

export default Navbar;
