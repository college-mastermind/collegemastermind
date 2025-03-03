import React from "react";
import Image from "next/image";
import universityGirl from "@/app/assets/universityGirl.png";

const ChooseUniversities = ({lastText}) => {
  return (
    <>
      <div>
        <div className="flex flex-col w-full md:flex-row lg:px-14 xl:px-0 xl:gap-20 lg:mt-16 xl:mt-24 max-w-fit mx-auto">
          <div className="w-full flex items-start justify-start py-12 xl:py-0">
            <Image
              src={universityGirl} 
              width={800}
              height={800}
              alt="Picture of the Girl"
              className="max-w-[90%] max-h-[90%]"
            />
          </div>

          <div className="w-full xl: mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col items-center  justify-center lg:items-start lg:justify-start xl:-mr-10 z-10 px-4 sm:px-6 md:px-8  xl:px-0 py-12">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10">
                Most Students Choose Universities <br />
                for the Wrong Reasons{" "}
              </div>
              <div className="text-lg sm:text-xl lg:text-[24px] font-normal text-justify text-[#3F3F3F] leading-tight">
                <span className="font-bold">
                  Students tend to pick universities based on what is familiar.
                </span>
                Their choices tend to be based on.
              </div>
              <div className="mt-8 sm:mt-10">
                <div className="flex space-x-4 items-start">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                    Very famous “brand name” colleges
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-4">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                    Places their friends of family members attended
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-4">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                    Places that many students at their schools tend to apply to{" "}
                  </div>
                </div>
              </div>
              <div className="text-lg mt-10 sm:text-xl font-bold lg:text-[24px] text-justify text-[#3F3F3F] leading-tight">
                {lastText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUniversities;
