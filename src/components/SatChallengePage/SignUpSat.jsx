import { textGradient, shadowMain } from "@/TailwindStyles/TailwindStyles";
import Image from "next/image";

import CheckIcon from "/public/icons/check-icon.svg";
import LogoLowOpacity from "/public/college-mastermind/logo-only-low-opacity.png";

const SignUpSat = () => {
  return (
    <div className="py-10 flex flex-col relative overflow-hidden">
      <h2
        className={`${textGradient} text-4xl md:text-5xl font-bold text-center pb-2`}
      >
        Sign up for our free <br />
        SAT challenge
      </h2>
      <div
        className={`mt-4 bg-white ${shadowMain} rounded-xl bg-white p-6 mx-[5%] sm:mx-[10%] md:mx-[20%] relative z-10`}
      >
        <div className="flex flex-col gap-4 ss:p-6">
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              A diagnostic test to gauge your starting point
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              A free score analysis where you can talk to a live test prep
              expert to set goals for the challenge
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              Access to our expert tutors and coaches throughout the entire
              challenge
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              Take your learning to the next level with video solutions to boost
              understanding
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              Experience stress-reduction techniques to reduce testing nerves
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              Get confident and comfortable with the testing format and
              conditions with weekly proctored exams
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              Watch your scores increase with automated score results.
            </p>
          </div>
          <div className="flex flex-row gap-x-[12px] items-start">
            <Image
              src={CheckIcon}
              alt=""
              className="w-[30px] min-w-[30px] object-contain"
            />
            <p className=" text-xl">
              Join the 86% of our students who have scored in the top 5% of all
              SAT scorers in the nation!
            </p>
          </div>
        </div>
      </div>
      <Image
        src={LogoLowOpacity}
        alt=""
        className="absolute -right-48 top-10 w-[450px] opacity-30 z-0"
      />
    </div>
  );
};

export default SignUpSat;
