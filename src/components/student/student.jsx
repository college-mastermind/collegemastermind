"use client"
import React from 'react';
import Image from 'next/image';
import star from "@/app/assets/icons/star.svg"
import cup from "@/app/assets/icons/cup.svg"
import adam from "@/app/assets/adam.png"
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Adam',
      initialScore: 950,
      finalScore: 1370,
      timeframe: '6 weeks',
      profileImage: adam,
    },
    {
      id: 2,
      name: 'Aarush',
      initialScore: 950,
      finalScore: 1370,
      timeframe: '6 weeks',
      profileImage: adam,
    },
    {
      id: 1,
      name: 'Cynthia',
      initialScore: 950,
      finalScore: 1370,
      timeframe: '6 weeks',
      profileImage: adam,
    }
    
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top-right star */}
          <div className="absolute top-0 right-10 w-[90px] h-[90px]">
            <Image
              src={star}
              alt="Star"
              width={90}
              height={90}
              className="text-blue-200 opacity-30"
            />
          </div>
          
          {/* Top-left small star */}
          <div className="absolute top-20 left-10 w-[90px] h-[90px]">
            <Image
              src={star}
              alt="Star"
              width={90}
              height={90}
              className="text-blue-200 opacity-30 transform rotate-45"
            />
          </div>

          {/* Bottom-left trophy */}
          <div className="absolute bottom-10 left-20 w-[90px] h-[90px]">
            <Image
              src={cup}
              alt="Trophy"
              width={90}
              height={90}
              className="text-blue-200 opacity-30 transform -rotate-12"
            />
          </div>

          {/* Bottom-right star */}
          <div className="absolute bottom-20 right-40 w-[90px] h-[90px]">
            <Image
              src={star}
              alt="Star"
              width={90}
              height={90}
              className="text-blue-200 opacity-30"
            />
          </div>

          {/* Center-left small star */}
          <div className="absolute top-1/2 left-5 w-[90px] h-[90px]">
            <Image
              src={star}
              alt="Star"
              width={90}
              height={90}
              className="text-blue-200 opacity-30"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex flex-col items-center md:items-start space-y-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-[100px] h-[100px] rounded-full border-4 border-blue-500 overflow-hidden transform transition-transform hover:scale-105">
                  <img
                    src={testimonials[currentSlide].profileImage}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-4xl font-bold text-blue-600 tracking-tight">
                {testimonials[currentSlide].name}
              </h2>

              {/* Score Progress */}
              <div className="text-center md:text-left">
                <div className="flex items-baseline space-x-4 text-5xl font-bold">
                  <span className="text-gray-400">{testimonials[currentSlide].initialScore}</span>
                  <span className="text-gray-300 text-3xl">to</span>
                  <span className="text-blue-600">{testimonials[currentSlide].finalScore}</span>
                </div>
                <div className="mt-2 text-xl">
                  <span className="text-gray-400">in </span>
                  <span className="text-blue-600 font-bold">{testimonials[currentSlide].timeframe}</span>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-6">
              <button 
                onClick={prevSlide}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                ←
              </button>
              <div className="flex space-x-3">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110
                      ${index === currentSlide ? 'bg-blue-600 scale-110' : 'bg-gray-200'}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                →
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection; 