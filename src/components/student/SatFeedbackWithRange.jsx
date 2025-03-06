"use client";
import React from "react";
import Image from "next/image";
import adam from "@/app/assets/adam.png";
import star from "@/app/assets/icons/star.svg";
import cup from "@/app/assets/icons/cup.svg";
import aarushPicture from "@/app/assets/aarushPicture.png";

const SatFeedbackWithRange = () => {
  return (
    <div className="relative mt-7 md:mt-0 w-full h-full bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-32 flex flex-col items-start text-left max-w-screen-xl mx-auto">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={cup}
          alt="Cup"
          width={100}
          height={100}
          className="absolute top-5 left-14 opacity-50"
        />
        <Image
          src={star}
          alt="Star"
          width={100}
          height={100}
          className="absolute top-0 left-1/2 opacity-50"
        />
        <Image
          src={star}
          alt="Cup"
          width={100}
          height={100}
          className="absolute bottom-12 left-1/3 opacity-50"
        />
        <Image
          src={cup}
          alt="Star"
          width={100}
          height={100}
          className="absolute bottom-24 right-80 opacity-50"
        />
      </div>

      {/* Profile Section */}
      <div className="flex items-center mt-6 gap-3 md:gap-4 lg:gap-5 md:justify-start w-full">
        <div className="flex justify-start gap-3 items-center text-center md:w-1/4"> 
          <div className="rounded-full overflow-hidden">
            <Image
              src={aarushPicture}
              alt="Matthew"
              width={80}
              height={80}
              className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
            />
          </div>
          <h2 className="text-[#447EF7] font-semibold text-lg md:text-2xl lg:text-4xl">
            Hiyu
          </h2>
        </div>

        <div className="flex justify-start items-start gap-8 text-center w-fit md:w-full md:max-w-4/5">
          <div className="hidden md:block md:h-0.5 bg-gray-500 text-gray-500 md:w-full mt-5 opacity-50">-</div>

          <p className="text-gray-400 text-xl text-nowrap  sm:text-2xl lg:text-4xl inline-block">
            <span className="font-extrabold text-gray-400">1260</span> to{" "}
            <span className="font-extrabold bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">1520</span>
          </p>
        </div>
      </div>

      <p className="text-gray-700 text-sm md:text-base lg:text-2xl xl:text-3xl mt-5 md:mt-10 max-w-5xl text-left">
        I chose
        <span className="font-extrabold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
          {" "}
          College Mastermind's{" "}
        </span>
        Full Test Prep program right off the bat. I knew I needed the
        test-taking skills because I wanted to have the best score possible for
        top colleges.
      </p>

      {/* Quote Text */}
      <p className="text-gray-700 text-sm md:text-base lg:text-2xl xl:text-3xl max-w-5xl mt-5">
        College Mastermind's tutors helped me boil down the SAT to a science
        (especially the English section!) and enabled me to achieve a score that
        I am proud of. My score now accurately reflects my academic abilities
        and is competitive among top universities.
      </p>
    </div>
  );
};

export default SatFeedbackWithRange;
