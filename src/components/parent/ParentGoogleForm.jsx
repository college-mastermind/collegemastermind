import React from "react";

const ParentGoogleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-16  min-h-screen">
      {/* Heading Section */}
      <div className="max-w-2xl text-center px-4 md:max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl lg:tracking-tighter font-semibold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text mb-5 md:mb-8">
          Secure Your Child&apos;s Future Today
        </h2>
        <p className="text-gray-700 text-base md:text-xl max-w-[180px] sm:max-w-[510px] mx-auto">
          Limited Spots Available – Register Now!
        </p>
      </div>

      {/* Google Form Embed */}
      <div className="w-full max-w-3xl mt-6 md:mt-12 bg-gray-[#EAF2FF] sm:p-7 rounded-lg shadow-lg md:p-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdyNl7-vjlLcvTwWXln2tx0gf6dOQeBwRGX921prwTdWHweTA/viewform?embedded=true"
          width="640"
          height="2222"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="w-full h-screen"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ParentGoogleForm;
