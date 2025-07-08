import React from 'react';
import contactImage from '../../assets/images/hero.jpg'; // use your own relevant image

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-black via-[#0f172a] to-[#1e293b] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={contactImage}
            alt="Contact Visual"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl" />
        </div>

        {/* Right Side - Text */}
        <div
          className="w-full md:w-1/2 bg-white/5 border border-white/10 backdrop-blur-md 
                     rounded-2xl shadow-xl p-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-cyan-300">Let’s Work Together</h2>
          <p className="mb-6 text-gray-300 text-lg">
            Available for freelance and collaboration. Ping me below 👇
          </p>
          <a
            href="mailto:yourmail@example.com"
            className="inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 
                       text-white rounded-full font-medium transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
