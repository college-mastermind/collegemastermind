import React from "react";
import Image from "next/image";
import satGirl from "@/app/assets/satGirl.png";
import satBgCircle from "@/app/assets/satBgCircle.png";
import crossCheck from "@/app/assets/crossCheck.svg";

const ChildStruggle = ({ Heading1, Heading2, plainText, pointText }) => {
  return (
    <>
      <div>
        <div className="flex flex-col mt-10 overflow-hidden  w-full sm:flex-row-reverse lg:px-14 xl:px-0 xl:gap-20 max-w-fit mx-auto">
          <div className="w-full xl:mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col items-center  justify-center xl:-mr-10 z-10 px-4 sm:px-6 md:px-8  xl:px-0">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-4xl lg:text-5xl md:text-nowrap font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10 xl:text-nowrap">
                {Heading1}{" "} <br className="hidden lg:block " />
                {Heading2}
              </div>

              <div className="text-lg sm:text-xl font-normal text-justify text-[#3F3F3F] leading-relaxed">
                {plainText}
              </div>

              <div className="mt-6">
                <div className="flex space-x-4 items-start">
                  <Image
                    src={crossCheck}
                    width={17}
                    height={17}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base lg:text-[18px]">
                    {pointText}
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-2">
                  <Image
                    src={crossCheck}
                    width={17}
                    height={17}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-normal text-base lg:text-[18px]">
                    <span>High school students preparing for the SAT</span>{" "}
                    (primarily juniors & sophomores)
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-2">
                  <Image
                    src={crossCheck}
                    width={17}
                    height={17}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-normal text-base lg:text-[18px]">
                    Students who want to get into the top 50 universities
                  </div>
                </div>
              </div>

              <h3 className="bg-[#5277FF] px-3 sm:px-4 text-center py-2 rounded-xl text-white text-base mt-8">
                A 1500+ is not as hard as you may think. A proven plan combined
                with the right support is all you need.
              </h3>
            </div>
          </div>
          <div className="w-full relative flex items-center justify-center">
            <Image
              src={satGirl}
              width={800}
              height={800}
              alt="Picture of the boy"
              className=" w-auto z-30 mt-7 max-w-full min-h-[470px] lg:max-h-[550px] lg:max-w-screen-ss"
            />
            <Image
              className="z-10 absolute top-16 left-0 w-auto h-full max-w-full max-h-[500px] lg:max-h-[520px] lg:max-w-screen-ss"
              alt="A Background Circle"
              width={900}
              height={900}
              src={satBgCircle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildStruggle;
