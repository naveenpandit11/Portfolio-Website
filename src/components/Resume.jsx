import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor's In Technology",
    field: "Computer Science & Engineering",
    institution: "Shivalik College Of Engineering",
    location: "Dehradun, Uttarakhand",
    year: "2023 – 2027",
  },
  {
    degree: "XII (Senior Secondary)",
    field: "Science — Physics, Chemistry, Mathematics",
    institution: "The Sapience School",
    location: "Vikasnagar, Dehradun",
    year: "2023",
  },
];

const certifications = [
  {
    title: "Python Basics",
    issuer: "HackerRank",
    date: "Jun 2023",
    credential: "4000571B58C8",
  },
  {
    title: "Data Science & Big Data Analytics",
    issuer: "Cloud Education",
    date: "Aug 2024",
    credential: "2039",
  },
  {
    title: "Data Structure & Algorithms",
    issuer: "Explorin Academy",
    date: "May 2025",
    credential: "Problem Solving with C++",
  },
  {
    title: "Web Development",
    issuer: "Explorin Academy",
    date: "Dec 2024",
    credential: "HTML, CSS, JavaScript, React",
  },
];

function TimelineItem({ title, subtitle, meta, detail, last }) {
  return (
    <div className="relative flex gap-4">
      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-500 mt-1 flex-shrink-0 z-10" />
        {!last && <div className="w-0.5 bg-blue-200 flex-1 mt-1" />}
      </div>
      {/* Content */}
      <div className={`pb-6 ${last ? "" : ""}`}>
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mb-1">
          {meta}
        </span>
        <h3 className="font-semibold text-gray-800 text-base leading-snug">{title}</h3>
        <p className="text-gray-500 text-sm mt-0.5">{subtitle}</p>
        {detail && <p className="text-gray-400 text-xs mt-1">{detail}</p>}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <section id="resume" data-aos="fade-up" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Resume</h2>
        <hr className="w-12 border-blue-500 border-t-2 mt-1 mb-3" />
        <p className="text-gray-500 text-sm max-w-xl mb-10">
          Motivated frontend developer passionate about creating responsive, user-friendly, and impactful web solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="bg-[#f4fafd] rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm">
                <FaGraduationCap />
              </span>
              <h3 className="text-lg font-bold text-gray-800">Education</h3>
            </div>
            {education.map((edu, i) => (
              <TimelineItem
                key={i}
                title={edu.degree}
                subtitle={`${edu.field} · ${edu.institution}, ${edu.location}`}
                meta={edu.year}
                last={i === education.length - 1}
              />
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-[#f4fafd] rounded-2xl p-7 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white flex items-center justify-center text-sm">
                <FaCertificate />
              </span>
              <h3 className="text-lg font-bold text-gray-800">Certifications</h3>
            </div>
            {certifications.map((cert, i) => (
              <TimelineItem
                key={i}
                title={cert.title}
                subtitle={cert.issuer}
                meta={cert.date}
                detail={`ID: ${cert.credential}`}
                last={i === certifications.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;