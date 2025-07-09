import React from 'react'
import Hero from '../components/homeComponents/Hero'
import TechStack from '../components/homeComponents/TechStack'
import Project from '../components/homeComponents/Projects'
import ContactCTA from '../components/homeComponents/ContactCTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <TechStack />
      <Project />
      <ContactCTA />
    </div>
  )
}

export default Home
