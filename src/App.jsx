import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const sections = ['home', 'about', 'skills', 'resume', 'projects', 'contact'];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Track scroll for button shadow + active section highlight
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is in view
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('#sidebar') && !e.target.closest('#menu-btn')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="flex min-h-screen bg-[#f4fafd]">
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Hamburger / Close button */}
      <button
        id="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className={`
          fixed top-4 left-4 z-50 w-10 h-10 rounded-xl flex items-center justify-center text-base
          transition-all duration-300
          ${scrolled
            ? 'bg-white text-gray-700 shadow-md hover:shadow-lg'
            : 'bg-white/80 text-gray-700 shadow hover:bg-white'
          }
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div id="sidebar">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection} />
      </div>

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? 'lg:ml-64' : 'ml-0'
        }`}
      >
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contacts /></section>
        <Footer />
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className={`
          fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700
          text-white text-sm flex items-center justify-center shadow-lg
          transition-all duration-300
          ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        ↑
      </button>
    </div>
  );
}

export default App;