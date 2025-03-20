import Image from "next/image";
import Link from "next/link";

const TestPrepLanding = ({
  backgroundImage,
  heading,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="h-[97vh] w-full relative flex pt-16">
      <Image
        src={backgroundImage}
        alt=""
        priority
        quality={100}
        fill
        className="z-0 object-cover object-bottom"
      />
      <div className="absolute inset-0 landingSectionGradient z-10 md:w-[80%]"></div>
      <div className="max-w-[90%] w-[1280px] m-auto ">
        <div className="flex flex-col gap-6 w-full sm:w-[70%] md:w-[60%] relative z-20">
          <h1 className="mt-4 text-white font-bold text-4xl sm:text-6xl lg:text-[76px] text-left">
            {heading}
          </h1>
          <p className="text-white text-xl sm:text-2xl text-left md:pr-20">
            {description}
          </p>
          <Link
            href={buttonLink}
            target="_blank"
            className="mt-8 text-center max-w-fit bg-white rounded-lg shadow-lg text-blueSecondary py-2 px-4 sm:px-10 font-semibold text-lg sm:text-xl  ml-0 border border-white hover:bg-transparent hover:text-white transitions duration-200"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPrepLanding;
