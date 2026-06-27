import React from "react";
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub,
  FaHome, FaUserAlt, FaFileAlt, FaBriefcase, FaCode, FaHeart,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home", icon: <FaHome /> },
  { label: "About", href: "#about", icon: <FaUserAlt /> },
  { label: "Skills", href: "#skills", icon: <FaCode /> },
  { label: "Resume", href: "#resume", icon: <FaFileAlt /> },
  { label: "Projects", href: "#projects", icon: <FaBriefcase /> },
  { label: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=100008262348487", color: "hover:bg-blue-600" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/naveen_pandit11/", color: "hover:bg-pink-600" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/naveen-kumar-pandit-b49a472b1/", color: "hover:bg-blue-700" },
  { icon: <FaGithub />, href: "https://github.com/", color: "hover:bg-gray-600" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-bold mb-1">Naveen Pandit</h2>
          <div className="w-8 h-0.5 bg-blue-500 mb-4" />
          <p className="text-sm leading-relaxed text-gray-400">
            Frontend developer passionate about building clean, responsive web experiences
            with React and modern web technologies.
          </p>
          {/* Socials */}
          <div className="flex gap-2 mt-5">
            {socials.map(({ icon, href, color }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 rounded-lg bg-white/10 ${color} flex items-center justify-center text-white text-xs transition-colors duration-200`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Quick Links</h3>
          <div className="w-8 h-0.5 bg-blue-500 mb-4" />
          <ul className="space-y-2">
            {quickLinks.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="text-blue-500 text-xs group-hover:translate-x-1 transition-transform duration-200">
                    {icon}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Get In Touch</h3>
          <div className="w-8 h-0.5 bg-blue-500 mb-4" />
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Dehradun, Uttarakhand, India</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-emerald-400 flex-shrink-0" />
              <a href="tel:+919410788233" className="hover:text-white transition-colors">
                +91 94107 88233
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-amber-400 flex-shrink-0" />
              <a href="mailto:naveenpandit3559@gmail.com" className="hover:text-white transition-colors break-all">
                naveenpandit3559@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-600">
        <p>
          © {new Date().getFullYear()} Naveen Pandit. All rights reserved. Made with{" "}
          <FaHeart className="inline text-red-500 mx-0.5" /> using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;