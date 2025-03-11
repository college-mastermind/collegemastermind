import React, { useRef, useEffect } from "react";

const LazyVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && videoRef.current) {
          const video = videoRef.current;
          video.muted = false; 
          video.play().catch((err) => console.error("Autoplay blocked:", err));
          observer.disconnect(); 
        }
      },
      { threshold: 1 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover rounded-md"
      src="/ErinVideoForUniStudentPage.mp4"
      controls
      playsInline
      autoPlay
      muted 
      loading="lazy"
    />
  );
};

export default LazyVideo;
