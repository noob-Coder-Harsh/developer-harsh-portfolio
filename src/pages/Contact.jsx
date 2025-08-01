import React from 'react';
import heroImage from '../assets/images/hero.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/60 to-primary/10 text-foreground px-4 py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_-10px_rgba(0,255,255,0.3)] transition-all">

        {/* LEFT - Contact Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">Let’s Connect</h2>
          <p className="text-sm text-white/70 mb-8">
            Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div className="relative group">
              <input
                type="text"
                required
                className="peer w-full px-4 pt-6 pb-2 bg-white/10 text-white placeholder-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-md transition-all"
                placeholder="Your Name"
              />
              <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative group">
              <input
                type="email"
                required
                className="peer w-full px-4 pt-6 pb-2 bg-white/10 text-white placeholder-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-md transition-all"
                placeholder="Your Email"
              />
              <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative group">
              <textarea
                rows="4"
                required
                className="peer w-full px-4 pt-6 pb-2 bg-white/10 text-white placeholder-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 backdrop-blur-md transition-all resize-none"
                placeholder="Your Message"
              />
              <label className="absolute left-4 top-2 text-white/70 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300">
                Your Message
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - Hero Image */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={heroImage}
            alt="Contact Visual"
            className="rounded-2xl max-h-[500px] shadow-lg shadow-cyan-400/10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
