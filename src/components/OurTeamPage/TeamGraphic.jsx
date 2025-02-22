import Image from "next/image";

import { textGradient } from "@/TailwindStyles/TailwindStyles";
import TeamGradphic from "/public/graphics/team-graphic.png";

const TeamGraphic = () => {
  return (
    <div className="py-10 w-full flex flex-col">
      <h2
        className={`${textGradient} w-full text-4xl md:text-[52px] pb-4 font-bold text-center mx-auto md:leading-[60px] lg:px-[10%]`}
      >
        Team of Admissions Experts
      </h2>
      <Image
        src={TeamGradphic}
        alt="team graphic"
        quality={100}
        className="w-full sm:w-[90%] mx-auto object-contain mt-8"
      />
    </div>
  );
};

export default TeamGraphic;
