import Image from "next/image";

import { textGradient, shadowMain } from "@/TailwindStyles/TailwindStyles";
import FileIcon from "/public/icons/file-blue.svg";
import ArrowIcon from "/public/icons/top-right-arrow.svg";
import PeopleIcon from "/public/icons/people.svg";

const ConfidenceSteps = () => {
  return (
    <div className="mt-20 mb-10 w-full">
      <h2
        className={`${textGradient} text-center text-4xl md:text-5xl pb-2 font-bold w-full`}
      >
        Confidence Every Step of the Way
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[33.33%] p-6">
          <div
            className={`h-full blueToLightGradient rounded-[12px] flex p-[3px] ${shadowMain}`}
          >
            <div className="rounded-[10px] w-full h-full bg-white px-6 pt-6 pb-10 flex flex-col gap-4">
              <Image
                src={FileIcon}
                alt="file"
                className="w-[60px] object-contain mx-auto md:mx-0"
              />
              <h3
                className={`text-4xl font-semibold text-center md:text-left ${textGradient}`}
              >
                Honest Advice
              </h3>
              <p className="text-lg text-center md:text-left font-medium">
                We give you the honest feedback and actionable steps you need to
                get accepted, not just what you want to hear.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[33.33%] p-6">
          <div
            className={`h-full blueToLightGradient rounded-[12px] flex p-[3px] ${shadowMain}`}
          >
            <div className="rounded-[10px] w-full h-full bg-white px-6 pt-6 pb-10 flex flex-col gap-4">
              <Image
                src={ArrowIcon}
                alt="arrow"
                className="w-[60px] object-contain mx-auto md:mx-0"
              />
              <h3
                className={`text-4xl font-semibold text-center md:text-left ${textGradient}`}
              >
                Clear Direction
              </h3>
              <p className="text-lg text-center md:text-left font-medium">
                Our custom plan reduces disagreements and keeps everyone moving
                in the same direction for smooth and continuous progress.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[33.33%] p-6">
          <div
            className={`h-full blueToLightGradient rounded-[12px] flex p-[3px] ${shadowMain}`}
          >
            <div className="rounded-[10px] w-full h-full bg-white px-6 pt-6 pb-10 flex flex-col gap-4">
              <Image
                src={PeopleIcon}
                alt="people"
                className="w-[60px] object-contain mx-auto md:mx-0"
              />
              <h3
                className={`text-4xl font-semibold text-center md:text-left ${textGradient}`}
              >
                Only a Few Clients Each Year
              </h3>
              <p className="text-lg text-center md:text-left font-medium">
                We work with a limited number of clients each year, ensuring
                your child receives constant attention and results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceSteps;
