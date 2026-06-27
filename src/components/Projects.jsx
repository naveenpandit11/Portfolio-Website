import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-Based Communication System to Pitch Job Roles',
    description:
      'Built an AI system to generate personalized job application emails from user profiles and job descriptions. Developed a full-stack platform with React, Node.js, and MongoDB to manage users, job roles, and generated emails.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Groq LLaMA API'],
    github: 'https://github.com/naveenpandit11/AI-Based-Communication-System-to-Pitch-Job-Roles',
    color: 'from-blue-500 to-indigo-600',
    dot: 'bg-blue-500',
  },
  {
    title: 'AI-Based Bharatiya Natya Mudra Recognition System',
    description:
      'Built a real-time Bharatiya Natya Mudra recognition system using MediaPipe and a Random Forest ML model. Developed a Flask API with a Tailwind frontend for live camera-based gesture detection.',
    tags: ['Python', 'MediaPipe', 'Scikit-learn', 'Tailwind CSS', 'JavaScript', 'Flask'],
    github: 'https://github.com/naveenpandit11/NatyaAI',
    color: 'from-emerald-500 to-teal-600',
    dot: 'bg-emerald-500',
  },
  {
    title: 'AI-Integrated Smart Helpdesk',
    description:
      'Developed an AI-integrated smart helpdesk with Node.js, Express.js, and React.js, using LLMs & LangChain to automate support and intelligently route user queries.',
    tags: ['Node.js', 'Express.js', 'React.js', 'LangChain', 'LLMs'],
    github: 'https://github.com/naveenpandit11/helpdesk',
    color: 'from-purple-500 to-violet-600',
    dot: 'bg-purple-500',
  },
  {
    title: '15 Puzzle Game',
    description:
      'Classic sliding 15-puzzle game built for the browser with smooth tile animations, move counter, and win detection.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/naveenpandit11/15-Puzzle-Game',
    color: 'from-amber-500 to-orange-500',
    dot: 'bg-amber-500',
  },
  {
    title: 'Amazon Replica',
    description:
      'A frontend clone of the Amazon shopping experience featuring product listings, cart functionality, and a responsive layout.',
    tags: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/naveenpandit11/amazon-replica',
    color: 'from-yellow-500 to-amber-600',
    dot: 'bg-yellow-500',
  },
  {
    title: 'Blog App',
    description:
      'Full-stack blogging platform where users can create, edit, and delete posts with authentication and a clean reading experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/naveenpandit11/Blog-App',
    color: 'from-pink-500 to-rose-600',
    dot: 'bg-pink-500',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-[#f4fafd]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <hr className="w-12 border-blue-500 border-t-2 mt-1 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <span className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${project.dot}`} />
                  <h3 className="text-base font-semibold text-gray-800 leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 mt-auto"
                >
                  <FaGithub className="text-base" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;