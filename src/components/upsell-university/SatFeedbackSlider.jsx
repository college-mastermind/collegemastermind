"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import star from "@/app/assets/icons/star.svg";
import cup from "@/app/assets/icons/cup.svg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const SatFeedbackWithRange = ({ feedbacks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
    );
  };

  return (
    <div
      className="relative mt-7 md:mt-0 w-full h-full bg-white py-20 px-6 sm:px-12 md:px-0 flex flex-col items-start text-left max-w-screen-xl mx-auto  mb-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={cup}
          alt="Cup"
          width={100}
          height={100}
          className="absolute top-5 left-14 opacity-55"
        />
        <Image
          src={star}
          alt="Star"
          width={100}
          height={100}
          className="absolute top-0 left-1/2 opacity-55"
        />
        <Image
          src={star}
          alt="Cup"
          width={100}
          height={100}
          className="absolute bottom-12 left-1/3 opacity-55"
        />
        <Image
          src={cup}
          alt="Star"
          width={100}
          height={100}
          className="absolute bottom-24 right-80 opacity-55"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start text-left w-full h-full max-w-6xl mx-auto"
        >
          <div className="flex items-center text-left mt-6 gap-3 md:gap-4 lg:gap-5 md:justify-between min-w-full">
            <div className="flex justify-between sm:justify-start gap-3 items-center text-left sm:w-1/4 ">
              <div className="rounded-full overflow-hidden">
                <Image
                  src={feedbacks[currentIndex].picture}
                  alt={feedbacks[currentIndex].name}
                  width={80}
                  height={80}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full object-cover"
                />
              </div>
              <h2 className="text-[#447EF7] font-semibold text-xl md:text-2xl lg:text-4xl">
                {feedbacks[currentIndex].name}
              </h2>
            </div>
            {feedbacks[currentIndex].from && feedbacks[currentIndex].till && (
              <div className="flex justify-start items-start gap-8 text-center w-fit sm:w-full sm:max-w-4/5">
                <div className="hidden sm:block sm:h-0.5 bg-gray-500 text-gray-500 sm:w-full mt-5 opacity-50">
                  -
                </div>

                <p className="text-gray-400 text-xl text-nowrap  sm:text-2xl lg:text-4xl block">
                  <span className="font-extrabold text-gray-400">
                    {feedbacks[currentIndex].from}
                  </span>{" "}
                  to{" "}
                  <span className="font-extrabold bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
                    {feedbacks[currentIndex].till}
                  </span>
                </p>
              </div>
            )}
          </div>
          <p className="text-gray-700 text-sm md:text-base lg:text-2xl xl:text-3xl mt-5 md:mt-10 text-left">
            {feedbacks[currentIndex].before}{" "}
            <strong className="font-extrabold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
              {feedbacks[currentIndex].bold}
            </strong>{" "}
            {feedbacks[currentIndex].after}
          </p>
          <p className="text-gray-700 text-sm md:text-base lg:text-2xl xl:text-3xl mt-5 md:mt-10 text-left">
            {feedbacks[currentIndex].before2}{" "}
            <strong className="font-extrabold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text">
              {feedbacks[currentIndex].bold2}
            </strong>{" "}
            {feedbacks[currentIndex].after2}
          </p>
        </motion.div>
      </AnimatePresence>
      <div className=" mx-auto flex items-start xl:mr-32 gap-2 mt-8 md:mt-10">
        <button onClick={handlePrev} className="md:text-2xl">
          <GoChevronLeft />
        </button>
        <div className="mt-1 flex gap-2 md:gap-3">
          {feedbacks.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 md:w-4 md:h-4 rounded-full ${
                currentIndex === index ? "bg-blue-700" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
        <button onClick={handleNext} className="md:text-2xl">
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};

export default SatFeedbackWithRange;
