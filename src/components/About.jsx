import React from "react";
import profile from '/src/assets/IMG_20250626_121425 (1).jpg'
function About() {
  return (
    <section id="about" className="bg-white m-10 ">
      <div className="flex flex-col px-6 lg:px-10">
        <h1 className="font-medium sm:text-3xl text-2xl">About</h1>
        <hr className="w-10 border-blue-500 h-4 border-t-2" />
        <p className="text-base">
          I’m an aspiring frontend developer with solid skills in HTML, CSS, and
          basic knowledge of React, focused on building clean, responsive web
          pages. While still learning JavaScript in depth, I’m a fast learner
          passionate about creating interactive web experiences. I’ve built
          projects with strong layouts and cross-device compatibility and am
          eager to grow, collaborate, and contribute to impactful solutions.
        </p>
        <br />
        <div className="flex lg:flex-row flex-col">
          <img
            className="h-[50vh] place-self-center rounded-[20%] p-5 border-red-500 border-3"  
            src={profile}
            alt="profile-pic"
          />
          <div className="lg:ml-5 mt-6">
            <h2 className="underline text-2xl font-medium">
              Web Developer & Data Structure.
            </h2>
            <p className="mt-3">
              Aspiring web developer and data science enthusiast skilled in
              HTML, CSS, React, and data analysis, passionate about building
              interactive websites and solving real-world problems with data.
            </p>
            <div className=" lg:grid grid-cols-2 mt-2"> 
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Birthday:</h1><p className="mt-1">11 Dec 2004</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Website:</h1><p className="mt-1">www.example.com</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Phone:</h1><p className="mt-1">+91 94107 88233</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">City:</h1><p className="mt-1">Dehradun, Uttarakhand, India</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Age:</h1><p className="mt-1">20</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Degree:</h1><p className="mt-1">Bachelor's</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Email:</h1><p className="mt-1">naveenpandit3559@gmail.com</p></div>
                <div className="flex items-center gap-x-1 "><span className="text-blue-600 text-2xl">{">"}</span><h1 className="font-bold mt-1">Freelance:</h1><p className="mt-1">Available</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
