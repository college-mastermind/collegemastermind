import React from "react";
import heroImage from "@/app/assets/hero.png";

export default function ParentHero() {
  return (
    <div
      className="relative w-full mb-16 h-[500px] sm:h-[550px] md:h-[580px] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="flex flex-col pt-8 items-center justify-center text-center lg:pt-14">
        <h1 className="text-2xl px-4 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6  text-white text-center ">
        Your Child&apos;s First Step  <br />
        to 1500+ on the SAT
        </h1>
        <p className="px-6  block text-[16px] sm:text-[19px] leading-normal md:text-[22px] lg:text-[26px] lg:font-normal text-white text-center mb-8  text-lg">
        5 Free SAT Sessions to get them started
        </p>
{/* Test */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdyNl7-vjlLcvTwWXln2tx0gf6dOQeBwRGX921prwTdWHweTA/viewform"
          target="_blank"
          className="bg-white text-blue-500 font-semibold border text-sm
           border-blue-500 rounded-lg transition duration-300 ease-in-out 
           transform hover:bg-blue-500 hover:text-white hover:shadow-lg 
           flex items-center justify-center w-[160px] sm:w-[180px] md:w-[200px] md:text-base
            lg:w-[220px] lg:text-xl shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
          style={{ height: "52px" }}
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
