"use client";
import React from "react";
import Image from "next/image";
import adam from "@/app/assets/adam.png";
import star from "@/app/assets/icons/star.svg";
import cup from "@/app/assets/icons/cup.svg";
import aarushPicture from "@/app/assets/aarushPicture.png"

const StudentFeedback = () => {
  return (
    <div className="relative mt-7 md:mt-0 w-full h-full bg-white py-20 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center text-center max-w-7xl mx-auto">
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


      {/* Quote Text */}
      <p className="text-gray-700 text-sm md:text-base lg:text-2xl xl:text-3xl max-w-3xl">
        Cornell was my dream school, but after College Mastermind’s university
        selection process, I realized it wasn’t the best fit and dropped it to
        #5. I got rejected.
      </p>

      <p className="text-gray-700 text-sm md:text-base lg:text-2xl xl:text-3xl mt-5 md:mt-10 max-w-3xl">
        <span className="text-[#447EF7]">Because of this strategy,</span>
        <span className="font-extrabold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
          {" "}
          I was accepted into my actual top choice!{" "}
        </span>
        Without it, I might have focused on the wrong schools and missed my best
        opportunity.
      </p>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row-reverse items-center mt-6 gap-3 md:gap-4 lg:gap-5 md:justify-start w-full">
        <div className="rounded-full overflow-hidden">
          <Image
            src={aarushPicture}
            alt="Matthew"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
          />
        </div>
        <h2 className="text-[#447EF7] font-semibold text-lg mt-2 md:text-xl lg:text-3xl">Matthew</h2>
      </div>
    </div>
  );
};

export default StudentFeedback;
