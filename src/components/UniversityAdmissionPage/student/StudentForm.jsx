import React from "react";

const StudentForm = () => { 
  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-16 min-h-screen">
      {/* Heading Section */}
      <div className="max-w-2xl text-center px-4 md:max-w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text mb-5 md:mb-8">
        Take the First Step Toward Acceptance
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-[180px] sm:max-w-full mx-auto">
        Register now for free your sessions!
        </p>
      </div>

      {/* Google Form Embed */}
      <div className="w-full max-w-3xl mt-6 md:mt-12 bg-gray-[#EAF2FF] sm:p-7 rounded-lg shadow-lg md:p-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdJl4py5BVX1YXUii2mLrhxy4_4RGoXtpwI8zNI8I-03CmMMA/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          className="w-full h-screen"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default StudentForm;
