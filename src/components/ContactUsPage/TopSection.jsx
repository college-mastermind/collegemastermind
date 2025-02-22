import Link from "next/link";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUsTopSection = () => {
  return (
    <div
      className={`h-[90vh] w-full contactUsBgGradient relative overflow-hidden flex mb-[2px]`}
    >
      <div className="mx-auto mt-[20vh] text-white">
        <h1 className="text-[48px] font-extrabold text-center">
          Get In Touch With Us
        </h1>
        <p className="text-center text-[22px]">
          We are looking forward to speaking with you soon
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-10 mt-10 px-10">
          <Link
            href={"mailto:contact@collegemastermind.com"}
            className="flex flex-row gap-4 items-center w-full ss:justify-center"
          >
            <div className="flex p-4 rounded-full bg-[#4282F7]">
              <FaEnvelope size={35} className="m-auto" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Email Information</h2>
              <p className="font-light">contact@collegemastermind.com</p>
            </div>
          </Link>
          <Link
            href={"tel:+4753330443"}
            className="flex flex-row gap-4 items-center w-full ss:justify-center"
          >
            <div className="flex p-4 rounded-full bg-[#4282F7]">
              <FaPhoneAlt size={35} className="m-auto" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Contact Number</h2>
              <p className="font-light">(475) 333-0443</p>
            </div>
          </Link>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 230"
        className="absolute bottom-[0px] w-full"
      >
        <path
          fill="#f0f9fe"
          fillOpacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,176C640,149,800,75,960,74.7C1120,75,1280,149,1360,186.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default ContactUsTopSection;
