import React from "react";
import Image from "next/image";
import leadershipBoy from "@/app/assets/leadershipBoy.png"

const LeadershipSuccess = () => {
  return (
    <>
      <div>
        <div className="flex flex-col w-full md:flex-row lg:px-14 xl:px-0 xl:gap-20 max-w-fit mx-auto">
          <div className="w-full xl:mx-auto xl:max-w-[1000px] 2xl:max-w-[1200px] flex flex-col items-center  justify-center xl:-mr-10 z-10 px-4 sm:px-6 md:px-8  xl:px-0 py-12">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-4xl sm:text-5xl lg:text-[58px] md:text-nowrap font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10">
                Over 90% of our
                <br />
                students score 1500+
              </div>
              <div className="text-lg sm:text-xl lg:text-[24px] font-normal  text-[#3F3F3F]">
                <span className="font-bold">
                  Let us show you how to get there!
                </span>{" "}
                A 1500+ doesn&apos;t just look good, it opens doors at the most
                competitive colleges, even if your GPA isn&apos;t perfect.
              </div>
              <div className="mt-8 sm:mt-10">
                <div className="flex space-x-4 items-start">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-bold text-base sm:text-lg lg:text-[18px]">
                    Ivy League - 1570+
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-4">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-bold text-base sm:text-lg lg:text-[18px]">
                    Top 20 - 1550+
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-4">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-bold text-base sm:text-lg lg:text-[18px]">
                   Top 30 - 1520+
                  </div>
                </div>
                <div className="flex space-x-4 items-start mt-4">
                  <Image
                    src="/tick_icon.svg"
                    width={19}
                    height={19}
                    alt="Tick Icon"
                    className="mt-0.5"
                  />
                  <div className="text-[#5D5D75] font-bold text-base sm:text-lg lg:text-[18px]">
                    Top 50 - 1500+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end lg:items-end py-12 xl:py-0">
            <Image
              src={leadershipBoy}
              width={800}
              height={800}
              alt="Picture of the boy"
             className="max-w-full max-h-full lg:max-w-screen-xs pt-6 xl:pt-14"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipSuccess;
