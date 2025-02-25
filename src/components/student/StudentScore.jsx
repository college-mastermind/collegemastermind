import React from "react";
import Image from "next/image";

const LeadershipSuccess = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full xl:w-[1100px] flex flex-col items-center  justify-center xl:-mr-10 z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 py-12">
            <div className="max-w-[730px] lg:pb-5">
              <div className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-left text-[#5277FF] leading-tight pb-6 sm:pb-8 lg:pb-10">
                Over 90% of our
                <br />
                students score 1500+
              </div>
              <div className="text-lg sm:text-xl lg:text-[24px] font-normal text-justify text-[#3F3F3F] leading-relaxed">
                <span className="font-bold">
                  Let us show you how to get there!
                </span>{" "}
                A 1500+ doesn’t just look good, it opens doors at the most
                competitive colleges, even if your GPA isn’t perfect.
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
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                    <span className="font-bold ">
                    Ivy League
                    </span> - 
                    1570+
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
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  <span className="font-bold">
                    Top 20
                    </span> - 
                    1550+
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
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  <span className="font-bold ">
                    Top 30
                    </span> - 
                    1520+
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
                  <div className="text-[#5D5D75] font-normal text-base sm:text-lg lg:text-[18px]">
                  <span className="font-bold">
                    Top 50
                    </span> - 
                    1500+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[650px] flex items-center justify-center py-12 xl:py-0">
            <Image
              src="/leadership_boy.svg"
              width={800}
              height={800}
              alt="Picture of the boy"
              className="z-0 max-w-[90%] lg:min-h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipSuccess;
