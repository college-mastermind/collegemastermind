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

const TestPrepPrograms = () => {
  return (
    <div className="flex flex-col py-10 mb-10">
      <h2
        className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold text-center`}
      >
        Our Test Prep Programs
      </h2>
      <div className="flex flex-wrap mt-6">
        <SingleCard
          image={BoyImage1}
          text={
            "Get test scores in the top 5%, even if your score is starting on the lower-side"
          }
        />
        <SingleCard
          image={Girlmage1}
          text={
            "Get test scores in the top 1%, with starting scores of 1400+ for SAT or 31+ ACT"
          }
        />
        <SingleCard
          image={GirlImage2}
          text={
            "Qualify for National Merit Scholar with PSAT scores that cause academic recruitment"
          }
        />
        <SingleCard
          image={GirlImage3}
          text={
            "Don't let nerves drag down scores, with coaching that will get to the root of the stress"
          }
        />
      </div>
    </div>
  );
};

export default TestPrepPrograms;
