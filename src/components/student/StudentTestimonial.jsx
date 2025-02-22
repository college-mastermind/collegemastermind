"use client"
import React from 'react';

const StudentTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aarush',
      initialScore: 950,
      finalScore: 1370,
      timeframe: '6 weeks',
      profileImage: '/images/aarush.jpg',
      videos: ['/videos/video1.mp4', '/videos/video2.mp4']
    }
    // More testimonials can be added here
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={testimonials[currentSlide].profileImage}
              alt={testimonials[currentSlide].name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-blue-600">
            {testimonials[currentSlide].name}
          </h2>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center text-4xl">
            <span className="text-gray-500">{testimonials[currentSlide].initialScore}</span>
            <span className="mx-3 text-gray-400">to</span>
            <span className="text-blue-600 font-bold">{testimonials[currentSlide].finalScore}</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-500">in </span>
            <span className="text-blue-600 font-bold">{testimonials[currentSlide].timeframe}</span>
          </div>
        </div>

        <div className="space-y-4">
          {testimonials[currentSlide].videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center"
            >
              <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonial;
