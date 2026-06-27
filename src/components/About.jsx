import React from "react";
import profile from "/src/assets/me.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaBirthdayCake, FaUserGraduate, FaBriefcase, FaUser } from "react-icons/fa";

const info = [
  { icon: <FaBirthdayCake />, label: "Birthday", value: "11 Dec 2004" },
  { icon: <FaGlobe />, label: "Website", value: "www.example.com" },
  { icon: <FaPhone />, label: "Phone", value: "+91 94107 88233" },
  { icon: <FaMapMarkerAlt />, label: "City", value: "Dehradun, Uttarakhand" },
  { icon: <FaUser />, label: "Age", value: "20" },
  { icon: <FaUserGraduate />, label: "Degree", value: "Bachelor's" },
  { icon: <FaEnvelope />, label: "Email", value: "naveenpandit3559@gmail.com" },
  { icon: <FaBriefcase />, label: "Freelance", value: "Available" },
];

function About() {
  return (
    <section id="about" className="bg-[#f4fafd] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-800">About</h2>
        <hr className="w-12 border-blue-500 border-t-2 mt-1 mb-8" />

        {/* Intro paragraph */}
        <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mb-12">
          I'm an aspiring frontend developer with solid skills in HTML, CSS, and a growing command of
          React, focused on building clean, responsive web pages. A fast learner passionate about
          creating interactive web experiences — I've shipped projects with strong layouts and
          cross-device compatibility and am eager to grow, collaborate, and contribute to impactful
          solutions.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left — profile image panel */}
            <div className="lg:w-72 flex-shrink-0 bg-gradient-to-b from-blue-600 to-indigo-700 flex flex-col items-center justify-center py-12 px-8 gap-4">
              <div className="relative">
                <div className="w-44 h-44 rounded-full ring-4 ring-white/40 overflow-hidden shadow-xl">
                  <img
                    src={profile}
                    alt="Naveen Pandit"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Available badge */}
                <span className="absolute bottom-2 right-2 bg-green-400 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow">
                  Available
                </span>
              </div>
              <div className="text-center text-white">
                <h3 className="text-lg font-bold tracking-wide">Naveen Pandit</h3>
                <p className="text-blue-200 text-xs mt-1">Web Developer &amp; DS Enthusiast</p>
              </div>

              {/* Quick contact pills */}
              <div className="flex flex-col gap-2 w-full mt-2">
                <a
                  href="mailto:naveenpandit3559@gmail.com"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-lg px-3 py-2 text-white text-xs"
                >
                  <FaEnvelope className="flex-shrink-0 text-blue-200" />
                  <span className="truncate">naveenpandit3559@gmail.com</span>
                </a>
                <a
                  href="tel:+919410788233"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-lg px-3 py-2 text-white text-xs"
                >
                  <FaPhone className="flex-shrink-0 text-blue-200" />
                  <span>+91 94107 88233</span>
                </a>
              </div>
            </div>

            {/* Right — info */}
            <div className="flex-1 p-8 lg:p-10">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                Web Developer &amp; Data Structure
              </h2>
              <div className="w-8 h-0.5 bg-blue-500 mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Aspiring web developer and data science enthusiast skilled in HTML, CSS, React, and
                data analysis — passionate about building interactive websites and solving real-world
                problems with data.
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {info.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-[#f4fafd] rounded-xl px-4 py-3 border border-gray-100"
                  >
                    <span className="text-blue-500 text-sm flex-shrink-0">{icon}</span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                        {label}
                      </p>
                      <p className="text-gray-700 text-sm font-medium truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Hire Me
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-200"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;