import Image from "next/image";

import { textGradient } from "@/TailwindStyles/TailwindStyles";

const ImageHeadingTextText = ({ image, heading, text1, text2 }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 md:gap-0 items-center">
      <div className="w-full md:w-[40%] flex">
        <Image
          src={image}
          alt={heading}
          quality={100}
          className="w-full md:w-[95%] md:mr-auto "
        />
      </div>
      <div className="md:pl-6 w-full md:w-[60%] flex flex-col gap-2 text-center sm:text-left">
        <h2 className={`${textGradient} text-4xl md:text-5xl pb-2 font-bold`}>
          {heading}
        </h2>
        <p className="text-xl sm:text-[28px] font-medium mt-3 tracking-wide">{text1}</p>
        <p
          className="text-lg sm:text-2xl text-textSecondary mt-2"
          dangerouslySetInnerHTML={{ __html: text2 }}
        ></p>
      </div>
    </div>
  );
};

export default ImageHeadingTextText;
