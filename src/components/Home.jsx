import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] bg-[url('/src/assets/image.jpg')] bg-cover bg-center overflow-hidden"
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

      {/* Subtle animated grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-24 max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-blue-400" />
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
            Welcome to my portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Naveen <span className="text-blue-400">Pandit</span>
        </h1>

        {/* Animated role */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-gray-300 text-lg sm:text-xl font-medium">I'm a</span>
          <span className="text-white text-lg sm:text-xl font-semibold">
            <TypeAnimation
              sequence={[
                'Frontend Developer', 1500,
                'UI Designer', 1500,
                'Tech Enthusiast', 1500,
                'Problem Solver', 1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>

        {/* Short bio */}
        <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed mb-8">
          Building clean, responsive web experiences with React & modern CSS.
          Passionate about turning ideas into elegant digital solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-600/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaGithub className="text-base" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaLinkedin className="text-base" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-200 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <FaArrowDown className="text-xs animate-bounce" />
      </a>
    </section>
  );
}

export default Home;