import { textGradient } from "@/TailwindStyles/TailwindStyles";
import Image from "next/image";
import GirlTimeImage from "/public/graphics/girl-time.png";

const TheSchedule = () => {
  return (
    <div className="my-10   flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-[50%] flex flex-col mt-10 md:mt-0">
        <h2
          className={`${textGradient} text-4xl md:text-5xl font-bold text-center md:text-left`}
        >
          The Schedule
        </h2>
        <p className="my-4  font-semibold text-3xl text-center md:text-left">
          Please check the flyer sent to you for your school&apos;s dates.
        </p>
        <p className="text-xl text-center md:text-left">
          Every challenge has a live proctored diagnostic test so your child can
          see their starting score, and weekly exams every Saturday during the
          challenge
        </p>
        <div className="my-4 py-2 px-8 bg-white text-xl rounded-lg border border-blueSecondary text-blueSecondary text-center font-medium mr-auto ml-auto md:ml-0">
          Saturday Exams : 10:00am EST
        </div>
        <p className="text-xl font-bold text-center md:text-left">
          Live Virtual Class
        </p>
        <p className="text-xl text-center md:text-left">
          Link Provided Upon Registration
        </p>
      </div>
      <div className="w-full md:w-[50%] flex">
        <Image
          src={GirlTimeImage}
          alt=""
          quality={100}
          className="w-full xs:w-[80%] ml-auto mr-auto md:mr-0"
        />
      </div>
    </div>
  );
};

export default TheSchedule;
