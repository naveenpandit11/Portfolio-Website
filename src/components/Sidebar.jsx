import React from "react";
import profile from '/src/assets/IMG_20250626_121425 (1).jpg'
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUserAlt,
  FaFileAlt,
  FaBriefcase,
  FaServicestack,
  FaEnvelope,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "resume",
        "portfolio",
        "services",
        "contact",
      ];

      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isOpen) return null;
  return (
    <div
      className={`fixed h-[100vh] w-72 bg-[#0f172a] z-50 overflow-y-auto text-white flex gap-5 flex-col fixed top-0 left-0 shadow-2xl z-50
    transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
    >
      <div className="flex flex-col items-center p-6">
        <div className="flex justify-end w-full">
          <button
            className="text-white hover:text-red-500 text-lg"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <img
          src={profile}
          alt="profile"
          className="rounded-full h-[190px] mt-2 border-4 border-white shadow-md"
        />
        <h2 className="mt-4 font-bold text-xl">Naveen Pandit</h2>
        <div className="flex space-x-3 mt-4">
          <button className="bg-gray-700 h-8 hover:bg-blue-600 p-2 rounded-full">
            <a
              href="https://www.facebook.com/profile.php?id=100008262348487"
              target="_blank"
              rel="noreferrer"
            ><FaFacebookF /></a>
            
          </button>
          <button className="bg-gray-700 h-8 hover:bg-pink-600 p-2 rounded-full">
            <a
              href="https://www.instagram.com/naveen_pandit11/"
              target="_blank"
              rel="noreferrer"
            ><FaInstagram /></a>
            
          </button>
          <button className="bg-gray-700 h-8 hover:bg-blue-400 p-2 rounded-full">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              
            ><FaSkype /></a>
            
          </button>
          <button className="bg-gray-700 h-8 hover:bg-blue-700 p-2 rounded-full">
            <a
              href="https://www.linkedin.com/in/naveen-kumar-pandit-b49a472b1/"
              target="_blank"
              rel="noreferrer"
            ><FaLinkedinIn /></a>
            
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 px-6 pb-8 text-sm">
        <SidebarItem
          icon={<FaHome />}
          text="Home"
          href="#home"
          active={activeSection === "home"}
        />
        <SidebarItem
          icon={<FaUserAlt />}
          text="About"
          href="#about"
          active={activeSection === "about"}
        />
        <SidebarItem
          icon={<FaFileAlt />}
          text="Resume"
          href="#resume"
          active={activeSection === "resume"}
        />
        <SidebarItem
          icon={<FaServicestack />}
          text="Services"
          href="#services"
          active={activeSection === "services"}
        />
        <SidebarItem
          icon={<FaEnvelope />}
          text="Contact"
          href="#contact"
          active={activeSection === "contact"}
        />
      </nav>
    </div>
  );
};

// Reusable component
const SidebarItem = ({ icon, text, href, active }) => (
  <a
    href={href}
    className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer transition-all duration-300 ${
      active ? "bg-blue-600 text-white" : "hover:bg-gray-700"
    }`}
  >
    <span>{icon}</span>
    <span className="text-base">{text}</span>
  </a>
);

export default Sidebar;
