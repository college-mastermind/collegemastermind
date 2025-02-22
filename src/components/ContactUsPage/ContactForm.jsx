"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

import { textGradient } from "@/TailwindStyles/TailwindStyles";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setParentName("");
    setEmail("");
    setPhone("");
    setGraduationYear("");
    setMessage("");
    setAgreement("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      parentName,
      email,
      phone,
      graduationYear,
      message,
      agreement,
    };

    console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/send-mail`)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        resetForm();
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="pt-10 pb-10 sm:pb-16 px-6 sm:px-12 rounded-2xl bg-white shadow-md">
      <h2
        className={`${textGradient} text-2xl sm:text-3xl font-bold text-center`}
      >
        Thank you for your interest in College Mastermind. Please fill out the
        form below and we will reach out to you shortly.
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-10 w-full"
      >
        <div className="flex flex-col sm:flex-row w-full gap-6">
          <div className="w-full">
            <p className="font-semibold">Student First Name</p>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="py-4 px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg"
              required
            />
          </div>
          <div className="w-full">
            <p className="font-semibold">Student Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="py-4 px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-6">
          <div className="w-full">
            <p className="font-semibold">Parent Name</p>
            <input
              type="text"
              placeholder="Parent Name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="py-4 px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg"
              required
            />
          </div>
          <div className="w-full">
            <p className="font-semibold">Parent Email Address</p>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-4 px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-6">
          <div className="w-full">
            <p className="font-semibold">Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="py-4 px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg"
              required
            />
          </div>
          <div className="w-full">
            <p className="font-semibold">Graduation Year</p>
            <select
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              className={`py-4 h-[62px] px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg ${
                graduationYear ? "text-black" : "text-gray-400"
              }`}
            >
              <option className="text-slate-300" value="">
                Select Year
              </option>
              <option value={"2024"}>2024</option>
              <option value={"2023"}>2023</option>
              <option value={"2022"}>2022</option>
              <option value={"2021"}>2021</option>
              <option value={"2020"}>2020</option>
              <option value={"Before 2020"}>Before 2020</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <p className="font-semibold">Message</p>
          <textarea
            placeholder="Type your message ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="py-4 px-4 border border-[#E1E1E1] shadow-sm rounded-md w-full mt-[2px] text-lg"
          />
        </div>
        <div className="flex flex-row items-start gap-4 mt-4">
          <input
            type="checkbox"
            checked={agreement}
            required
            onChange={(e) => setAgreement(e.target.checked)}
            className="appearance-none rounded-sm shrink-0 w-[25px] h-[25px] text-black bg-none border-[2px] border-blueSecondary checked:bg-blueSecondary cursor-pointer"
          />
          <p className="text-black text-lg">
            By checking this box you agree to send and receive messages from
            College Mastermind. You also agree to the Terms of Service and{" "}
            <Link href={"#"} className="text-blueSecondary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <button
          type="submit"
          className={`mt-8 mx-auto w-full max-w-[300px] px-4 py-3 bg-gradient-to-r from-blueSecondary to-blueMain hover:from-white hover:to-white border-[2px] hover:text-blueSecondary border-blueSecondary text-xl text-center rounded-lg font-bold text-white`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
