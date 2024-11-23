"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b ">
      {/* Top Information Bar */}
      <div className="bg-[#f7f7f7] hidden md:flex text-sm py-3 px-4 lg:px-12 justify-between items-center border-b border-black">
        {/* Contact Info */}
        <div className="flex items-center space-x-4 text-sm text-black">
          <span className="tracking-wide border-r border-black pr-6">
            Phone: 956 742 455 678
          </span>
          <span className="tracking-wide">Email: info@ddsgnr.com</span>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-black">
          <Link href="#" aria-label="Facebook" className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
            <FaFacebookF size={20} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">
            <FaLinkedinIn size={20} />
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="py-3 px-4 sm:px-10 flex justify-between bg-[#F7F7F7] items-center border-b border-gray-400">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/headerLogo.png"
            alt="Ddsgnr Logo"
            width={30}
            height={30}
            className="rounded-full object-cover"
          />
          <span className="text-[25px] lg:text-2xl font-bold text-black tracking-wide">
            Ddsgnr
          </span>
        </div>

        {/* Navigation Links For Desktop */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-10 bg-white text-black font-medium">
          {[
            "Home",
            "Courses",
            "Services",
            "Achievement",
            "About Us",
            "Testimonial",
          ].map((text) => (
            <Link
              href={`#${text.toLowerCase().replace(" ", "-")}`}
              key={text}
              className="hover:text-black relative group"
            >
              {text}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-2 xl:space-x-4">
          <button className="px-3 py-2 text-sm lg:px-4 lg:py-2 border-[1px] border-black text-black rounded-md hover:bg-gray-200 transition">
            Login
          </button>
          <button className="px-3 py-2 text-sm lg:px-4 lg:py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-black p-4 space-y-3">
          <nav className="space-y-3">
            {[
              "Home",
              "Courses",
              "Services",
              "Achievement",
              "About Us",
              "Testimonial",
            ].map((text) => (
              <Link
                href={`/${text.toLowerCase().replace(" ", "-")}`}
                key={text}
                className="block hover:text-black text-sm"
              >
                {text}
              </Link>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-2 mt-4">
            <button className="px-3 py-2 text-sm border-[1px] border-black text-black rounded-md hover:bg-gray-200 transition">
              Login
            </button>
            <button className="px-3 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
