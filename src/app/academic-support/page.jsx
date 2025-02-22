import LandingSectionNew from "@/components/Common/LandingSectionNew";
import HeadingtextCenter from "@/components/Common/HeadingTextCenter";
import ImageHeadingTextText from "@/components/Common/ImageHeadingTextText";
import GradesHelpComponent from "@/components/AcademicSupportPage.jsx/GradesHelp";
import AcademicResults from "@/components/AcademicSupportPage.jsx/AcademicResults";
import TextBarBlueWaveBg from "@/components/Common/TextBarBlueWaveBg";

import { CtaLink } from "@/utils/Constants";
import ClassroomImage from "/public/graphics/classroom.png";
import BoyImage from "/public/graphics/boy-with-a-grade.png";

export const metadata = {
  title: "Academic Support - College Mastermind",
  description: "",
};

const AcademicSupportPage = () => {
  return (
    <div>
      <LandingSectionNew
        backgroundImage={ClassroomImage}
        heading={"Better Grades in Less Time"}
        description={
          "Become efficient at homework and studying to free up your time without sacrificing your GPA"
        }
        buttonLink={CtaLink}
        buttonText={"Book Your Free Consultation"}
      />

      <div className="mt-6 max-w-[90%] w-[1280px] mx-auto">
        <HeadingtextCenter text={"Stop Spending so Much Time Studying"} />
        <ImageHeadingTextText
          image={BoyImage}
          heading={"A High GPA is Still Needed to Get into Your Top Choices"}
          text1={
            "Even so, good universities are looking for more than just good grades!"
          }
          text2={
            "You need to learn how to become lean and efficient with homework and studying to make time for what will get you accepted."
          }
        />
        <GradesHelpComponent />
        <AcademicResults />
        <TextBarBlueWaveBg
          text={"Speak with an Academic Expert"}
          btnLink={CtaLink}
          btnText={"Book Your Free Consultation"}
        />
      </div>
    </div>
  );
};

export default AcademicSupportPage;
