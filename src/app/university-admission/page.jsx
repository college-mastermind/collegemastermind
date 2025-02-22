import LandingSectionNew from "@/components/Common/LandingSectionNew";
import HeadingtextCenter from "@/components/Common/HeadingTextCenter";
import SecretOfSucess from "@/components/UniversityAdmissionPage/SecretOfSuccess";
import AcceptanceBanner from "@/components/UniversityAdmissionPage/AcceptanceBanner";
import WhatToExpect from "@/components/UniversityAdmissionPage/WhatToExpect";
import OurServices from "@/components/UniversityAdmissionPage/OurServices";
import TestOptional from "@/components/UniversityAdmissionPage/TestOptional";
import TextBarBlueWaveBg from "@/components/Common/TextBarBlueWaveBg";

import LandingImage from "/public/graphics/studenst-together.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";

import { CtaLink } from "@/utils/Constants";

export const metadata = {
  title: "University Admission - College Mastermind",
  description: "",
};

const UniversityAdmissionPage = () => {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <LandingSectionNew
        backgroundImage={LandingImage}
        heading={"The plan you need to get into your top choices"}
        description={
          "Our researched-backed approach includes a customized plan aligned with your goals"
        }
        buttonText={"Book Your Free Consultation"}
        buttonLink={CtaLink}
      />
      <div className="mt-8 max-w-[90%] w-[1440px] mx-auto overflow-hidden">
        <div className="pt-10 pb-10 flex w-full">
          <h2
            className={`${textGradient} text-[40px] md:text-[48px] pb-4 font-bold text-center mx-auto leading-[42px] md:leading-[50px]`}
          >
            Everyone will think you “got lucky” when your acceptance pour in,
            but you&apos;ll know the truth!
          </h2>
        </div>
        <SecretOfSucess />
        <AcceptanceBanner />
        <WhatToExpect />
        <OurServices />
        <TestOptional />
        <TextBarBlueWaveBg
          text={"Speak with an Admissions Expert"}
          btnText={"BOOK YOUR FREE CONSULTATION"}
          btnLink={CtaLink}
        />
      </div>
    </div>
  );
};

export default UniversityAdmissionPage;
