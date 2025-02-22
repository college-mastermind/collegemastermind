import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "/public/design/background-wave-bar-3.png";

const TextBarBlueWaveBg = ({ text, btnText, btnLink }) => {
  return (
    <div className="flex w-full my-20">
      <div className="rounded-3xl py-16 px-4 sm:px-10 relative flex flex-col w-full">
        <Image
          src={BackgroundImage}
          alt=""
          fill
          quality={100}
          className="z-0 object-cover object-center rounded-3xl"
        />
        <h3
          className="relative z-10 text-3xl sm:text-4xl md:text-5xl text-white font-semibold text-center w-full"
          dangerouslySetInnerHTML={{ __html: text }}
        ></h3>
        {btnText && (
          <div className="w-full flex mt-6">
            <Link
              href={btnLink}
              target="_blank"
              className="relative text-lg font-semibold z-10 bg-white py-[8px] px-6 mx-auto rounded-lg border border-white text-blueDark hover:text-white hover:bg-transparent transitions duration-200"
            >
              {btnText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBarBlueWaveBg;
