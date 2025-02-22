import Image from "next/image";
import StudentImage from "/public/graphics/students-success-circles.png";

const AcceptanceBanner = () => {
  return (
    <div className="py-16">
      <div
        className={`relative flex flex-col gap-10 py-8 sm:py-12 px-10 sm:px-20 rounded-3xl bg-gradient-to-r from-blueMain to-blueSecondary `}
      >
        <Image
          src={StudentImage}
          alt=""
          quality={100}
          className="object-contain w-full sm:w-[80%] mx-auto md:hidden"
        />
        <h3 className="text-4xl md:text-[40px] md:leading-[42px] font-semibold text-white w-full md:w-[70%] relative z-10 text-center md:text-left">
          More Acceptance with Less Stress and Effort? Seems Like Win-Win to Us!
        </h3>
        <Image
          src={StudentImage}
          alt=""
          quality={100}
          className="object-contain w-[270px] z-0 absolute top-[-45px] right-[40px] hidden md:block"
        />
      </div>
    </div>
  );
};

export default AcceptanceBanner;
