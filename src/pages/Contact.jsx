import React from 'react';
import heroImage from '../assets/images/hero.jpg'; // replace with your image path

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-background via-background/50 to-primary/20 text-foreground flex justify-center items-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary/10 backdrop-blur-2xl rounded-xl p-8 shadow-2xl">
        
        {/* LEFT - Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Let’s Connect
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-foreground/10 text-foreground px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300 placeholder-white/70
                           hover:animate-pulse"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-foreground/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300 placeholder-white/70
                          hover:animate-pulse"
              />
            </div>
            <div className="relative">
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-foreground/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300 placeholder-white/70
                           hover:animate-pulse resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-accent text-foreground font-semibold hover:bg-secondary transition duration-300
                        hover:animate-pulse]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - Image (hidden on small) */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={heroImage}
            alt="Contact Hero"
            className="rounded-lg shadow-lg max-h-[500px] object-cover hover:animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
