import React from 'react';
import heroImage from "@/app/assets/hero.png";

export default function Hero() {
  return (
    <div className="relative w-full mb-16 h-[400px] sm:h-[500px] md:h-[640px] lg:h-[700px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>
      <div className='flex flex-col items-center justify-center text-center lg:pt-7'>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-1 sm:mb-6 md:mb-8 lg:mb-12 text-white text-center ">
          Top Colleges Want More <br /> Than Just Good Grades
        </h1>
        <p className="px-4 block text-[16px] sm:text-[19px] leading-normal md:text-[22px] lg:text-[28px] lg:font-normal text-white text-center mb-8 sm:mb-12 md:mb-16 lg:mb-16 text-lg">
          Become an ambassador and gain a huge 
          <span className="inline sm:hidden"> </span>
          <br className="hidden sm:block" />
          advantage in admissions
        </p>

        <a
          href="https://collegemastermind-ambassador.pushlapgrowth.com/"
          target='_blank'
          className="bg-white text-blue-500 font-semibold border
           border-blue-500 rounded-lg transition duration-300 ease-in-out 
           transform hover:bg-blue-500 hover:text-white hover:shadow-lg 
           flex items-center justify-center w-[145px] sm:w-[155px] md:w-[170px]
            lg:w-[187px] lg:text-xl shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
          style={{ height: '50px' }}
        >
          Join Now!
        </a>
      </div>
    </div>
  );
}
