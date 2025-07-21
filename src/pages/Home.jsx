import React from 'react'
import Hero from '../components/homeComponents/Hero'
import TechStack from '../components/homeComponents/TechStack'
import Project from '../components/homeComponents/Projects'
import ContactCTA from '../components/homeComponents/ContactCTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <div className='min-h-screen bg-black relative'>
  <Hero />
  <TechStack />
  <Project />
  <ContactCTA />

  {/* Back to Top Icon */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-gray-700 via-gray-500 to-gray-800 text-white shadow-lg hover:scale-110 transition-all md:hidden"
    aria-label="Back to Top"
  >
    ⬆️
  </button>
</div>

  )
}

export default Home
