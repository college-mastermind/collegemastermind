import TextBarBlueWaveBg from "@/components/Common/TextBarBlueWaveBg";
import ClientExperiences from "@/components/HomePage/ClientExperiences";
import LandingSectionNew from "@/components/Common/LandingSectionNew";
import HeadingtextCenter from "@/components/Common/HeadingTextCenter";
import ImageHeadingTextText from "@/components/Common/ImageHeadingTextText";
import HeadingTextPointsImage from "@/components/Common/HeadingTextPointsImage";
import AdmissionSteps from "@/components/HomePage/AdmissionSteps";
import ConfidenceSteps from "@/components/HomePage/ConfidenceSteps";
import TheProcess from "@/components/HomePage/TheProcess";
import LandingImage from "/public/graphics/homepage-landing.png";
import GirlTensionImage from "/public/graphics/girl-tension.png";
import GirlWithChecklistImage from "/public/graphics/girl-checklist.png";
import { PredictableResultsList } from "@/utils/PredictableResults";
import { CtaLink } from "@/utils/Constants";

export const metadata = {
  title: "College Mastermind",
  description: "",
};

export default function Home() {
  return (
    <main className="bg-[#f0f9fe] overflow-hidden flex flex-col relative">
      <LandingSectionNew
        backgroundImage={LandingImage}
        heading={"Your Dream College Awaits"}
        description={
          "A clear college admissions strategy will turn your goals into reality."
        }
        buttonLink={CtaLink}
        buttonText={"Book Your Free Consultation"}
      />
      <div className="mt-6 max-w-[90%] w-[1280px] mx-auto">
        <HeadingtextCenter
          text={"The “old method” of college admissions doesn't work today!"}
        />
        <ImageHeadingTextText
          image={GirlTensionImage}
          heading={"Don't use an outdated model"}
          text1={
            "You love your child, and you want them to get into the best school possible, but knowing what steps to take to actually get that result can be confusing."
          }
          text2={
            "Good grades, high test scores, strong extracurriculars, and a good essay used to get students accepted. Today, these aren't enough to get most students into their top choices, especially not at top universities."
          }
        />
        <HeadingTextPointsImage
          image={GirlWithChecklistImage}
          heading={"Predictable Results "}
          text1={
            "We combine research and creativity to get you accepted. No surprises, just predictable results every time!"
          }
          points={PredictableResultsList}
        />
        <AdmissionSteps />
        <TextBarBlueWaveBg
          text={
            "This college admissions approach will send your acceptances through the roof!"
          }
        />
        <ConfidenceSteps />
        <TheProcess />
        <ClientExperiences />
        <TextBarBlueWaveBg
          text={"Speak with an Admissions Expert"}
          btnLink={CtaLink}
          btnText={"Book Your Free Consultation"}
        />
      </div>
    </main>
  );
}
