import React from "react";

const ParentForm = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 md:pt-16 min-h-screen">
      {/* Heading Section */}
      <div className="max-w-2xl text-center px-4 md:max-w-full">
        <h2 className="text-3xl sm:text-4xl font-semibold bg-gradient-to-r from-[#447EF7] to-[#243DBC] text-transparent bg-clip-text mb-5">
          Take the First Step Toward Acceptance
        </h2>
        <p className="text-gray-700 text-base md:text-xl max-w-[180px] sm:max-w-full mx-auto">
          Register now for free your sessions!
        </p>
      </div>

      {/* Google Form Embed */}
      <div className="w-full max-w-3xl mt-6 md:mt-12 bg-gray-[#EAF2FF] sm:p-7 rounded-lg shadow-lg md:p-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd83P58lLXaeZANsdzX1VER8Tg0ruKXKW9DS6IgFfAJYWjrIA/viewform?embedded=true"
          width="640"
          height="2749"
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

export default ParentForm;
