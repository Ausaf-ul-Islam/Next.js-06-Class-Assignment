"use client";
"use client";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/TeamImages/Image-2.png",
    name: "James Nduku",
    title: "Software Developer",
  },
  {
    id: 2,
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/TeamImages/Image.png",
    name: "Erick Kipkemboi",
    title: "Scrum Master",
  },
  {
    id: 3,
    rating: "★★★★★",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    image: "/TeamImages/Image-1.png",
    name: "Stephen Kerubo",
    title: "UI/UX Designer",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section id="testimonial" className="bg-[#f7f7f7] py-28 px-2">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold text-black">
            Customer Testimonials
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[90%] sm:min-w-[80%] md:min-w-[45%] lg:min-w-[30%] xl:min-w-[30%] border border-black p-8 mx-4"
              >
                {/* Rating */}
                <div className="flex justify-start mb-4">
                  <span className="text-black font-bold text-xl gap-1">
                    {testimonial.rating}
                  </span>
                </div>
                {/* Feedback */}
                <p className="italic mb-6 gap-6">{testimonial.feedback}</p>
                {/* Profile */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-black font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex justify-between items-center mt-10">
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex space-x-4">
            <button
              className="bg-transparent p-3 rounded-full border-black border-2 hover:bg-gray-200"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FiArrowLeft size={20} className="text-black" />
            </button>
            <button
              className="bg-transparent p-3 rounded-full border-black border-2 hover:bg-gray-200"
              onClick={handleNext}
              disabled={currentIndex === testimonials.length - 1}
            >
              <FiArrowRight size={20} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
