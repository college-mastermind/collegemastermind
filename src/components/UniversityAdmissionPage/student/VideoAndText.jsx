"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load the video component
const LazyVideo = React.lazy(() => import("./LazyVideo"));

const VideoAndText = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => { 
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoLoaded(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative  w-full h-full py-5 px-4 sm:px-6 flex flex-col items-center text-center max-w-screen-xl mx-auto">
      {/* Video and Text Section */}
      <div className="mt-12 rounded-lg p-3 h-full sm:p-4 py-8 md:p-5 lg:p-14 xl:p-20 bg-white shadow-lg sm:flex justify-center items-center md:gap-10 max-w-full mx-auto">
        {/* Video */}
        <motion.div
          className="w-full md:w-1/2 max-w-lg mx-auto flex justify-center ring-2 ring-[#447EF7] rounded-md relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative w-full h-full">
            {isVideoLoaded ? (
              <Suspense fallback={<div>Loading video...</div>}>
                <LazyVideo />
              </Suspense>
            ) : (
              <div
                className="w-full h-full bg-gray-300 flex items-center justify-center"
                ref={videoRef}
              >
                <button
                  className="bg-[#447EF7] text-gray-100 flex justify-center items-center rounded-full w-12 h-12 text-2xl"
                  onClick={() => setIsVideoLoaded(true)}
                >
                  ▶
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="mt-6 md:mt-0 md:ml-6 ss:px-9 text-left md:w-1/2">
          <p className="text-[#243DBC] text-sm md:text-lg font-semibold">
            • Watch our video to learn more
          </p>
          <h3 className="text-[#447EF7] text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold mt-2">
            Choose the Right School & Increase Your Chances of Acceptance
          </h3>
          <p className="text-gray-800 text-base font-medium lg:text-lg mt-2 max-w-lg">
            Each college has a distinct personality—just having strong stats
            won&apos;t guarantee acceptance if you don&apos;t mesh with that culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoAndText;
