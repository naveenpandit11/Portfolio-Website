import React from "react";

function Skills() {
  const skillData = [
    { name: "HTML", level: "100%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "75%" },
    { name: "React", level: "70%" },
    { name: "Data Structure", level: "80%" },
    { name: "Problem Solving", level: "85%" },
  ];

  return (
    <section id="skills" data-aos="fade-up" className="w-full bg-[#f4fafd] overflow-hidden bg-cover bg-center">
      <div className="p-10 sm:p-16 flex flex-col">
        <h1 className="text-2xl sm:text-3xl font-medium">Skills</h1>
        <hr className="w-8 border-blue-500 border-t-2 my-2" />
        <p className="text-base mt-2">
          HTML, CSS, JavaScript (learning), React, Responsive Design, Git, Data Analysis, Python (Basics), Communication, Problem-Solving.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-4">
          {skillData.map((skill) => (
            <div key={skill.name} className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-xs font-bold">{skill.name}</span>
                <span className="text-sm">{skill.level}</span>
              </div>
              <div className="bg-blue-500 h-2.5" style={{ width: skill.level }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
