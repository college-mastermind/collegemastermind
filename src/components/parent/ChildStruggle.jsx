import React from "react";
import Image from "next/image";
import satGirl from "@/app/assets/satGirl.png";
import satBgCircle from "@/app/assets/satBgCircle.png";
import crossCheck from "@/app/assets/crossCheck.svg";

const ChildStruggle = ({Heading1,Heading2,plainText,pointText}) => {

  return (
    <>
      <div>
        <div className="flex flex-col mt-20  w-full sm:flex-row-reverse lg:px-14 xl:px-0 xl:gap-20 max-w-fit mx-auto">
          <div className="w-full xl:mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col items-center  justify-center xl:-mr-10 z-10 px-4 sm:px-6 md:px-8  xl:px-0 py-12">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-3xl flex-col sm:text-3xl md:text-nowrap lg:text-5xl font-bold text-left text-[#5277FF] pb-6 sm:pb-8 lg:pb-10">
                <h2>{Heading1}</h2>

                <h2 className="mt-1.5">{Heading2}</h2>
              </div>

              <div className="text-lg sm:text-xl lg:text-[24px] font-normal text-justify text-[#3F3F3F] leading-relaxed">
                {plainText}
              </div>

              <div className="mt-8 sm:mt-8">
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
                <div className="flex space-x-4 items-start mt-4">
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
                <div className="flex space-x-4 items-start mt-4">
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

              <h3 className="bg-[#5277FF] px-3 sm:px-6 py-3 rounded-xl text-white text-lg mt-12">
                A 1500+ is not as hard as you may think. A proven plan combined
                with the right support is all you need.
              </h3>
            </div>
          </div>
          <div className="w-full relative flex items-center justify-center lg:justify-end lg:items-end pt-12 xl:py-0">
            <Image
              src={satGirl}
              width={800}
              height={800}
              alt="Picture of the boy"
              className="z-20 max-w-full max-h-full lg:max-w-screen-ss"
            />
            <Image
              className="z-10 absolute top-24 left-0 max-h-full max-w-full"
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
