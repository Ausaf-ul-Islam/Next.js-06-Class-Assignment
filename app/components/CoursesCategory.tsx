"use client";
import React, { useState } from "react";
import {
  FaLaptopCode,
  FaChartLine,
  FaCogs,
  FaComments,
  FaLink,
  FaBrain,
  FaBusinessTime,
  FaDollarSign,
  FaHandshake,
} from "react-icons/fa";

const categories = [
  {
    title: "Design & Development",
    courses: "50+ Courses Available",
    icon: <FaLaptopCode />,
  },
  {
    title: "Marketing",
    courses: "50+ Courses Available",
    icon: <FaChartLine />,
  },
  { title: "Development", courses: "50+ Courses Available", icon: <FaCogs /> },
  {
    title: "Communication",
    courses: "50+ Courses Available",
    icon: <FaComments />,
  },
  {
    title: "Digital Marketing",
    courses: "50+ Courses Available",
    icon: <FaLink />,
  },
  {
    title: "Self Development",
    courses: "50+ Courses Available",
    icon: <FaBrain />,
  },
  {
    title: "Business",
    courses: "50+ Courses Available",
    icon: <FaBusinessTime />,
  },
  {
    title: "Finance",
    courses: "50+ Courses Available",
    icon: <FaDollarSign />,
  },
  {
    title: "Consulting",
    courses: "50+ Courses Available",
    icon: <FaHandshake />,
  },
];

export default function CourseCategories() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Determine categories to show based on the state and screen size
  const visibleCategories =
    showAllCategories ||
    typeof window === "undefined" ||
    window.innerWidth >= 768
      ? categories
      : categories.slice(0, 3);

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[32px] sm:text-[48px] font-bold mb-4">
          Explore Courses By Category
        </h2>

        <p className="text-black mb-8">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] cursor-pointer p-4 m-3 rounded-lg flex items-center shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 flex items-center justify-center bg-white border rounded-lg shadow-sm mr-4">
                <div className="text-[#292D32] text-2xl">{category.icon}</div>{" "}
              </div>

              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-black">{category.courses}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAllCategories((prev) => !prev)}
          className="mt-8 px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition"
        >
          {showAllCategories ? "Show Less" : "View All Courses"}
        </button>
      </div>
    </section>
  );
}
