"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

import MobileSideBar from "./MobileSidebar";
import Logo from "/public//college-mastermind/logo-text-right.png";
import { IoMenu, IoClose } from "react-icons/io5";

const MobileNavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="flex md:hidden py-2 px-10 flex-row w-full items-center justify-between fixed top-0 z-50 bg-[#ffffffa3] backdrop-blur">
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="Hersey Bins Logo"
          priority
          quality={100}
          className="w-[180px] object-contain mr-auto"
        />
      </Link>
      <button onClick={() => setShowSideBar(!showSideBar)} className="">
        {showSideBar ? (
          <IoClose size={40} className="text-blueMain" />
        ) : (
          <IoMenu size={40} className="text-blueMain" />
        )}
      </button>
      <Drawer
        anchor="right"
        open={showSideBar}
        onClose={() => setShowSideBar(false)}
      >
        <div className="w-[300px] ss:w-[480px]">
          <MobileSideBar setShowSidebar={setShowSideBar} />
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNavBar;
