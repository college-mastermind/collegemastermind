import React from "react";
import Image from "next/image";
import zoom from "@/app/assets/zoom.png";
import check from "@/app/assets/check.jpg";

const SolidPlan = () => {
  const ambassador = [
    "Diagnostic Test",
    "Session 1 - Basic Commas",
    "Session 2 - Advanced Commas",
    "Session 3 - Advanced Punctuation",
    "Session 4 - Integration and Evaluation",
    "Session 5 - Punctuation Mastery",
  ];

  const everything = [
    "All tests and homework will be provided through a personalized platform",
    "Get instant feedback with automated forms for both homework and tests",
    "Specialized tutors work 1-1 using proven methodologies developed exclusively by College Mastermind",
  ];

  return (
    <div
      className="sm:bg-gray-100  mt-10 md:mt-0 flex justify-center items-center sm:p-10 md:py-10 
    md:px-4 lg:p-12 xl:px-24"
    >
      <div
        className="mx-auto  rounded-md bg-white flex flex-col justify-center 
      items-center shadow-md sm:w-full sm:p-4 lg:p-12"
      >
        {/* Main Heading */}
        <div>
          <h1
            className="text-2xl tracking-tight md:text-3xl md:tracking-normal px-3 
          font-bold  bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text lg:text-4xl"
          >
            To Achieve Anything Great,
          </h1>
          <h1
            className="text-2xl tracking-tight md:text-3xl md:tracking-normal pl-10 
          font-bold  bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text lg:text-4xl"
          >
            You Need a Solid Team!
          </h1>
        </div>

        {/* Cards */}
        <div
          className="flex flex-col max-w-[400px] sm:max-w-full p-4 md:flex-row justify-center
         gap-6 w-full mt-6 md:p-2 lg:px-5 md:gap-5 md:mt-12 lg:gap-3 xl:justify-evenly "
        >
          {/* left Cards Group */}
          <div className="flex flex-col items-center w-full md:w-4/6 space-y-3 lg:w-2/3 lg:space-y-5">
            <div className="flex gap-2 sm:justify-evenly w-full h-fit  md:gap-5 lg:gap-3">

              {/* two boxes */}
              <div
                className="flex-col 
              justify-between text-center py-0 w-1/3 max-w-36 xl:w-52 xl:py-0"
              >
                <div
                  className="bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white text-center rounded-lg mb-5 py-7
                 md:py-8 w-full md:mb-6 xl:py-10"
                >
                  <h1 className="text-4xl font-bold mb-1 md:text-4xl xl:text-5xl">
                    5
                  </h1>
                  <h4 className="text-base md:text-lg xl:text-xl">SAT <br />Sessions</h4>
                </div>
                <div className="bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white text-center rounded-lg py-7 md:py-8 xl:py-10">
                  <h1 className="text-2xl font-bold md:text-4xl">100%</h1>
                  <h4 className="text-base md:text-lg">Free</h4>
                </div>
              </div>

              {/* achievements */}
              <div
                className="border-2 border-[#447EF7] rounded-lg p-2
               w-2/3 max-w-[240px] relative sm:p-4 sm:max-w-full md:py-6  xl:px-6 xl:w-full"
              >
                <h3
                  className=" bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text font-semibold mb-1.5 sm:text-xl
                 sm:mb-2 md:text-xl xl:mb-6 xl:text-2xl"
                >
                  What You’ll Get
                </h3>
                <div className="space-y-2 sm:my-3 md:my-4">
                  {ambassador.map((text, index) => (
                    <div
                      key={index}
                      className="flex justify-left items-start gap-1"
                    >
                      <Image
                        src={check}
                        alt="Check-icon"
                        className="rounded-full w-3 h-3 mt-0.5 sm:mt-1 sm:w-4 sm:h-4 md:mt-1 md:w-3 md:h-3 xl:w-4 xl:h-4 xl:mt-1.5"
                      />
                      <p className="text-xs text-gray-600 sm:text-base md:text-base xl:text-lg">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <h5 className="text-xs mt-1.5 font-semibold sm:text-sm sm:mt-2 xl:mt-6 xl:text-lg">
                  See your progress in real time, and follow our roadmap for
                  hitting 1500+ on the SAT
                </h5>
              </div>
            </div>

            <h2
              className="text-lg shadow-sm shadow-[#447EF7]  bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text ring-2 
            w-full p-3 rounded-md  ring-[#447EF7] font-semibold 
            sm:text-center xl:text-2xl"
            >
              <span className="font-bold text-[#243DBC]">Before</span> & <span className="font-bold text-[#243DBC]">After</span> tests for results you can see!
            </h2>
          </div>

          {/* right cards group */}
          <div className="w-full mt-2 md:w-2/5 space-y-3 md:mt-0 lg:w-1/3 xl:space-y-3">
            <div className="border-2 border-[#447EF7] rounded-lg p-4 w-full relative xl:py-5">
              <h3 className=" bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text text-lg font-semibold mb-2 sm:text-xl">
                Everything You Need to Succeed{" "}
              </h3>
              <div className="space-y-2 xl:space-y-4 xl:my-5">
                {everything.map((text, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Image
                      src={check}
                      alt="Check-icon"
                      className="rounded-full w-3 h-3 mt-0.5 sm:mt-1.5 sm:w-4 sm:-4 lg:w-3 lg:h-3 lg:mt-1 xl:w-4 xl:h-4 xl:mt-1.5 "
                    />
                    <p className="text-xs text-gray-600 sm:text-base lg:text-sm xl:text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white flex items-start justify-left rounded-lg p-4 
            gap-3 sm:p-5 md:flex-col md:gap-2 xl:py-5"
            >
              <Image
                src={zoom}
                alt="Zoom-Icon"
                className="rounded-full w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10  xl:w-12 xl:h-12"
              />
              <h3 className="text-lg font-semibold sm:text-xl md:text-lg xl:text-xl">
                Trainings held on Zoom
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolidPlan;
