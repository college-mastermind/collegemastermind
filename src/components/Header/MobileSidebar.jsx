"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import { NavbarItems } from "@/utils/NavbarItems";
import Logo from "/public//college-mastermind/logo-text-right.png";
import { FaAngleDown, FaAngleUp, FaChevronRight } from "react-icons/fa";

const SingleDropDown = ({ title, titleLink, subItems, setShowSidebar }) => {
  const [showSubItems, setShowSubItems] = useState(false);

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <Link
          href={titleLink || "#"}
          onClick={() => setShowSidebar(false)}
          className="text-xl font-medium"
        >
          {title}
        </Link>
        {subItems?.length > 0 && (
          <button onClick={() => setShowSubItems(!showSubItems)} className="">
            {showSubItems ? <FaAngleUp size={25} /> : <FaAngleDown size={25} />}
          </button>
        )}
      </div>
      {showSubItems && (
        <div className="border-l border-l-lightGrey ml-2 pl-4 mt-[2px] flex flex-col gap-2">
          {subItems.map((item, i) => (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className="text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileSideBar = ({ setShowSidebar }) => {
  return (
    <div className="py-4 px-6 flex flex-col min-h-[100vh]">
      <div className="flex flex-row items-center justify-between">
        <Link href={"/"}>
          <Image
            src={Logo}
            quality={100}
            alt="Hersey Bins Logo"
            className="w-[140px]"
          />
        </Link>
        <button
          onClick={() => setShowSidebar(false)}
          className="flex flex-row gap-[2px] items-center"
        >
          <FaChevronRight size={15} />
          <p className="text-sm">Close</p>
        </button>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {NavbarItems.map((item, i) => (
          <SingleDropDown
            key={i}
            title={item.name}
            titleLink={item.href}
            subItems={item.children}
            setShowSidebar={setShowSidebar}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSideBar;
