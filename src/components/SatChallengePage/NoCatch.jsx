import Image from "next/image";
import BoyImage from "/public/graphics/boy-goal.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";
import CheckIcon from "/public/icons/check-icon.svg";

const NoCatch = () => {
  return (
    <div className="py-10   flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[40%] flex">
        <Image
          src={BoyImage}
          alt=""
          className="w-full ss:w-[80%] mr-auto ml-auto md:ml-0"
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-2 mt-10 md:mt-0">
        <h2
          className={`${textGradient} text-4xl sm:text-5xl font-bold text-center md:text-left`}
        >
          No catch! This is a completely free opportunity.
        </h2>
        <p className="text-2xl font-semibold py-4">
          Our test prep programs were designed to get amazing results!
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl text-textSecondary font-medium">
              You will be asked to submit a brief video testimonial at the end
              of your journey and take a few surveys along the way.
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl text-textSecondary font-medium">
              You are asked to complete the entire process from start to finish,
              including all of the practice tests and homework assignments as
              part of your commitment to joining the group.
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl text-textSecondary font-medium">
              You can share your great results with others!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoCatch;
