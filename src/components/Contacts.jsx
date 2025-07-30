import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <section id="contacts" className="bg-white m-10 w-[90%]">
      <div className="flex flex-col px-6 lg:px-10">
        <h1 className="font-medium sm:text-3xl text-2xl">Contact</h1>
        <hr className="w-10 border-blue-500 h-4 border-t-2" />
        <p>
          Feel free to reach out for collaborations, project opportunities, or
          just to say hello. I’m always open to connecting and creating
          something awesome together!
        </p>
      </div>
      <div className="grid mt-5 lg:grid-cols-[4fr_5fr] gap-2">
        <div className="flex flex-col gap-3 h-[630px] place-self-center border-1 border- w-[90%] shadow-md hover:shadow-xl transition-shadow duration-300 p-4 bg-white rounded">
          <div className="flex flex-row p-1 items-center hover:border-2 border-blue-500">
            <FaMapMarkerAlt className="text-3xl w-[32px] p-1 h-[32px] text-blue-500 border-2 border-blue-500 rounded-full" />
            <div className="ml-2">
              <h1 className="font-medium">Address</h1>
              <p className="text-sm">Dehradun, Uttarakhand, India</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center hover:border-2 border-blue-500">
            <FaPhoneAlt className="text-2xl w-[32px] p-1 h-[32px] text-blue-500 border-2 border-blue-500 rounded-full" />
            <div className="ml-2">
              <h1 className="font-medium">Call Us</h1>
              <p className="text-sm">+91 94107 88233</p>
            </div>
          </div>
          <div className="flex flex-row p-1 items-center hover:border-2 border-blue-500">
            <FaEnvelope className="text-3xl w-[32px] p-1 h-[32px] text-blue-500 border-2 border-blue-500 rounded-full" />
            <div className="ml-2">
              <h1 className="font-medium">Email Us</h1>
              <p className="text-sm">naveenpandit3559@gmail.com</p>
            </div>
          </div>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3439.8054710063743!2d77.74804499999998!3d30.441615999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI2JzI5LjgiTiA3N8KwNDQnNTMuMCJF!5e0!3m2!1sen!2sin!4v1753446260766!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-[630px] place-self-center border-1 border- w-[90%] shadow-md hover:shadow-xl transition-shadow duration-300 p-4 bg-white rounded">
          <form className="space-y-4">
            <div>
              <label className="block font-raleway font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-raleway font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-raleway font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block font-raleway font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
