import Link from "next/link";
import Image from "next/image";

import BoyImage from "/public/graphics/boy-thingking-college.png";
import { HeadingMedium, generalButton } from "@/TailwindStyles/TailwindStyles";

const TextButtonImageComponent = ({
  heading,
  description,
  btnText,
  btnLink,
  image,
}) => {
  return (
    <div className="py-10   flex flex-col-reverse sm:flex-row items-center">
      <div className="w-full sm:w-[60%] flex flex-col mt-10 sm:mt-0">
        <h2 className={`${HeadingMedium} text-center sm:text-left`}>
          {heading}
        </h2>
        <p className="text-lg text-blueYonder mt-4 mb-6 text-center sm:text-left">
          {description}
        </p>
        <Link href={btnLink} className={`${generalButton}`}>
          {btnText}
        </Link>
      </div>
      <div className="w-full sm:w-[40%] flex">
        <Image
          src={image ? image : BoyImage}
          alt="thingking about the best college for you"
          className="w-full ss:w-[80%] mr-auto sm:mr-0 ml-auto object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default TextButtonImageComponent;
