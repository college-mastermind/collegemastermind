import Image from "next/image";

import BoyImage1 from "/public/graphics/boy-act-sat-trans-bg.png";
import Girlmage1 from "/public/graphics/girl-act-sat-trans-bg.png";
import GirlImage2 from "/public/graphics/girl-sat-prep-trans-bg.png";
import GirlImage3 from "/public/graphics/girl-test-anxiety-trans-bg.png";
import LogoDim from "/public/college-mastermind/logo-only-low-opacity.png";

import { textGradient, shadowMain } from "@/TailwindStyles/TailwindStyles";

const SingleCard = ({ image, text }) => {
  return (
    <div className="w-full sm:w-[50%] md:w-[25%] p-4 relative">
      <div
        className={`${shadowMain} bg-white relative rounded-xl h-full py-6 px-4 flex flex-col overflow-hidden`}
      >
        <Image
          src={image}
          alt=""
          className="h-[200px] object-contain mx-auto relative z-10"
        />
        <p className="mt-4 text-center text-xl px-2 relative z-10">{text}</p>

        <Image
          src={LogoDim}
          alt=""
          className="h-[200px] opacity-30 absolute z-0 top-0 right-[-130px] object-contain"
        />
      </div>
    </div>
  );
};

const TheScores = () => {
  return (
    <div className="flex flex-col py-10 mb-10">
      <h2
        className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold text-center`}
      >
        The Scores You Need
      </h2>
      <div className="flex flex-wrap mt-6">
        <div className="w-full sm:w-[50%] md:w-[25%] p-4 relative">
          <div
            className={`${shadowMain} bg-white relative rounded-xl h-full p-6 flex flex-col overflow-hidden`}
          >
            <h3 className="text-3xl font-semibold text-[#1B8AD6]">
              Top
              <br />
              30 University
            </h3>
            <p className="mt-4 text-lg px-2 relative z-10 font-medium">
              SAT Scores<span className="pl-8">1550+</span>
            </p>
            <p className="mt-2 text-lg px-2 relative z-10 font-medium">
              ACT Scores<span className="pl-8">35+</span>
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[50%] md:w-[25%] p-4 relative">
          <div
            className={`${shadowMain} bg-white relative rounded-xl h-full p-6 flex flex-col overflow-hidden`}
          >
            <h3 className="text-3xl font-semibold text-[#1BADD6]">
              Top
              <br />
              100 University
            </h3>
            <p className="mt-4 text-lg px-2 relative z-10 font-medium">
              SAT Scores<span className="pl-8">1450+</span>
            </p>
            <p className="mt-2 text-lg px-2 relative z-10 font-medium">
              ACT Scores<span className="pl-8">33+</span>
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[50%] md:w-[25%] p-4 relative">
          <div
            className={`${shadowMain} bg-white relative rounded-xl h-full p-6 flex flex-col overflow-hidden`}
          >
            <h3 className="text-3xl font-semibold text-[#1BD0D6]">
              Top
              <br />
              30 University
            </h3>
            <p className="mt-4 text-lg px-2 relative z-10 font-medium">
              SAT Scores<span className="pl-8">1400+</span>
            </p>
            <p className="mt-2 text-lg px-2 relative z-10 font-medium">
              ACT Scores<span className="pl-8">31+</span>
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[50%] md:w-[25%] p-4 relative">
          <div
            className={`${shadowMain} bg-white relative rounded-xl h-full p-6 flex flex-col overflow-hidden`}
          >
            <h3 className="text-3xl font-semibold text-[#1BD6A1]">
              Less
              <br />
              Selective
            </h3>
            <p className="mt-4 text-lg px-2 relative z-10 font-medium">
              SAT Scores<span className="pl-8">1280+</span>
            </p>
            <p className="mt-2 text-lg px-2 relative z-10 font-medium">
              ACT Scores<span className="pl-8">27+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheScores;
