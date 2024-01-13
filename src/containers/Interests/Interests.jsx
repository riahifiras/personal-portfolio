import {useContext} from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import Interest from '../../components/Interest/Interest'
import './Interests.css'
import { robotics, cp, hack, security } from '../../components/Images'

const Interests = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div id='Interests' className={`w-full lg:h-screen flex flex-col justify-around items-center gap-6 lg:gap-0 my-10 ${darkMode ? "bg-white" : "bg-[#16181d]"}`}>
        <h1 className={`text-4xl font-semibold ${darkMode ? "text-black" : "text-white"}`}>Interests</h1>
        <h1 className={`w-5/6 lg:w-1/2 lg:text-3xl text-xl text-center ${darkMode ? "text-black" : "text-white"}`}>
        As a computer science engineering student, I'm passionate about delving into various computer science-related activities outside of my curriculum. These pursuits allow me to explore diverse areas of interest and expand my knowledge and skills beyond the confines of the classroom.
        </h1>
        <div className='w-full lg:flex lg:flex-row grid sm:grid-cols-2 grid-cols-1 lg:justify-center lg:items-center gap-5'>
            <Interest image={robotics} title="Robotics"/>
            <Interest image={cp} title="Competetive Programming"/>
            <Interest image={security} title="Cybersecurity"/>
            <Interest image={hack} title="Hackathons"/>
        </div>
    </div>
  )
}

export default Interests