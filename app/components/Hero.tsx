import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-white">
      {/* Hero Section */}
      <div className="flex flex-col sm:items-start lg:flex-row lg:items-center justify-between px-4 sm:px-8 md:px-10 lg:px-24 py-2 sm:py-12 bg-white text-left">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-black mb-4 sm:mb-6 lg:mb-6 leading-snug lg:leading-tight">
            Learn new skills <br /> online with ease
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-black mb-6 sm:mb-8 lg:mb-8">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <button className="px-5 sm:px-6 py-2 sm:py-3 bg-black text-white font-medium rounded-md shadow-md hover:bg-gray-800 transition">
              Start learning now
            </button>
            <button className="px-5 sm:px-6 py-2 sm:py-3 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition">
              Explore Courses
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className="mt-8 sm:mt-4 lg:mt-0">
          <Image
            src="/Hero.jpg"
            alt="Learn new skills"
            width={640}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Trusted by Companies Section */}
      <div className="bg-[#F7F7F7] py-8 sm:py-12 lg:py-[80px]">
        <div className="flex flex-col items-center text-center gap-6 md:flex-row md:justify-center">
          <h2 className="text-lg sm:text-xl lg:text-[20px] font-bold text-black">
            Trusted by 2000+ companies worldwide.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              src="/Logo/Logo.png"
              alt="Company 1"
              width={123}
              height={39}
              className="w-[80px] sm:w-[100px] lg:w-[123px] h-auto"
            />
            <Image
              src="/Logo/Logo-1.png"
              alt="Company 2"
              width={123}
              height={39}
              className="w-[80px] sm:w-[100px] lg:w-[123px] h-auto"
            />
            <Image
              src="/Logo/Logo-2.png"
              alt="Company 3"
              width={123}
              height={39}
              className="w-[80px] sm:w-[100px] lg:w-[123px] h-auto"
            />
            <Image
              src="/Logo/Logo-3.png"
              alt="Company 4"
              width={123}
              height={39}
              className="w-[80px] sm:w-[100px] lg:w-[123px] h-auto"
            />
            <Image
              src="/Logo/Logo-4.png"
              alt="Company 5"
              width={123}
              height={39}
              className="w-[80px] sm:w-[100px] lg:w-[123px] h-auto"
            />
            <Image
              src="/Logo/Logo-5.png"
              alt="Company 6"
              width={123}
              height={39}
              className="w-[80px] sm:w-[100px] lg:w-[123px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
