import { createContext, useContext, useState } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import Header from '../containers/Header/Header'
import Front from '../containers/Front/Front'
import About from '../containers/About/About'
import Interests from '../containers/Interests/Interests'
import Projects from '../containers/Projects/Projects'
import Footer from '../containers/Footer/Footer'

const ThemeContext = createContext('light');

function Home() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <ParticleBackground />
      <Front />
      <About />
      <div className="bg-white">
        <hr />
        <Interests />
        <hr />
        <Projects />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Home
