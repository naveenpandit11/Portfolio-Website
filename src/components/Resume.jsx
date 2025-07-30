import React from 'react';

function Resume() {

  return (
    <section id='resume' className="bg-white m-10" data-aos='fade-up'>
      <div className="px-6 lg:px-10">
        <h1 className="font-medium sm:text-3xl text-2xl">Resume</h1>
        <hr className="w-10 border-blue-500 h-4 border-t-2" />
        <p className="text-1xl">
          Motivated and fast-learning frontend developer passionate about
          creating responsive, user-friendly, and impactful web solutions.
        </p>

        <div>
          <h1 className="font-medium text-2xl mb-2 mt-3">Education</h1>
          <div className="flex items-center mb-[-4px]">
            <div className="flex absolute-left-3 top-1 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
            <h1 className="ml-2 font-medium text-lg">
              Bachelor's In Technology
            </h1>
          </div>
          <div className="flex flex-col gap-y-1 pl-5 pt-2 border-l-2 border-blue-500 ml-2.5 h-[120px] ">
            <h1 className=" text-sm">Computer Science And Engineering</h1>
            <h1 className=" text-sm">(2023 - 2027)</h1>
            <h1 className=" text-sm">Shivalik College Of Engineering,</h1>
            <h1 className=" text-sm">Dehradun, Uttarakhand</h1>
          </div>
          <div className="flex items-center mt-[-4px] mb-[-4px]">
            <div className="flex absolute-left-3 top-1 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
            <h1 className="ml-2 font-medium text-lg">XII (Senior Secondary)</h1>
          </div>
          <div className="flex flex-col gap-y-1 pl-5 pt-2 border-l-2 border-blue-500 ml-2.5 h-[110px] ">
            <h1 className=" text-sm">
              Science (Physics, Chemistry, Mathematics)
            </h1>
            <h1 className=" text-base">2023</h1>
            <h1 className=" text-sm">The Sapience School,</h1>
            <h1 className=" text-sm">Vikasnagar, Dehradun</h1>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-2xl mb-2 mt-3">Certifications & Skills</h1>
          <div className="flex items-center mb-[-4px]">
            <div className="flex absolute-left-3 top-1 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
            <h1 className="ml-2 font-medium text-lg">
              Python Basics
            </h1>
          </div>
          <div className="flex flex-col gap-y-1 pl-5 pt-2 border-l-2 border-blue-500 ml-2.5 h-[90px] ">
            <h1 className=" text-sm">HackerRank</h1>
            <h1 className=" text-sm">Jun 2023</h1>
            <p className=" text-sm font-light">Credendial ID 4000571B58C8</p>
          </div>
          <div className="flex items-center mt-[-4px] mb-[-4px]">
            <div className="flex absolute-left-3 top-1 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
            <h1 className="ml-2 font-medium text-lg">Data Science & Big Data Analytics</h1>
          </div>
          <div className="flex flex-col gap-y-1 pl-5 pt-2 border-l-2 border-blue-500 ml-2.5 h-[90px] ">
            <h1 className=" text-sm">
              Cloud Education
            </h1>
            <h1 className=" text-sm">Aug 2024</h1>
            <p className="font-light text-sm">Credential ID 2039</p>
          </div>
          <div className="flex items-center mt-[-4px] mb-[-4px]">
            <div className="flex absolute-left-3 top-1 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
            <h1 className="ml-2 font-medium text-lg">Data Structure And Algorithms</h1>
          </div>
          <div className="flex flex-col gap-y-1 pl-5 pt-2 border-l-2 border-blue-500 ml-2.5 h-[100px] ">
            <h1 className=" text-sm">Problem Solving with <span className="font-medium text-lg underline">C++</span></h1>
    
            <h1 className=" text-sm">
              Explorin Academy
            </h1>
            
            <h1 className=" text-sm">May 2025</h1>
          </div>
          <div className="flex items-center mt-[-4px] mb-[-4px]">
            <div className="flex absolute-left-3 top-1 w-5 h-5 bg-white border-2 border-blue-500 rounded-full"></div>
            <h1 className="ml-2 font-medium text-lg">Web Devlopment</h1>
          </div>
          <div className="flex flex-col gap-y-1 pl-5 pt-2 border-l-2 border-blue-500 ml-2.5 h-[90px] ">
            <h1 className=" text-sm">HTML, CSS, JavaScript, React</h1>

            <h1 className=" text-sm">
              Explorin Academy
            </h1>
            <h1 className=" text-sm">Dec 2024</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
