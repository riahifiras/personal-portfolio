import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import DarkModeProvider from '../context/DarkModeContext'
import ParticleBackground from '../components/ParticleBackground'
import Header from '../containers/Header/Header'
import Front from '../containers/Front/Front'
import About from '../containers/About/About'
import Interests from '../containers/Interests/Interests'
import Projects from '../containers/Projects/Projects'
import Footer from '../containers/Footer/Footer'


function Home() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
      <Header />
      <ParticleBackground />
      <Front />
      <About />
      <div className={`${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}`}>
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default Home
