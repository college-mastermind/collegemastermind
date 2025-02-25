import React from "react";

const GoogleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-7 md:pt-16 bg-[#EAF2FF] min-h-screen">
      {/* Heading Section */}
      <div className="max-w-2xl text-center px-4 md:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text mb-5 md:mb-8">
          Claim Your Spot Today
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-[380px] md:max-w-[510px] lg:max-w-[620px] sm:mx-auto">
          Our tutors have a <span className="font-bold">limited number of spots each month.{" "}</span> 
          Don’t miss the chance to fast-track your path to an SAT score of 1500+ for free.
        </p>
      </div>

      {/* Google Form Embed */}
      <div className="w-full max-w-3xl mt-6 md:mt-12 bg-gray-200 sm:p-7 rounded-lg shadow-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdJl4py5BVX1YXUii2mLrhxy4_4RGoXtpwI8zNI8I-03CmMMA/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          className="w-full h-[1030vh] sm:h-[750vh] xl:h-[550vh]"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleForm;
