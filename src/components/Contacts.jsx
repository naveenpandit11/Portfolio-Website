import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w6wfy7i", // Your service ID
        "template_z6cwe3e", // Your template ID
        form.current,
        "hmEjvJla_1LtYhhog" // Your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Error sending message.");
        }
      );
  };

  return (
    <div className="bg-gray-100 py-10 px-4 lg:px-20" id="contact">
      <h2 className="text-3xl font-semibold text-center mb-10">Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-blue-500 text-xl" />
            <p className="text-gray-700">Dehradun, Uttarakhand, IN</p>
          </div>
          <div className="flex items-center gap-4 p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaPhoneAlt className="text-blue-500 text-xl" />
            <p className="text-gray-700">+91 94107 88233</p>
          </div>
          <div className="flex items-center gap-4 p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-blue-500 text-xl" />
            <p className="text-gray-700">naveenpandit3559@gmail.com</p>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2669.5094153071045!2d77.7418690744007!3d30.4388019747274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI2JzE5LjciTiA3N8KwNDQnNDAuMCJF!5e1!3m2!1sen!2sin!4v1753944346426!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow"
          ></iframe>
        </div>

        <div className="bg-white p-6 shadow-md rounded-lg">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
