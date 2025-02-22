import Image from "next/image";

import { HeadingMedium } from "@/TailwindStyles/TailwindStyles";
import CheckIcon from "/public/icons/check-icon.svg";

const InfoListWithImage = ({ image, heading, list }) => {
  return (
    <div className="pt-10  ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[35%] flex md:pr-10">
          <Image
            src={image}
            alt=""
            className="w-full sm:w-[50%] mx-auto md:w-full rounded-2xl object-contain"
          />
        </div>
        <div className="w-full md:w-[65%] flex flex-col mt-6 md:mt-0">
          <h2 className={`${HeadingMedium}`}>{heading}</h2>
          <div className="flex flex-col gap-2 mt-4">
            {list.map((item, i) => (
              <div key={i} className="flex flex-row gap-x-[12px] items-start">
                <Image
                  src={CheckIcon}
                  alt=""
                  className="w-[25px] min-w-[25px] object-contain"
                />
                <p
                  className="text-[#3A3A49]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoListWithImage;
