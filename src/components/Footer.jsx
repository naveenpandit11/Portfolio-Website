import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">About Us</h2>
          <p className="text-sm leading-6">
            Building responsive websites and UI components using React,
            Tailwind, and modern web technologies.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              Herbertpur, Uttarakhand, IN
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              +91 94107 88233
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              naveenpandit3559@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links or Socials (Optional) */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:underline">
                Resume
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Naveen Pandit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
