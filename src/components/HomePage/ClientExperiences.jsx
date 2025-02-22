"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

import QuotesImage from "/public/icons/quotes-left.svg";
import Class24Image from "/public/graphics/class-of-24.svg";
import { testimonials } from "@/utils/Testimonials";

const Modal = ({ isOpen, onClose, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed mt-10 z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white flex flex-col items-center p-8 gap-2 rounded-lg w-[400px] md:w-[600px] h-[370px]">
        <div className="flex gap-3 items-center justify-between w-full ">
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <button
            onClick={onClose}
            className="text-red-500  bg-grey-500 hover:bg-gray-200 bg-gray-300 p-2 flex rounded-full"
          >
            <IoClose size={20} className="m-auto" />
          </button>
        </div>
        <p
          className="  overflow-y-scroll custom-scrollbar
        scrollbar-hidden text-justify"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const SingleExperienceBox = ({ id, title, description }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="w-full md:w-[33.33%] p-4  ">
      <div className="rounded-lg h-full shadow-[0px_2px_15px_-3px_#0000001A] py-4 px-6 flex flex-col gap-2 bg-white">
        <Image
          src={Class24Image}
          alt=""
          className="w-[100px] object-contain mx-auto"
        />
        <div className="flex flex-row justify-between items-center">
          <Image
            src={QuotesImage}
            alt=""
            className="w-[30px] object-contain scale-x-[-1]"
          />
          <h3 className="text-2xl sm:text-3xl text-blueDark font-semibold text-center">
            {title}
          </h3>
          <Image src={QuotesImage} alt="" className="w-[30px] object-contain" />
        </div>
        <p className="text-blueYonder text-lg mb-4 mt-2 text-center line-clamp-2">
          {description}
        </p>
        <button
          onClick={handleClick}
          className="mt-auto py-[10px] rounded-lg px-4 text-center text-white bg-gradient-to-r from-blueSecondary to-blueMain border border-blueSecondary hover:from-white hover:to-white hover:text-blueMain"
        >
          Full Testimonial
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={title}
        description={description}
      />
    </div>
  );
};

const ClientExperiences = () => {
  return (
    <div className="py-10">
      <h2 className="relative z-10 text-4xl md:text-5xl text-center font-bold w-full bg-gradient-to-r from-blueSecondary to-blueMain inline-block text-transparent bg-clip-text">
        We Love Our Clients
      </h2>
      <p className="text-center text-2xl text-textPrimary font-bold">
        (and they love us too!)
      </p>
      <div className="mt-6 flex flex-wrap justify-center items-stretch">
        {testimonials.map(({ id, title, description }) => (
          <SingleExperienceBox
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientExperiences;
