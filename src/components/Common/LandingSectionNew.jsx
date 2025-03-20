"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ConsultingForm from "./ConsultingForm";

const LandingSectionNew = ({
  backgroundImage,
  heading,
  description,
  buttonText
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-[95vh] w-full relative flex pt-16">
      <Image
        src={backgroundImage}
        alt=""
        priority
        quality={100}
        fill
        className="z-0 object-cover object-center"
      />
      <div className="absolute inset-0 landingSectionGradient z-10 md:w-[80%]"></div>
      <div className="max-w-[90%] w-[1280px] m-auto">
        <div className="flex flex-col gap-6 w-full sm:w-[60%] relative z-20">
          <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-[80px] text-center sm:text-left">
            {heading}
          </h1>
          <p className="text-white text-xl sm:text-2xl text-center sm:text-left md:pr-20">
            {description}
          </p>
          <button
            // href={buttonLink}
            // target="_blank"
            onClick={()=>setShowModal(true)}
            className="mt-10 max-w-fit text-center bg-white rounded-lg shadow-lg text-blueSecondary py-2 px-4 sm:px-10 font-semibold text-base sm:text-xl mr-auto ml-auto sm:ml-0 border border-white hover:bg-transparent hover:text-white transitions duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {showModal && 
      // <div className="absolute top-0 left-0 -translate-x-0 -translate-y-0">
        <ConsultingForm setShowModal={setShowModal}/>
        // </div>
        }
    </div>
  );
};

export default LandingSectionNew;
