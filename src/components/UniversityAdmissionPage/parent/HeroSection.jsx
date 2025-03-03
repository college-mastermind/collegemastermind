import React from "react";
import heroImage from "@/app/assets/hero.png";

export default function HeroSection() {
  return (
    <div
      className="relative w-full mb-16 h-[500px] sm:h-[550px] md:h-[640px] lg:h-[700px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="flex flex-col pt-5 items-center justify-center text-center lg:pt-7">
        <h1 className="text-3xl px-1 sm:text-5xl sm:tracking-wide md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 md:mb-8 lg:mb-12 text-white text-center ">
          The Right Colleges <br />
          More Opportunities
        </h1>
        <p className="px-6 max-w-80 leading-normal sm:max-w-full block text-[16px] sm:text-[19px] md:text-[22px] lg:text-[28px] lg:font-normal text-white text-center mb-8 sm:mb-12 text-lg">
        Get 2 Free Sessions to Build Your 
          <br /> 
          Child's Perfect College List 
        </p>

        <a
          href="https://collegemastermind-ambassador.pushlapgrowth.com/"
          target="_blank"
          className="bg-white text-blue-500 font-semibold border text-sm
           border-blue-500 rounded-lg transition duration-300 ease-in-out 
           transform hover:bg-blue-500 hover:text-white hover:shadow-lg 
           flex items-center justify-center w-[170px] sm:w-[250px] md:w-[300px] md:text-base
            lg:w-[360px] lg:text-xl shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
          style={{ height: "52px" }}
        >
          Claim Your Free Sessions Here
        </a>
      </div>
    </div>
  );
}
