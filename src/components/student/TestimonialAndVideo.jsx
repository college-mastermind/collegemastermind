"use client";

import React, { useState } from "react";
import Image from "next/image";
import profilePic from "@/app/assets/adam.png";
import star from "@/app/assets/icons/star.svg";
import cup from "@/app/assets/icons/cup.svg";
import { motion } from "framer-motion";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import aarushPicture from "@/app/assets/aarushPicture.png"

const testimonials = [
  {
    name: "Aarush",
    from: "950",
    till: "1370",
    duration: "6 weeks",
    image: aarushPicture,
  },
  {
    name: "Sophia",
    from: "1100", 
    till: "1450",
    duration: "8 weeks",
    image: profilePic,
  },
  {
    name: "Liam",
    from: "1200",
    till: "1500",
    duration: "5 weeks",
    image: profilePic,
  },
  {
    name: "Sophia",
    from: "1100",
    till: "1450",
    duration: "8 weeks",
    image: profilePic,
  }
];
 
const TestimonialAndVideo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, from, till, duration, image } = testimonials[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative mt-7 w-full bg-white py-16 xl:py-20 xl:my-20 px-6 sm:px-12 md:px-16 flex flex-col md:flex-row items-center justify-between lg:justify-around  max-w-7xl xl:max-w-screen-xl mx-auto lg:px-20 xl:px-14">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src={cup}
          alt="Cup"
          width={100}
          height={100}
          className="absolute top-5 left-10 opacity-50"
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
          className="absolute bottom-24 right-20 opacity-50"
        />
      </div>

      {/* Left Side: Testimonial */}
      <div className="flex flex-col items-center md:items-start xl:items-center gap-4 w-full md:w-1/2 lg:pl-10 xl:pl-0 ">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <div className="rounded-full overflow-hidden w-28 h-28 sm:w-40 sm:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48">
            <Image src={image} alt={name} className="object-cover w-full h-full" />
          </div>
          <div className="transition-all ease-in-out md:pl-2">
            <h2 className="text-3xl font-bold text-blue-700 sm:text-4xl lg:mb-2">{name}</h2>
            <p className="text-gray-400 text-xl sm:text-2xl lg:text-5xl">
              <span className="font-extrabold text-gray-600">{from} </span>
              to <span className="font-extrabold text-[#447EF7]">{till}</span>
              <br />
              in <span className="font-extrabold text-blue-700">{duration}</span>
            </p>
          </div>
        </motion.div>
        <div className="flex items-start xl:mr-32 gap-2 mt-2 md:mt-4">
          <button onClick={handlePrev} className="md:text-xl">
            <GoChevronLeft />
          </button>
          <div className="mt-1 flex gap-2 md:gap-3">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 md:w-3 md:h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-700" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
          <button onClick={handleNext} className="md:text-xl">
            <GoChevronRight />
          </button>
        </div>
      </div>

       {/* Right Side: Videos */}
       <div className="flex flex-col items-center md:items-start lg:items-center gap-6 w-full md:w-1/2 mt-8 md:mt-0">
        {[1, 2].map((_, index) => (
          <motion.div
            key={index}
            className="w-full max-w-xs md:max-w-sm h-36 md:h-40 lg:h-44 bg-gray-300 flex items-center justify-center rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-[#243DBC] text-gray-100 flex justify-center text-center rounded-full text-2xl px-3 py-1.5">
              <div className="rounded-full">▶</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialAndVideo;
