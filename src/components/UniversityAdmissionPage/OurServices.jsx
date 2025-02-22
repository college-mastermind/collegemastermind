import Image from "next/image";

import {
  textGradient,
  shadowMain,
  blueGradient,
} from "@/TailwindStyles/TailwindStyles";
import { GoalsFromServices } from "@/utils/GoalsfromServices";
import LogoDim from "/public/college-mastermind/logo-only-low-opacity.png";

const SingleGoal = ({ index, goal }) => {
  return (
    <div className="w-full sm:w-[50%] lg:w-[33.33%] p-6 relative">
      <div
        className={`${shadowMain} h-full rounded-xl bg-white p-4 py-8 flex flex-col overflow-hidden relative`}
      >
        <Image
          src={goal.image}
          width={200}
          height={350}
          alt=""
          quality={100}
          className="w-full object-contain h-[250px] mx-auto relative z-10"
        />
        <h3
          className={`${textGradient} text-[26px] mt-4 font-bold text-center w-full relative z-10`}
        >
          {goal.title}
        </h3>
        <p className="text-lg text-center mt-6 px-2 sm:px-6 text-textSecondary relative z-10">
          {goal.description}
        </p>
        <Image
          src={LogoDim}
          alt=""
          className="absolute top-4 right-[-50px] object-contain w-[270px] z-0 opacity-20"
        />
      </div>
      <div
        className={`w-[40px] h-[40px] rounded-full flex absolute top-[3px] right-[45%] z-20 ${blueGradient}`}
      >
        <p className="m-auto text-white text-xl font-medium">{index}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className="py-10">
      <h2
        className={`${textGradient} text-center text-4xl md:text-5xl pb-2 font-bold w-full`}
      >
        Our Services
      </h2>
      <p className="text-center text-2xl font-medium mt-4 lg:px-[15%]">
        Our personalized admissions packages are specifically designed to
        address gaps and weaknesses in your child&apos;s application, helping
        you reach your admission goals.
      </p>
      <div className="flex flex-wrap mt-6">
        {GoalsFromServices.map((goal, i) => (
          <SingleGoal goal={goal} key={i} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
