import Image from "next/image";

import LogoDim from "/public/college-mastermind/logo-only-low-opacity.png";
import { textGradient } from "@/TailwindStyles/TailwindStyles";
import { TeamInfo } from "@/utils/TeamInfo";

const SingleCard = ({ index, title, description, videoUrl }) => {
  return (
    <div
      className={`bg-white shadow-[0px_4px_16px_0px_#1B2F8F3D] p-6 ss:p-10 rounded-2xl relative flex items-center gap-8 sm:gap-16 overflow-hidden ${
        index % 2 === 0
          ? "flex-col-reverse sm:flex-row"
          : "flex-col-reverse sm:flex-row-reverse"
      }`}
    >
      <div className="w-full relative z-10">
        <h3
          className={`${textGradient} w-full text-3xl sm:text-[40px] font-bold text-center sm:text-left pb-4`}
        >
          {title}
        </h3>
        <p className="text-xl sm:text-2xl font-medium text-center sm:text-left mt-4 sm:mt-0">
          {description}
        </p>
      </div>
      <div className="w-full relative z-10">
        {videoUrl ? (
          <video
            controls
            className="w-full rounded-xl border-[2px] border-blueSecondary"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/Y-x0efG1seA?si=JvSqzAFFHJhG8X9R&modestbranding=1&showinfo=0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[300px] rounded-xl border-[2px] border-blueSecondary"
          ></iframe>
        )}
      </div>

      <Image
        src={LogoDim}
        alt=""
        className={`absolute z-0 bottom-2 md:top-2 h-[320px] object-contain opacity-20 ${
          index % 2 === 0
            ? "left-[-150px] ss:left-[-250px]"
            : "right-[-150px] ss:right-[-250px]"
        }`}
      />
    </div>
  );
};

const TeamIntros = () => {
  return (
    <div className="w-full py-10">
      <h2
        className={`${textGradient} w-full text-4xl md:text-[52px] pb-4 font-bold text-center mx-auto md:leading-[60px] lg:px-[10%]`}
      >
        Who Will You Work With?
      </h2>
      <div className="flex flex-col gap-8 mt-4">
        {TeamInfo.map((data, i) => (
          <SingleCard
            key={i}
            index={i}
            title={data.title}
            description={data.description}
            videoUrl={data.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamIntros;
