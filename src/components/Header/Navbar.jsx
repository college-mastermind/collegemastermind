"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { NavbarItems } from "@/utils/NavbarItems";

import Logo from "/public/college-mastermind/logo-text-right.png";
import LogoOnly from "/public/college-mastermind/logo-only.svg";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div
      className={`hidden md:block w-full bg-[#ffffffa3] backdrop-blur fixed top-0 w-full z-50 border-b border-b-[#90bbfa99] ${
        navbar ? "" : ""
      }`}
    >
      <nav
        className={`text-[#141C42] w-full justify-between mx-auto md:items-center md:flex ${
          navbar ? "px-0" : "px-[4%]"
        }`}
      >
        <div
          className={`flex items-center justify-between py-2 md:block ${
            navbar ? "px-8 " : ""
          }`}
        >
          <Link href="/" className="z-20">
            <Image
              src={LogoOnly}
              alt="College Mastermind Logo"
              className="w-[60px] h-auto object-contain md:hidden"
            />
            <Image
              src={Logo}
              alt="College Mastermind Logo"
              className="w-[180px] h-auto object-contain hidden md:block"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 outline-none"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <IoClose size={40} className="text-blueMain" />
              ) : (
                <IoIosMenu size={40} className="text-blueMain" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 lg:gap-8">
          {NavbarItems.map((item, i) => (
            <div key={i} className="relative group">
              <div className="flex flex-row items-center gap-2 hover:text-redMain transitions duration-100">
                <Link href={item.href} className="text-xl font-medium">
                  {item.name}
                </Link>
                {item.children.length > 0 && <FaChevronDown size={15} />}
              </div>
              {item.children.length > 0 && (
                <div className="absolute w-[225px] top-full left-0 hidden group-hover:block bg-[#ffffffd3] backdrop-blur-md shadow-lg z-20 rounded-lg">
                  {item.children.map((subItem, index) => (
                    <Link
                      key={index}
                      href={subItem.href}
                      className="block px-4 py-[12px] rounded-lg text-lg hover:text-white hover:bg-blueSecondary font-medium transitions duration-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-row gap-4 items-center w-[200px]">
          {/* <Link
            href="#"
            onClick={() => setNavbar(false)}
            className="py-4 text-left font-semibold md:text-center my-4 border-b border-b-white hover:text-blueMain md:border-b-0 transition duration-200"
          >
            Sign Up
          </Link>

          <Link
            href="#"
            onClick={() => setNavbar(false)}
            className="py-2 px-6 text-white bg-gradient-to-r from-[#447EF7] to-[#4B66EA] border border-blueSecondary rounded-lg hover:text-blueSecondary hover:from-white hover:to-white"
          >
            Login
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
