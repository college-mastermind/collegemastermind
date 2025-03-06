"use client"
import React from 'react';
import Image from 'next/image';
import adam from "@/app/assets/adam.png";
import star from "@/app/assets/icons/star.svg";
import cup from "@/app/assets/icons/cup.svg";

const Adam = () => {
  return (
    <div className="relative mt-7 md:mt-0 w-full bg-white py-28 px-6 
    sm:px-12 md:px-8 flex flex-col md:flex-row items-center justify-between
     max-w-screen-xl mx-auto lg:px-14 xl:px-16">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image src={cup} alt="Cup" width={100} height={100} className="absolute top-5 left-14 opacity-50" />
        <Image src={star} alt="Star" width={100} height={100} className="absolute top-0 left-1/2 opacity-50" />
        <Image src={star} alt="Cup" width={100} height={100} className="absolute bottom-12 left-1/3 opacity-50" />
        <Image src={cup} alt="Star" width={100} height={100} className="absolute bottom-24 right-28 opacity-50" />
      </div>
      
      {/* Left Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full sm:text-center sm:items-center
       md:w-2/3 md:items-start md:text-left xl:pl-12 xl:gap-10  mt-4">
        {/* Profile Image */}
        <div className="rounded-full overflow-hidden">
          <Image
            src={adam}
            alt="Adam"
            // width={140}
            // height={140}
            className="object-cover w-[140px] h-[140px] md:w-36 md:h-36
             rounded-full lg:w-44 lg:h-44"
          />
        </div>
        
        {/* Text Content */}
        <div className='md:w-1/2'>
          <h2 className="text-3xl font-bold bg-gradient-to-b from-[#447EF7]
           to-[#243DBC] text-transparent bg-clip-text md:text-4xl lg:text-5xl">Adam</h2>
          <p className="text-gray-700 text-sm md:text-base mt-2 md:mt-2 lg:text-lg">
            Becoming a Brand Ambassador gave me unique leadership experience and fulfilled my desire 
            to help other students succeed and reach their goals.
          </p>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="w-full  md:w-2/5 lg:w-2/4 flex  lg:mb-4  flex-col items-start 
      text-left sm:text-center sm:items-center mt-10 md:mt-0 md:items-start md:text-left">
        <h3 className="text-2xl font-bold bg-gradient-to-b from-[#447EF7] to-[#243DBC] 
        text-transparent bg-clip-text lg:text-5xl lg:text-nowrap ">Join Your Squad Today!</h3>
        <p className="text-gray-700 text-sm md:text-base mt-2 md:mt-3 lg:text-lg">
          Become a Brand Ambassador and Start Making a Difference for Yourself and Your Peers.
        </p>
        <a
        href="https://collegemastermind-ambassador.pushlapgrowth.com/"
          target='_blank'
        className="mt-4 bg-[#447EF7] hover:bg-[#243DBC] text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Adam;
