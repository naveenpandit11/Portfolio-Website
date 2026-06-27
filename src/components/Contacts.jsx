import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Dehradun, Uttarakhand, IN",
    href: null,
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+91 94107 88233",
    href: "tel:+919410788233",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "naveenpandit3559@gmail.com",
    href: "mailto:naveenpandit3559@gmail.com",
    color: "from-purple-500 to-violet-600",
  },
];

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_w6wfy7i",
        "template_z6cwe3e",
        form.current,
        "hmEjvJla_1LtYhhog"
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#f4fafd] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <hr className="w-12 border-blue-500 border-t-2 mt-1 mb-3" />
        <p className="text-gray-500 text-sm mb-10 max-w-xl">
          Have a project in mind or just want to say hi? Fill out the form and I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactDetails.map(({ icon, label, value, href, color }) => {
              const Inner = (
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-4 p-5 border border-gray-100">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white text-base flex-shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
                    <p className="text-gray-700 text-sm font-medium">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href}>{Inner}</a>
              ) : (
                <div key={label}>{Inner}</div>
              );
            })}

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-1 min-h-[200px]">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2669.5094153071045!2d77.7418690744007!3d30.4388019747274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI2JzE5LjciTiA3N8KwNDQnNDAuMCJF!5e1!3m2!1sen!2sin!4v1753944346426!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "200px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Send a Message</h3>
            <div className="w-8 h-0.5 bg-blue-500 mb-6" />

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-[#f4fafd] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-[#f4fafd] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-[#f4fafd] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-[#f4fafd] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  ❌ Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}