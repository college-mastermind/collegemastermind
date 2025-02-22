import TestPrepLanding from "@/components/TheChallengePage/TestPrepLanding";
import HeadingTextPointsImage from "@/components/Common/HeadingTextPointsImage";
import TestPrepPrograms from "@/components/TheChallengePage/TestPrepPrograms";
import ImageHeadingTextText from "@/components/Common/ImageHeadingTextText";
import PerfectScores from "@/components/TheChallengePage/PerfectScores";
import BoringScienceStuff from "@/components/TheChallengePage/BoringScienceStuff";
import TheScores from "@/components/TheChallengePage/Scores";
import HighScore from "@/components/TheChallengePage/Highscore";
import TextBarBlueWaveBg from "@/components/Common/TextBarBlueWaveBg";

import { CtaLink } from "@/utils/Constants";

import GirlRoomImage from "/public/graphics/girl-studying-room.png";
import GirlImage from "/public/graphics/happy-girl-1.png";
import BoyActSatImage from "/public/graphics/boy-act-sat.png";

const testPrepPoints = [
  "Memorable catch-phrases that stick",
  "Fun lessons to learn frequently tested key ideas",
  "No cramming, with simple lessons and assignments",
];

export const metadata = {
  title: "Test Challenge - College Mastermind",
  description: "",
};

const TestPrepPage = () => {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <TestPrepLanding
        backgroundImage={GirlRoomImage}
        heading={"Get Test Scores that Top Universities Expect"}
        description={
          "Don't settle for “good enough”, get the scores to meet the standard of your top choices"
        }
        buttonText={"Book Your Free Consultation"}
        buttonLink={CtaLink}
      />
      <div className="mt-6 max-w-[90%] w-[1280px] mx-auto">
        <HeadingTextPointsImage
          image={BoyActSatImage}
          heading={"Test Prep Made Easy"}
          text1={
            "Our curriculum cuts through the confusion, making even the most complex concepts easy to understand."
          }
          points={testPrepPoints}
        />
        <TestPrepPrograms />
        <ImageHeadingTextText
          image={GirlImage}
          heading={"100% of our Students' Scores Increase"}
          text1={
            "You might wonder if this will really work for your child, but our engaging and dynamic lessons captivate Every Student!"
          }
          text2={
            "We use the best techniques for boosting memory, retention, and understanding. The result? The scores increase every time."
          }
        />
        <PerfectScores />
        <BoringScienceStuff />
        <TheScores />
        <HighScore />
        <TextBarBlueWaveBg
          text={"Speak with a Test Prep Expert"}
          btnText={"Book Your Free Consultation"}
          btnLink={CtaLink}
        />
        <div className="-mb-10"></div>
      </div>
    </div>
  );
};

export default TestPrepPage;
