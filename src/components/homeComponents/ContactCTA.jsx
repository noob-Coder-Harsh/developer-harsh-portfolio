import React from 'react';
import contactImage from '../../assets/images/hero.jpg'; // use your own relevant image

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 bg-gradient-to-b from-background via-background/50 to-primary/20 text-foreground"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={contactImage}
            alt="Contact Visual"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-background/40 rounded-2xl" />
        </div>

        {/* Right Side - Text */}
        <div
          className="w-full md:w-1/2 bg-foreground/5 border border-foreground/10 backdrop-blur-md 
                     rounded-2xl shadow-xl p-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-secondary">Let’s Work Together</h2>
          <p className="mb-6 text-accent text-lg">
            Available for freelance and collaboration. Ping me below 👇
          </p>
          <a
            href="mailto:yourmail@example.com"
            className="inline-block px-6 py-3 bg-secondary hover:bg-accent
                       text-foreground rounded-full font-medium transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
