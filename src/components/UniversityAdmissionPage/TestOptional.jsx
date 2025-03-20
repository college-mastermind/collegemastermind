import Image from "next/image";
import AcceptedImage from "/public/graphics/boy-accepted-2.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";

const TestOptional = () => {
  return (
    <div className="pt-10 flex flex-col sm:flex-row gap-10 md:gap-0 items-center">
      <div className="w-full md:w-[40%] flex">
        <Image
          src={AcceptedImage}
          alt={""}
          quality={100}
          className="w-full md:w-[90%] md:mr-auto "
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-2 text-center sm:text-left">
        <h2 className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold`}>
          A Strong Score Puts You Ahead of Students Going “Test Optional”
        </h2>

        <p className="text-xl sm:text-2xl font-medium text-textSecondary mt-4">
          100% of our high achievers got into one or more of their top 3 All of
          our students with a 3.9 unweighted GPA or higher got into at least one
          of their top 3 choices, and all got into a top 30 university!
        </p>
        <p className="text-xl sm:text-2xl font-medium text-textSecondary mt-2">
          96% of all of our clients got into one of their top choices over the
          past 2 years!
        </p>
      </div>
    </div>
  );
};

export default TestOptional;
