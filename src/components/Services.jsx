import React from 'react';
import { FaPuzzlePiece, FaLaptopCode, FaRedoAlt, FaFileAlt, FaUser, FaBug } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
    title: 'Responsive Website Design',
    description: 'Creating clean, modern, and mobile-friendly websites using HTML, CSS, and React.',
  },
  {
    icon: <FaRedoAlt className="text-green-500 text-3xl" />,
    title: 'Website Redesign & UI Improvements',
    description: 'Enhancing the look and feel of existing websites for better user experience and consistency.',
  },
  {
    icon: <FaFileAlt className="text-purple-500 text-3xl" />,
    title: 'Landing Page Development',
    description: 'Building fast and effective landing pages for products, services, or promotions.',
  },
  {
    icon: <FaUser className="text-pink-500 text-3xl" />,
    title: 'Portfolio or Personal Website Setup',
    description: 'Helping individuals or creatives build their own portfolios or personal brand websites.',
  },
  {
    icon: <FaBug className="text-red-500 text-3xl" />,
    title: 'Bug Fixing & Frontend Debugging',
    description: 'Identifying and fixing layout, responsiveness, and browser compatibility issues.',
  },
  {
    icon: <FaPuzzlePiece className='text-green-500 text-3xl'/>,
    title:'Custom Components & UI Elements',
    description: 'Building reusable and interactive components using React for faster and scalable development.',
  },
];

const Services = () => {
  return (
    <section id='services' className="py-12 px-6 bg-[#f4fafd]">
      <h2 className="text-3xl font-bold ml-10 text-gray-800">Services</h2>
      <hr className="w-12 border-blue-500 ml-10 h-9 border-t-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white rounded-xl p-6 shadow transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
