import Image from "next/image";
import StarImage from "/public/icons/flying-star.png";
import { shadowMain, textGradient } from "@/TailwindStyles/TailwindStyles";

const TextDoubleStar = ({ text }) => {
  return (
    <div className="flex py-10">
      <div
        className={`mx-auto rounded-xl ${shadowMain} py-10 w-full flex relative bg-white`}
      >
        <Image
          src={StarImage}
          alt=""
          quality={100}
          className="w-[100px] sm:w-[150px] md:w-[220px] absolute bottom-0 left-0 z-0"
        />
        <h2
          className={`${textGradient} py-6 px-6 sm:px-20 md:px-[200px] lg:px-[290px] text-4xl sm:text-5xl font-bold text-center mx-auto relative z-10`}
        >
          {text}
        </h2>
        <Image
          src={StarImage}
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[220px] absolute bottom-0 right-0 transform -scale-x-100 z-0"
        />
      </div>
    </div>
  );
};

export default TextDoubleStar;
