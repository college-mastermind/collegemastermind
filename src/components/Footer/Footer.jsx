"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "/public/college-mastermind/logo-text-white-right.png";
import BackgroundWave from "/public/design/background-wave-blue-main.svg";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative bg-blueSecondary mt-10 px-[10%] pt-10 text-white">
      <div className="absolute w-full bottom-0 right-0 top-16 z-0 overflow-hidden">
        <Image
          src={BackgroundWave}
          alt=""
          fill
          className="object-fill w-[130%] h-full hidden md:block"
        />

        <div className="bg-blueMain z-0 rounded-t-full md:hidden w-[150%] h-[200%] overflow-hidden absolute -left-20"></div>
      </div>

      <Link href={"/"}>
        <Image
          src={Logo}
          alt="College Mastermind Logo"
          className="w-[250px] object-contain relative z-20 "
        />
      </Link>

      <div className="flex flex-wrap mt-6 pb-12 relative z-20">
        <div className="w-[50%] md:w-[20%] flex flex-col gap-[3px] mt-12">
          <h3 className="text-2xl font-semibold mb-2">Quick Links</h3>
          <Link href={"/"} className="pl-2 font-light text-lg">
            Home
          </Link>
          <Link href={"#"} className="pl-2 font-light text-lg">
            About
          </Link>
          <Link href={"#"} className="pl-2 font-light text-lg">
            Services
          </Link>
          <Link href={"/our-team"} className="pl-2 font-light text-lg">
            Meet Our Team
          </Link>
          <Link href={"/contact-us"} className="pl-2 font-light text-lg">
            Contact Us
          </Link>
        </div>
        <div className="w-[50%] md:w-[20%] flex flex-col gap-[3px] mt-12">
          <h3 className="text-2xl font-semibold mb-2">Services</h3>
          <Link href={"/test-prep"} className="pl-2 font-light text-lg">
            Test Prep
          </Link>
          <Link
            href={"/university-admission"}
            className="pl-2 font-light text-lg"
          >
            Admissions Services
          </Link>
          <Link href={"#"} className="pl-2 font-light text-lg">
            Internships
          </Link>
          <Link href={"#"} className="pl-2 font-light text-lg">
            Events
          </Link>
        </div>
        <div className="w-[50%] md:w-[20%] flex flex-col gap-[3px] mt-12">
          <h3 className="text-2xl font-semibold mb-2">Socials</h3>
          <Link
            href="https://www.facebook.com/groups/collegemastermind"
            target="_blank"
            rel="nofollow"
            className="flex flex-row items-center gap-2 text-white"
          >
            <div className="p-[6px] flex border border-white rounded-full">
              <FaFacebook size={23} className="m-auto " />
            </div>
            <p className="text-lg font-light">Facebook</p>
          </Link>
          <Link
            href="https://www.instagram.com/collegemastermind/"
            target="_blank"
            rel="nofollow"
            className="flex flex-row items-center gap-2 text-white mt-2"
          >
            <div className="p-[6px] flex border border-white rounded-full">
              <FaInstagram size={23} className="m-auto " />
            </div>
            <p className="text-lg font-light">Instagram</p>
          </Link>{" "}
          {/* <Link
            href="#"
            className="flex flex-row items-center gap-2 text-white mt-2"
          >
            <div className="p-[6px] flex border border-white rounded-full">
              <FaYoutube size={23} className="m-auto " />
            </div>
            <p className="text-lg font-light">YouTube</p>
          </Link>{" "}
          <Link
            href="#"
            className="flex flex-row items-center gap-2 text-white mt-2"
          >
            <div className="p-[6px] flex border border-white rounded-full">
              <FaTiktok size={23} className="m-auto " />
            </div>
            <p className="text-lg font-light">TikTok</p>
          </Link> */}
        </div>
        <div className="w-full md:w-[40%] flex mt-10 md:mt-0">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col text-white w-full md:w-[80%] md:ml-auto"
          >
            <h3 className="text-2xl font-semibold text-center">Get in Touch</h3>
            <p className="text-center text-lg font-light">
              You can reach us anytime
            </p>
            <div className="flex flex-col xs:flex-row gap-4 mt-2">
              <input
                className="p-2 border border-white rounded-lg w-full bg-transparent placeholder:text-white"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              ></input>
              <input
                className="p-2 border border-white rounded-lg w-full bg-transparent placeholder:text-white"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              ></input>
            </div>
            <input
              className="p-2 mt-4 border border-white rounded-lg w-full bg-transparent placeholder:text-white"
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <textarea
              className="p-2 mt-4 border border-white rounded-lg w-full bg-transparent placeholder:text-white"
              placeholder="Tell us what can we help you"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="w-full mt-4 p-2 text-center text-blueSecondary bg-white hover:bg-transparent hover:text-white text-lg font-semibold border border-white transitions duration-200 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <div className="relative z-20 border-t border-t-white flex flex-row items-center gap-6 py-6 px-8 mt-12">
        <Link href={"#"} className="ml-auto">
          Privacy Policy
        </Link>
        <Link href={"#"} className="">
          Legal Terms
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
