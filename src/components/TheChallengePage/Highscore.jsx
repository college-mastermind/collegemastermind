import Image from "next/image";
import GirlHighScoreImage from "/public/graphics/girl-higscore.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";

const HighScore = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 md:gap-0 items-center">
      <div className="w-full md:w-[40%] flex">
        <Image
          src={GirlHighScoreImage}
          alt={""}
          quality={100}
          className="w-full md:w-[90%] md:mr-auto "
        />
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-2 text-center sm:text-left">
        <h2
          className={`${textGradient} text-4xl md:text-[42px] md:leading-[42px] pb-2 font-bold`}
        >
          A Strong Score Puts You Ahead of Students Going “Test Optional”
        </h2>
        <p className="text-2xl sm:text-[28px] font-medium mt-4">
          Did you notice that many of the top universities are making tests
          required again?
        </p>
        <p className="text-xl sm:text-2xl mt-4">We did too! </p>
        <p className="text-xl sm:text-2xl text-textSecondary">
          Top universities are looking for the <b>“complete package”</b>, so
          never miss out on a chance to submit a strong component that will help
          you have an advantage over other applicants!{" "}
        </p>
      </div>
    </div>
  );
};

export default HighScore;
