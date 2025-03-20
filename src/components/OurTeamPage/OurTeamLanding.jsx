import Image from "next/image";
import Link from "next/link";

import { CtaLink } from "@/utils/Constants";
import LandingImage from "/public/graphics/our-team.png";

const OurTeamLandingSection = () => {
  return (
    <div className="h-[95vh] w-full relative flex pt-16 md:pt-10">
      <Image
        src={LandingImage}
        alt=""
        priority
        quality={100}
        fill
        className="z-0 object-cover object-top"
      />
      <div className="absolute inset-0 landingSectionGradient z-10 sm:w-[80%]"></div>
      <div className="max-w-[90%] w-[1280px] m-auto">
        <div className="flex flex-col gap-6 w-full sm:w-[60%] relative z-20">
          <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-[80px] text-center sm:text-left sm:mt-16">
            Don&apos;t Do Admissions Alone!
          </h1>
          <p className="text-white text-xl md:text-2xl text-center sm:text-left">
            We&apos;re experts in working with teens <br />
            (and getting them to get things done)
          </p>
          <Link
            href={CtaLink}
            target="_blank"
            className="mt-10 text-center bg-white rounded-lg shadow-lg text-blueSecondary py-2 px-4 sm:px-10 font-semibold text-base sm:text-xl md:text-2xl mr-auto ml-auto sm:ml-0 border border-white hover:bg-transparent hover:text-white transitions duration-200"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeamLandingSection;
