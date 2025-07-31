import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
const [isOpen,setIsOpen]=useState(false);
  return (
    
    <div className="flex overflow-hidden">
      <button className='fixed top-4 left-4 text-xl hover:shadow-lg  px-4 py-2 rounded-full shadow-2xl z-50' onClick={()=>setIsOpen(!isOpen)}>
        <FaBars onClick={()=>setIsOpen(!isOpen)}/>
      </button>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="services"><Services /></section>
        <section id="contact"><Contacts /></section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
