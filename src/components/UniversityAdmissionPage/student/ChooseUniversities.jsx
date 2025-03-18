import React from "react";
import Image from "next/image";
import universityGirl from "@/app/assets/universityGirl.png";

const ChooseUniversities = ({lastText}) => {
  return (
    <>
      <div>
        <div className="flex flex-col w-full sm:flex-row-reverse  lg:px-14 xl:px-10  xl:mt-10 max-w-fit mx-auto">  

          <div className=" w-full lg:max-w-screen-md xl:mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col items-center  justify-center lg:items-start lg:justify-start xl:-mr-10 z-10 px-4 sm:px-6  lg:px-0 py-16">
            <div className="lg:pb-5">
              <div className="text-4xl lg:text-5xl tracking-tighter font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10">
                Most Students Choose Universities
                for the Wrong Reasons{" "}
              </div>
              <div className="text-lg md:text-xl font-normal text-[#3F3F3F] leading-tight">
                <span className="font-bold">
                  Students tend to pick universities based on what is familiar.{" "}
                </span>
                Their choices tend to be based on.
              </div>
              <div className="mt-8">
                <div className="flex space-x-4 items-start">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base md:text-lg lg:text-[18px]">
                    Very famous “brand name” colleges
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-2">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base md:text-lg lg:text-[18px]">
                    Places their friends of family members attended
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-2">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base md:text-lg lg:text-[18px]">
                    Places that many students at their schools tend to apply to{" "}
                  </div>
                </div>
              </div>
              <div className="text-lg mt-10 text-left font-bold text-[#3F3F3F] leading-tight">
                {lastText}
              </div>
            </div>
          </div>

          <div className="w-full lg:pl-10 flex items-center justify-center lg:justify-start lg:items-center pb-5 xl:py-0">
            <Image
              src={universityGirl} 
              width={800}
              height={800}
              alt="Picture of the Girl"
              className="w-full h-full ss:w-fit max-h-[440px] lg:max-w-screen-ss"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUniversities;
