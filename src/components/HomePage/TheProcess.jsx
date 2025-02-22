import Image from "next/image";
import Link from "next/link";

import { textGradient, shadowMain } from "@/TailwindStyles/TailwindStyles";
import { CtaLink } from "@/utils/Constants";
import TickBlueIcon from "/public/icons/tick-bluebg.svg";

const TheProcess = () => {
  return (
    <div
      className={`w-full my-20 rounded-2xl sm:bg-white py-10 px-8 flex flex-col sm:${shadowMain}`}
    >
      <h2
        className={`${textGradient} text-center text-4xl md:text-5xl pb-2 font-bold w-full`}
      >
        The Process
      </h2>
      <div className="sm:px-10 mt-6">
        <div className="pb-8 sm:border-l-[4px] sm:border-l-[#5083F721] sm:pl-20 relative">
          <h3 className="text-3xl font-semibold">
            1. Complimentary Intro Meeting
          </h3>
          <p className="mt-4 p-4 rounded-xl bg-white sm:bg-[#F0F9FE] text-lg sm:text-xl">
            It all starts with a deep analysis of your current profile. We use a
            series of internal rubrics that match the same criteria that your
            top choices will use to assess the likelihood of acceptance at your
            top choices.
          </p>
          <Image
            src={TickBlueIcon}
            alt="tick"
            className="w-[80px] object-contain absolute top-[-20px] left-[-42px] hidden sm:block"
          />
        </div>
        <div className="pb-8 sm:border-l-[4px] sm:border-l-[#5083F721] sm:pl-20 relative">
          <h3 className="text-3xl font-semibold">2. Plan and Strategize</h3>
          <p className="mt-4 p-4 rounded-xl bg-white sm:bg-[#F0F9FE] text-lg sm:text-xl">
            We collaborate with the whole family to set goals, which will result
            in a and a custom plan that is clear and simple to follow.
          </p>
          <Image
            src={TickBlueIcon}
            alt="tick"
            className="w-[80px] object-contain absolute top-[-20px] left-[-42px] hidden sm:block"
          />
        </div>
        <div className="pb-8 sm:pl-20 relative">
          <h3 className="text-3xl font-semibold">3. Implement and Apply</h3>
          <p className="mt-4 p-4 rounded-xl bg-white sm:bg-[#F0F9FE] text-lg sm:text-xl">
            This is where the plan comes to life, guiding you step-by-step to
            craft applications that get you into your top schools—making the
            process simple and clear every step of the way.
          </p>
          <Image
            src={TickBlueIcon}
            alt="tick"
            className="w-[80px] object-contain absolute top-[-20px] left-[-38px] hidden sm:block"
          />
        </div>
      </div>
      <Link
        href={CtaLink}
        target="_blank"
        className={`text-lg mt-8 py-[12px] px-8 text-center mx-auto rounded-lg bg-gradient-to-r from-blueSecondary to-blueMain text-white hover:text-blueSecondary border border-white hover:border-blueSecondary hover:from-white hover:to-white transitions duration-200`}
      >
        BOOK YOUR FREE CONSULTATION
      </Link>
    </div>
  );
};

export default TheProcess;
