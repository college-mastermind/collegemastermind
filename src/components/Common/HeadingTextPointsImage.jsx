import Image from "next/image";

import { textGradient } from "@/TailwindStyles/TailwindStyles";
import CheckTickIcon from "/public/icons/check-icon.svg";

const SingleListItem = ({ text }) => {
  return (
    <div className="flex flex-row gap-[12px]">
      <Image
        src={CheckTickIcon}
        alt=""
        className="h-5 w-5 mt-1 md:mt-0 md:w-[30px] md:h-[30px] object-contain rounded-full shadow-[0px_14px_34px_0px_#0208351a]"
      />
      <p className="text-lg md:text-2xl text-textSecondary">{text} </p>
    </div>
  );
};

const HeadingTextPointsImage = ({ image, heading, text1, points }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 md:gap-0 items-center my-10">
      <div className="w-full md:w-[60%] flex flex-col gap-2 text-center sm:text-left md:pr-10">
        <h2 className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold`}>
          {heading}
        </h2>
        <p className="text-xl md:text-[28px] font-semibold mt-4">{text1}</p>
        <div className="flex flex-col gap-2 mt-4">
          {points.map((point, i) => (
            <SingleListItem key={i} text={point} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-[40%] flex">
        <Image
          src={image}
          alt={heading}
          quality={100}
          className="w-full md:w-[95%] md:ml-auto "
        />
      </div>
    </div>
  );
};

export default HeadingTextPointsImage;
