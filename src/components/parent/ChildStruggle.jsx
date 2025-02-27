import React from "react";
import Image from "next/image";
import satGirl from "@/app/assets/satGirl.png";
import satBgCircle from "@/app/assets/satBgCircle.png";

const ChildStruggle = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full xl:mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col items-center  justify-center xl:-mr-10 z-10 px-4 sm:px-6 md:px-8  xl:px-0 py-12">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-3xl flex-col sm:text-3xl lg:text-5xl font-bold text-left text-[#5277FF] pb-6 sm:pb-8 lg:pb-10">
                <h2>Does Your Child Struggle</h2>

                <h2 className="mt-3">to Improve Their SAT</h2>

                <h2 className="mt-3">Score & Lack the Right</h2>

                <h2 className="mt-3">Guidance?</h2>
              </div>
              <div className="text-lg sm:text-xl lg:text-[24px] font-normal text-justify text-[#3F3F3F] leading-relaxed">
                As a parent, navigating the SAT prep journey can feel
                overwhelming. With countless options & high stakes, finding the
                right support is crucial. Give your child the advantage they
                deserve.
              </div>
              <div className="mt-8 sm:mt-8 md:mt-4">
                <div className="flex space-x-4 items-start">
                  <Image
                    src="/tick_icon.svg"
                    width={15}
                    height={15}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-normal text-base lg:text-[18px]">
                    Students aiming for higher SAT scores to increase their
                    college{" "}
                    <span>admission chances</span>
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-4">
                  <Image
                    src="/tick_icon.svg"
                    width={15}
                    height={15}
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
                    src="/tick_icon.svg"
                    width={15}
                    height={15}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-normal text-base lg:text-[18px]">
                    Students who want to get into the top 50 universities
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative xl:w-[650px] flex items-center justify-center lg:justify-end lg:items-end pt-12 xl:py-0">
            <Image
              src={satGirl}
              width={800}
              height={800}
              alt="Picture of the boy"
              className="z-20 max-w-[90%] md:min-h-full"
            />
            <Image
              className="z-10 absolute bottom-0 left-0 h-full w-full"
              alt="A Background Circle"
              width={100}
              height={100}
              src={satBgCircle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildStruggle;
