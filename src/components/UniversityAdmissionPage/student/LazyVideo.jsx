import React from "react";

const LazyVideo = () => {
  return (
    <video
      className="w-full h-full object-cover rounded-md"
      src="/ErinVideoForUniStudentPage.mp4"
      controls
      autoPlay
      muted
      loading="lazy"
    />
  );
};

export default LazyVideo;