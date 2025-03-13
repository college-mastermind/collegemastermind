import React from "react";
import Image from "next/image";
import choicesBoy from "@/app/assets/choicesBoy.png";

const TopChoices = ({boldText, plainText}) => {
  return (
    <>
      <div>
        <div className="flex flex-col w-full sm:flex-row lg:px-14 xl:px-0 xl:gap-36 max-w-fit mx-auto xl:mt-14">

          <div className="w-full xl:mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px]  flex flex-col items-center  justify-center xl:items-start z-10 px-4 sm:px-6 md:px-8  py-12">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-4xl lg:text-5xl md:text-nowrap font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10 xl:text-nowrap">
                96% of Our Students Get into{" "} <br className="hidden lg:block"/>
                One of Their Top 3 Choices
              </div>
              <div className="text-lg sm:text-xl text-[#3F3F3F]">
                <span className="font-bold">{boldText}</span>{" "}
                {plainText}
              </div>
              <div className="mt-8 ">
                <div className="flex space-x-4 items-start">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-1"
                  />
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  Reach  - Any university with an acceptance rate under 25%
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
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  Target - 50% of students share your admissions stats
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
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  Safety - 75% of students share your admissions stats
                  </div> 
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center lg:justify-end lg:items-end py-12 xl:py-0">
            <Image
              src={choicesBoy}
              width={800}
              height={800}
              alt="Picture of the boy"
              className=" w-full h-full ss:w-fit max-w-full max-h-[450px] lg:max-w-screen-ss"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopChoices;
