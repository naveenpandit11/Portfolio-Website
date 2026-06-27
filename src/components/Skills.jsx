import React from "react";
import { SiHtml5, SiJavascript, SiReact, SiPython, SiGit } from "react-icons/si";
import {
  FaCode, FaBrain, FaServer, FaDatabase, FaCubes,
  FaLaptopCode, FaTools, FaLayerGroup, FaTerminal,
  FaAtom, FaCog, FaNetworkWired,
} from "react-icons/fa";

const categories = [
  {
    label: "Frontend",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    dot: "bg-blue-500",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaLayerGroup /> },
      { name: "Tailwind CSS", icon: <FaAtom /> },
      { name: "Vite", icon: <FaCog /> },
    ],
  },
  {
    label: "Backend",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    dot: "bg-emerald-500",
    skills: [
      { name: "Node.js", icon: <FaServer /> },
      { name: "Express.js", icon: <FaNetworkWired /> },
      { name: "Flask", icon: <SiPython /> },
    ],
  },
  {
    label: "Database",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    dot: "bg-amber-500",
    skills: [
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],
  },
  {
    label: "Languages",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    dot: "bg-purple-500",
    skills: [
      { name: "C", icon: <FaCode /> },
      { name: "C++", icon: <FaCode /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaCode /> },
    ],
  },
  {
    label: "Core CS",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    dot: "bg-rose-500",
    skills: [
      { name: "Data Structures & Algorithms", icon: <FaBrain /> },
      { name: "Object-Oriented Programming", icon: <FaCubes /> },
      { name: "DBMS", icon: <FaDatabase /> },
    ],
  },
  {
    label: "Tools",
    color: "from-gray-600 to-gray-800",
    bg: "bg-gray-50",
    border: "border-gray-200",
    dot: "bg-gray-600",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <FaTerminal /> },
      { name: "VS Code", icon: <FaLaptopCode /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" data-aos="fade-up" className="bg-[#f4fafd] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        <hr className="w-12 border-blue-500 border-t-2 mt-1 mb-3" />
        <p className="text-gray-500 text-sm max-w-xl mb-10">
          A full-stack skill set spanning frontend, backend, databases, core CS fundamentals, and developer tooling.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, color, bg, border, dot, skills }) => (
            <div
              key={label}
              className={`bg-white rounded-2xl border ${border} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${color}`} />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">
                    {label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, icon }) => (
                    <span
                      key={name}
                      className={`flex items-center gap-1.5 ${bg} border ${border} text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full hover:-translate-y-0.5 transition-transform duration-200`}
                    >
                      <span className="text-sm">{icon}</span>
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;