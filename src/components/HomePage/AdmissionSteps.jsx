import Image from "next/image";

import { textGradient, shadowMain } from "@/TailwindStyles/TailwindStyles";
import GirlImage from "/public/graphics/girl-clockhouse.png";
import BoyImage from "/public/graphics/boy-act-sat-2.png";
import GirlBoyImage from "/public/graphics/girl-and-boy.png";

const AdmissionSteps = () => {
  return (
    <div className="my-16">
      <h2
        className={`${textGradient} text-center text-4xl md:text-5xl pb-2 md:px-[100px] lg:px-[170px] font-bold`}
      >
        Complete Support for Every Step of Your Admissions Journey
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 mt-8">
        <div className="w-full md:w-[33.33%] p-4">
          <div
            className={`${shadowMain} h-full bg-white rounded-xl px-4 pt-4 pb-8 flex flex-col gap-4`}
          >
            <Image
              src={GirlImage}
              alt="girl image"
              quality={100}
              className="w-full rounded-xl object-cover h-[300px]"
            />
            <h3 className="text-center text-[#4282F7] text-3xl font-semibold">
              College Admissions
            </h3>
            <p className="text-xl text-center ss:px-6 font-medium">
              A creative, clear, and simple strategy to get you accepted
            </p>
          </div>
        </div>
        <div className="w-full md:w-[33.33%] p-4">
          <div
            className={`${shadowMain} h-full bg-white rounded-xl px-4 pt-4 pb-8 flex flex-col gap-4`}
          >
            <Image
              src={BoyImage}
              alt="girl image"
              quality={100}
              className="w-full rounded-xl object-cover h-[300px]"
            />
            <h3 className="text-center text-[#4282F7] text-3xl font-semibold">
              Test Prep
            </h3>
            <p className="text-xl text-center ss:px-6 font-medium">
              Boost your child&apos;s chances of admission with great test
              scores
            </p>
          </div>
        </div>
        <div className="w-full md:w-[33.33%] p-4">
          <div
            className={`${shadowMain} bg-white rounded-xl h-full px-4 pt-4 pb-8 flex flex-col gap-4`}
          >
            <Image
              src={GirlBoyImage}
              alt="girl image"
              quality={100}
              className="w-full rounded-xl object-cover h-[320px]"
            />
            <h3 className="text-center text-[#4282F7] text-3xl font-semibold">
              Academic Support
            </h3>
            <p className="text-xl text-center ss:px-6 font-medium">
              Meet the academic requirements of top colleges with a strong GPA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSteps;
