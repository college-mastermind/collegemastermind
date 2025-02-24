import OurTeamLandingSection from "@/components/OurTeamPage/OurTeamLanding";
import TeamGraphic from "@/components/OurTeamPage/TeamGraphic";
import TextBarBlueWaveBg from "@/components/Common/TextBarBlueWaveBg";
import TeamIntros from "@/components/OurTeamPage/TeamIntros";

import { CtaLink } from "@/utils/Constants";

export const metadata = {
  title: "Our Team - College Mastermind",
  description: "",
};

const OurTeamPage = () => {
  return (
    <div>
      <OurTeamLandingSection />
      <div className="mt-6 max-w-[90%] w-[1280px] mx-auto">
        <TeamGraphic />
        <TeamIntros />
        <TextBarBlueWaveBg
          text={"It takes a village to get through admissions"}
          btnLink={CtaLink}
          btnText={"Book Your Free Consultations"}
        />
      </div>
    </div>
  );
};

export default OurTeamPage;
