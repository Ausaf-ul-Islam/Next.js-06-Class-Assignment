"use client";
import { useState } from "react";
import Image from "next/image";

type Course = {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
};

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState<string>("Popular");
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  const courses: Course[] = [
    {
      id: 1,
      category: "Design",
      title: "UX/UI Design 201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 400,
      rating: 5.0,
      image: "/CourseImages/Image.png",
    },
    {
      id: 2,
      category: "Programming",
      title: "Introduction to Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 300,
      rating: 4.8,
      image: "/CourseImages/Image-1.png",
    },
    {
      id: 3,
      category: "Business",
      title: "Data Analysis for Beginners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 450,
      rating: 5.0,
      image: "/CourseImages/Image-2.png",
    },
    {
      id: 4,
      category: "Art",
      title: "Art Specialization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 200,
      rating: 4.5,
      image: "/CourseImages/Image-3.png",
    },
    {
      id: 5,
      category: "Law",
      title: "Rule of Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 500,
      rating: 4.7,
      image: "/CourseImages/Image-4.png",
    },
    {
      id: 6,
      category: "Tech",
      title: "Introduction to WebFlow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: 350,
      rating: 4.9,
      image: "/CourseImages/Image-5.png",
    },
  ];

  const tabs = ["Popular", "Recommended", "Best Price"];

  // Filter courses based on activeTab
  const filteredCourses = () => {
    if (activeTab === "Popular") {
      return courses; // Show all courses
    }
    if (activeTab === "Recommended") {
      return courses.filter((course) => course.rating >= 4.9); // Show courses with rating >= 4.9
    }
    if (activeTab === "Best Price") {
      return courses.filter((course) => course.price <= 300); // Show courses with price <= 300
    }
    return courses;
  };

  return (
    <div id="courses" className="py-12 bg-white gap-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] sm:text-[48px] font-bold text-black text-center">
          Courses
        </h2>
        <p className="mt-3 text-lg text-black text-center">
          Your Ultimate Guide to Learning
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-medium ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-[#676767]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses().map((course, index) => {
            // Show three items in vertical layout on mobile and more when "View All Courses" is clicked
            if (!showAllCourses && index >= 3) return null; // Only show first 3 when not in view all mode
            return (
              <div
                key={course.id}
                className="bg-[#f7f7f7] border rounded-lg shadow-sm overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-black">{course.category}</p>
                    <p className="text-sm font-semibold text-black">
                      {course.rating} ★
                    </p>
                  </div>
                  <h3 className="text-xl font-bold text-black">{course.title}</h3>
                  <p className="mt-2 text-sm text-black">{course.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="px-4 py-2 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition">
                      Enroll Now
                    </button>
                    <div className="text-right">
                      <p className="text-lg font-bold text-black">
                        ${course.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Courses Button */}
        <div className="max-w-7xl mx-auto text-center">
          <button
            onClick={() => setShowAllCourses(!showAllCourses)} // Toggle between showing all and first three courses
            className="mt-8 px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition"
          >
            {showAllCourses ? "Show Less Courses" : "View All Courses"}
          </button>
        </div>
      </div>  
    </div>
  );
}
