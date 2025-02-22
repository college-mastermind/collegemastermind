import Image from "next/image";

import BoyImage1 from "/public/graphics/boy-tutoring.png";
import Girlmage1 from "/public/graphics/girl-executive-functioning.png";
import GirlImage2 from "/public/graphics/boy-accountability.png";
import GirlImage3 from "/public/graphics/girl-test-anxiety.png";
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

const AcademicResults = () => {
  return (
    <div className="flex flex-col pt-10">
      <h2
        className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold text-center`}
      >
        Better Results, Less Time and Stress
      </h2>
      <div className="flex flex-wrap mt-6">
        <SingleCard
          image={BoyImage1}
          text={
            "Get tutoring for your 5 core subjects any time that you need a little extra help"
          }
        />
        <SingleCard
          image={Girlmage1}
          text={
            "Become fast and strong at homework, studying, notes, and class room participation"
          }
        />
        <SingleCard
          image={GirlImage2}
          text={
            "An accountability coach help you with motivation and monitor the gradebook"
          }
        />
        <SingleCard
          image={GirlImage3}
          text={
            "Don't stress out or blank out on tests and quizzes! Let your real knowledge grow"
          }
        />
      </div>
    </div>
  );
};

export default AcademicResults;
