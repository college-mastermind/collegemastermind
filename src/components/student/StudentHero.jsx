import React from "react";
import heroImage from "@/app/assets/hero.png";

export default function StudentHero() {
  return (
    <div
      className="relative w-full mb-16 h-[500px] sm:h-[550px] md:h-[580px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="flex flex-col pt-5 items-center justify-center text-center lg:pt-14">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6  text-white text-center ">
          Your First Step to <br />
          1500+ on the SAT
        </h1>
        <p className="px-6  block text-[16px] leading-normal sm:text-[19px] md:text-[22px] lg:text-[28px] lg:font-normal text-white text-center mb-8  text-lg">
          5 Free SAT Sessions to Jumpstart
          <br/>
          Your Path to 1500+
        </p>

        <a
          href="https://collegemastermind-ambassador.pushlapgrowth.com/"
          target="_blank"
          className="bg-white text-blue-500 font-semibold border text-sm
           border-blue-500 rounded-lg transition duration-300 ease-in-out 
           transform hover:bg-blue-500 hover:text-white hover:shadow-lg 
           flex items-center justify-center w-[160px] sm:w-[240px] md:w-[280px] md:text-base
            lg:w-[320px] lg:text-xl shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
          style={{ height: "52px" }}
        >
          Claim Your 5 Free Sessions
        </a>
      </div>
    </div>
  );
}
