import SatChallengeLandingSection from "@/components/SatChallengePage/SatChallenegeLandingSection";
import HeadingtextCenter from "@/components/Common/HeadingTextCenter";
import ProvenResults from "@/components/SatChallengePage/ProvenResults";
import TextDoubleStar from "@/components/Common/TextDoubleStar";
import TextBarBlueWaveBg from "@/components/Common/TextBarBlueWaveBg";
import TheSchedule from "@/components/SatChallengePage/TheSchedule";
import FactorsList from "@/components/SatChallengePage/FactorsList";
import SignUpSat from "@/components/SatChallengePage/SignUpSat";
import NoCatch from "@/components/SatChallengePage/NoCatch";
import HeadingTextPointsImage from "@/components/Common/HeadingTextPointsImage";

import StudentImage from "/public/graphics/students-infront-board.png";
import TestPrepImage from "/public/graphics/test-prep.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";

const testPrepPoints = [
  "Memorable catch-phrases that stick",
  "Fun lessons to learn frequently tested key ideas",
  "No cramming, with simple lessons and assignments",
];

export const metadata = {
  title: "SAT Challenge - College Mastermind",
  description: "",
};

const SatChallengePage = () => {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <SatChallengeLandingSection
        backgroundImage={StudentImage}
        heading={"Raise Your SAT Scores for Free!"}
        description={"Register to Participate"}
        buttonText={"Register Now"}
        buttonLink={"/registration"}
      />
      <div className="mt-6 max-w-[90%] w-[1280px] mx-auto">
        <div className="pt-10 pb-6 flex w-full">
          <h2
            className={`${textGradient} text-[40px] md:text-[52px] pb-4 font-bold text-center mx-auto leading-[42px] md:leading-[60px] md:px-[10%] lg:px-[20%]`}
          >
            The scores you need to get into your top choice!
          </h2>
        </div>
        <HeadingTextPointsImage
          image={TestPrepImage}
          heading={"Test Prep Made Easy"}
          text1={
            "Our curriculum cuts through the confusion, making even the most complex concepts easy to understand."
          }
          points={testPrepPoints}
        />
        <ProvenResults />
        <TextDoubleStar
          text={"All Lessons and Materials Are for the Digital Format"}
        />
        <TheSchedule />
        <FactorsList />
      </div>
      <SignUpSat />
      <div className="mt-10 max-w-[90%] w-[1440px] mx-auto">
        <TextBarBlueWaveBg
          text={"Register Now!"}
          btnText={"CLICK HERE TO REGISTER"}
          btnLink={"/registration"}
        />
        <NoCatch />
      </div>
    </div>
  );
};

export default SatChallengePage;
