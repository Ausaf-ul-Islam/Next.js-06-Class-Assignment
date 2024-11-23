import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="text-[18px] font-bold mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-[16px] mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start">
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 p-3 text-[#505050] border-[2px] border-black rounded-md"
              />
              <button
                type="submit"
                className="w-full sm:w-auto border-[2px] border-black px-5 py-3 rounded-md hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-left text-[12px]">
              By subscribing you agree to our{" "}
              <span className="underline decoration-solid">Privacy Policy</span>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 text-center lg:text-left">
          <div>
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Image
                src="/headerLogo.png"
                alt="Ddsgnr Logo"
                width={32}
                height={30}
              />
              <h3 className="text-[25px] font-bold">Ddsgnr</h3>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">Courses</h4>
            <ul className="space-y-2">
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">Resources</h4>
            <ul className="space-y-2">
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-lg">About Us</h4>
            <ul className="space-y-2">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 border-t border-black pt-6">
          <p className="text-sm">2023 Ddsgnr. All rights reserved.</p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm underline decoration-solid">
            <Link href="/privacy-policy" className="hover:text-gray-800">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-800">
              Terms of Service
            </Link>
            <Link href="/cookie-settings" className="hover:text-gray-800">
              Cookies Settings
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="/"
              className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
            >
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link
              href="/"
              className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
            >
              <FaInstagram className="text-2xl" />
            </Link>
            <Link
              href="/"
              className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
            >
              <FaTwitter className="text-2xl" />
            </Link>
            <Link
              href="/"
              className="hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
            >
              <FaLinkedinIn className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
