import React from "react";
import Image from "next/image";
import zoom from "@/app/assets/zoom.png";
import check from "@/app/assets/check.jpg";

const AchieveGreat = () => {
  const ambassador = [
    "Demonstrate value the of a great offer to grow your sales skills",
    "Overcome obstacles to close a deal",
    "Learn the essential skill of following up",
    "Be a part of a successful team that will have a substantial monetary achievement to put on their resume",
  ];

  const everything = [
    "Training",
    "Scripts",
    "Support",
    "Fun",
    "Friends",
    "Purpose",
    "Passion",
    "Responsibility",
    "Consistency",
  ];

  return (
    <div
        className="sm:bg-gray-100  mt-10 md:mt-0 flex justify-center items-center sm:p-10 md:py-10 
    md:px-4 lg:p-16 xl:px-28"
    >
      <div
        className="mx-auto  rounded-md bg-white flex flex-col justify-center 
      items-center shadow-md sm:w-full sm:p-4 lg:p-12 max-w-screen-xl"
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
          className="flex flex-col p-3 md:flex-row justify-center
         gap-6 w-full mt-6 md:p-2 lg:px-10 md:gap-5 md:mt-12"
        >
          {/* left Cards Group */}
          <div className="flex flex-col items-center w-full md:w-4/6 space-y-3 lg:w-1/2 lg:space-y-5">
            <div className="flex gap-2 sm:gap-7 w-full h-fit  md:gap-5">
              {/* three boxes */}
              <div
                className="flex-col 
              justify-between text-center py-3 w-1/3 max-w-36 xl:w-52 xl:py-0"
              >
                <div
                  className=" bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white text-sm px-3 py-3 mb-5 
                rounded-xl font-semibold md:text-lg md:mb-6 xl:text-xl xl:px-4 xl:py-4"
                >
                  Win-Win
                </div>
                <div
                  className="bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white text-center rounded-xl mb-5 py-7
                 md:py-8 w-full md:mb-6 xl:py-10"
                >
                  <h1 className="text-2xl font-bold mb-1 md:text-4xl xl:text-5xl">
                    Earn
                  </h1>
                  <h4 className="text-sm md:text-lg xl:text-xl">Money</h4>
                </div>
                <div className="bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white text-center rounded-xl py-7 md:py-8 xl:py-10">
                  <h1 className="text-2xl font-bold md:text-4xl">Get</h1>
                  <h4 className="text-sm md:text-lg">Accepted</h4>
                </div>
              </div>

              {/* achievements */}
              <div
                className="border-2 border-[#447EF7] rounded-xl p-2
               w-2/3 max-w-[240px] relative sm:p-4 sm:max-w-full md:py-6  xl:px-6 md:w-full"
              >
                <h3
                  className=" bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text font-semibold mb-3 sm:text-xl
                 sm:mb-2 md:text-xl xl:mb-6"
                >
                  What Ambassadors Actually Do
                </h3>
                <div className="space-y-2">
                  {ambassador.map((text, index) => (
                    <div
                      key={index}
                      className="flex justify-left items-start gap-2"
                    >
                      <Image
                        src={check}
                        alt="Check-icon"
                        className="rounded-full w-3 h-3 mt-1 sm:mt-1.5 sm:w-4 sm:h-4"
                      />
                      <p className="text-sm text-gray-600 sm:text-lg md:text-base">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <h5 className="text-xs mt-3 font-semibold sm:text-sm sm:mt-2 xl:mt-6">
                  See your progress in real time, and follow a proven roadmap
                  for hitting 1500+ overall
                </h5>
              </div>
            </div>

            <div className=" w-full h-full">
              <h2
                className="text-lg my-auto  bg-gradient-to-r ring-2 ring-[#447EF7] shadow-sm shadow-[#447EF7] rounded-xl from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text  
            w-full p-3 h-full font-bold 
            text-center lg:text-xl xl:text-2xl justify-center md:pt-7 lg:pt-10 xl:pt-3"
              >
                Learn Skills that Successful Adults Use
              </h2>
            </div>
          </div>

          {/* right cards group */}
          <div className="w-full mt-2 md:w-2/5 space-y-3 sm:space-y-5 md:mt-0 lg:w-1/3 xl:space-y-3">
            <div className="border-2 border-[#447EF7] rounded-xl p-4 w-full relative sm:p-5 xl:py-5">
              <h3 className=" bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text text-lg font-semibold mb-2 sm:text-xl">
                Everything You Need to Succeed{" "}
              </h3>
              <div className="space-y-2">
                {everything.map((text, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Image
                      src={check}
                      alt="Check-icon"
                      className="rounded-full w-3 h-3 mt-0.5 sm:mt-1.5 sm:w-4 sm:-4 "
                    />
                    <p className="text-xs text-gray-600 sm:text-base">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-[#447EF7] to-[#243DBC] text-white flex items-start justify-left rounded-xl p-4 
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

export default AchieveGreat;
