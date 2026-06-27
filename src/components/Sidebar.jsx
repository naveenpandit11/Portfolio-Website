import React, { useState, useEffect } from "react";
import profile from "/src/assets/me.jpg";
import {
  FaHome, FaUserAlt, FaFileAlt, FaBriefcase,
  FaEnvelope, FaTimes, FaFacebookF, FaInstagram,
  FaLinkedinIn, FaGithub, FaCode,
} from "react-icons/fa";

const navItems = [
  { icon: <FaHome />, text: "Home", href: "#home", id: "home" },
  { icon: <FaUserAlt />, text: "About", href: "#about", id: "about" },
  { icon: <FaFileAlt />, text: "Resume", href: "#resume", id: "resume" },
  { icon: <FaCode />, text: "Skills", href: "#skills", id: "skills" },
  { icon: <FaBriefcase />, text: "Projects", href: "#projects", id: "projects" },
  { icon: <FaEnvelope />, text: "Contact", href: "#contact", id: "contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=100008262348487", color: "hover:bg-blue-600" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/naveen_pandit11/", color: "hover:bg-pink-600" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/naveen-kumar-pandit-b49a472b1/", color: "hover:bg-blue-700" },
  { icon: <FaGithub />, href: "https://github.com/", color: "hover:bg-gray-600" },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const ids = navItems.map((n) => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#0f172a] z-40 flex flex-col shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6 border-b border-white/10 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-colors"
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>

          {/* Avatar */}
          <div className="relative mb-3">
            <img
              src={profile}
              alt="Naveen Pandit"
              className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-lg"
            />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f172a]" />
          </div>

          <h2 className="text-white font-bold text-base">Naveen Pandit</h2>
          <p className="text-blue-400 text-xs mt-0.5">Frontend Developer</p>

          {/* Socials */}
          <div className="flex gap-2 mt-4">
            {socials.map(({ icon, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`w-7 h-7 rounded-lg bg-white/10 ${color} flex items-center justify-center text-white text-xs transition-colors duration-200`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 px-3 py-5 flex-1 overflow-y-auto">
          {navItems.map(({ icon, text, href, id }) => (
            <a
              key={id}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${activeSection === id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span className="text-base">{icon}</span>
              {text}
              {activeSection === id && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 text-center">
          <p className="text-gray-600 text-[10px]">© {new Date().getFullYear()} Naveen Pandit</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;