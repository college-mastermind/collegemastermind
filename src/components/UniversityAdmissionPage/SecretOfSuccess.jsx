import Image from "next/image";

import { textGradient } from "@/TailwindStyles/TailwindStyles";
import GirlsTalkingImage from "/public/graphics/girls-tailking.png";

const SecretOfSucess = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 md:gap-0 items-center">
      <div className="w-full md:w-[40%] flex">
        <Image
          src={GirlsTalkingImage}
          alt={""}
          quality={100}
          className="w-full md:w-[90%] md:mr-auto "
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-2 text-center sm:text-left">
        <h2 className={`${textGradient} text-3xl md:text-5xl pb-2 font-bold`}>
          The secret of success that no one wants to hear
        </h2>
        <p className="text-2xl sm:text-[28px] font-medium mt-4">
          Planning beats luck every time!
        </p>
        <p className="text-xl md:text-2xl text-textSecondary mt-4">
          No need to paste together a make-shift plan from the random advice of
          Facebook strangers or YouTube videos. A clean and solid plan will save
          will save you time, efforts and energy. It usually gets better results
          too!.
        </p>
        <p className="text-xl md:text-2xl text-textSecondary mt-2">
          People want to skip straight to the results AKA “the good stuff”, but
          all success was born out of strategy, planning, and a series or right
          decisions that ultimately created a positive outcome.
        </p>
      </div>
    </div>
  );
};

export default SecretOfSucess;
