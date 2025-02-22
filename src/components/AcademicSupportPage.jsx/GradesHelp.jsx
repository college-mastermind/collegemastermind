import Image from "next/image";

import { GradesHelp } from "@/utils/GradesHelp";
import { textGradient } from "@/TailwindStyles/TailwindStyles";
import CheckTickIcon from "/public/icons/check-tick.svg";
import GirlImage from "/public/graphics/girl-with-grades.png";

const SingleListItem = ({ text }) => {
  return (
    <div className="flex flex-row gap-[12px]">
      <Image
        src={CheckTickIcon}
        alt=""
        className="w-[30px] h-[30px] object-contain rounded-full shadow-[0px_14px_34px_0px_#0208351a]"
      />
      <p className="text-2xl text-textSecondary">{text} </p>
    </div>
  );
};

const GradesHelpComponent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center my-10">
      <div className="w-full md:w-[60%] flex flex-col text-center md:text-left md:pr-10">
        <h2 className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold`}>
          Don&apos;t Worry About Grades
        </h2>
        <p className="text-[26px] mt-2">
          By sophomore year, grades should be the last thing on your mind! Our
          program strategically eliminates all academic weaknesses through
          tutoring and our special student efficiency series.
        </p>
        <div className="flex flex-col gap-2 mt-6">
          {GradesHelp.map((point, i) => (
            <SingleListItem key={i} text={point} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-[40%] flex">
        <Image
          src={GirlImage}
          alt={"girl with grades"}
          quality={100}
          className="w-full md:w-[95%] md:ml-auto "
        />
      </div>
    </div>
  );
};

export default GradesHelpComponent;
