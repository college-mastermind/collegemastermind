import Image from "next/image";

import ContactUsTopSection from "@/components/ContactUsPage/TopSection";
import ContactForm from "@/components/ContactUsPage/ContactForm";

import BoyImage from "/public/graphics/boy-peeking.png";
import GirlImage from "/public/graphics/gitl-peeking.png";

export const metadata = {
  title: "Contact Us - College Mastermind",
  description: "",
};

const ContactUsPage = () => {
  return (
    <div className="flex flex-col">
      <ContactUsTopSection />
      <div className="flex flex-row items-center mt-4 sm:mt-[-250px] relative z-10 max-w-[90%] lg:max-w-[95%] w-[1400px] mx-auto">
        <Image
          src={BoyImage}
          alt=""
          className="h-[400px] object-contain w-auto mr-[-7px] relative z-10 mt-10 hidden lg:block"
        />
        <div className="w-full mb-20">
          <ContactForm />
        </div>
        <Image
          src={GirlImage}
          alt=""
          className="h-[400px] object-contain w-auto ml-[-7px] relatrive z-10 mt-10 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
