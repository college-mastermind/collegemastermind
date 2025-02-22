import Image from "next/image";
import ScienceImage from "/public/graphics/science-stuff.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";

const BoringScienceStuff = () => {
  return (
    <div className="py-10 flex flex-col-reverse md:flex-row gap-10 md:gap-0 items-center">
      <div className="w-full md:w-[50%] flex flex-col gap-2 text-center md:text-left">
        <h2
          className={`${textGradient} text-4xl md:text-[44px] md:leading-[50px] pb-2 font-bold`}
        >
          Boring Science Stuff
          <br /> (But Not Really!)
        </h2>
        <p className="text-2xl sm:text-[28px] font-medium mt-4">
          Learning complex concepts is all about building neural connections
          (aka linking new ideas to things you already know).
        </p>
        <p className="mt-2 text-xl sm:text-2xl text-textSecondary">
          Our tutors are trained experts in our unique teaching approach, using
          questions to help your child connect the dots and make learning stick.
        </p>
      </div>
      <div className="w-full md:w-[50%] flex">
        <Image
          src={ScienceImage}
          alt={""}
          quality={100}
          className="w-full md:w-[90%] md:ml-auto "
        />
      </div>
    </div>
  );
};

export default BoringScienceStuff;
