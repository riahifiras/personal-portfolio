import { useState, useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import Slider from '../../components/Slider/Slider'
import { robotics } from '../../data'
import { cpc } from '../../data'
import { ctf } from '../../data'
import { cpcIcon, securityIcon, roboticsIcon } from '../../components/Images'
import Interest from '../../components/Interest/Interest'
import './Interests.css'
// import { robotics, cp, hack, security } from '../../components/Images'

const Interests = () => {
  const [interest, setInterest] = useState(cpc);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div id='Interests' className={`w-full lg:h-[92vh] flex flex-col justify-around -translate-y-24 gap-6 lg:gap-0 my-10 ${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}`}>


      <div className='flex flex-col w-full px-40'>
        <div className='flex flex-col items-start gap-8 py-2'>
          <h1 className={`text-6xl font-semibold ${darkMode ? "text-black" : "text-white"}`}>Interests</h1>
          <div className='flex flex-col items-start gap-2'>
            <p className={`text-xl text-left ${darkMode ? "text-black" : "text-white"}`}>
              As a computer science engineering student, I&#39;m passionate about delving into various computer science-related activities outside of my curriculum.
            </p>
            <p className={`text-xl text-left ${darkMode ? "text-black" : "text-white"}`}>
              These pursuits allow me to explore diverse areas of interest and expand my knowledge and skills beyond the confines of the classroom.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[60%] gap-24 px-40 flex justify-around items-center">
        <div className='w-[40%] flex flex-col gap-4 justify-center items-center'>
          <div className={`w-[72%] px-8 gap-12 h-28 rounded-[40px] cursor-pointer shadow-md flex justify-around items-center text-white text-xl font-semibold duration-200 transition-colors ease-in-out ${interest === cpc ? "bg-blue-700" : "bg-gray-800"}`} onClick={() => setInterest(cpc)}>
            <img className='w-16 h-auto' src={cpcIcon} alt="" />
            <h3 className='w-[80%]'>
              Competetive programming
            </h3>
          </div>
          <div className={`w-[72%] px-8 gap-12 h-28 rounded-[40px] cursor-pointer shadow-md flex justify-around items-center text-white text-xl font-semibold duration-200 transition-colors ease-in-out ${interest === ctf ? "bg-blue-700" : "bg-gray-800"}`} onClick={() => setInterest(ctf)}>
            <img className='w-16 h-auto' src={securityIcon} alt="" />
            <h3 className='w-[80%]'>
              Cybersecurity
            </h3>
          </div>
          <div className={`w-[72%] px-8 gap-12 h-28 rounded-[40px] cursor-pointer shadow-md flex justify-around items-center text-white text-xl font-semibold duration-200 transition-colors ease-in-out ${interest === robotics ? "bg-blue-700" : "bg-gray-800"}`} onClick={() => setInterest(robotics)}>
            <img className='w-16 h-auto' src={roboticsIcon} alt="" />
            <h3 className='w-[80%]'>
              Robotics
            </h3>
          </div>
        </div>
        <Slider set={interest} />
      </div>
      {/* <div className='w-full lg:flex lg:flex-row grid sm:grid-cols-2 grid-cols-1 lg:justify-center lg:items-center gap-5'>
            <Interest image={robotics} title="Robotics"/>
            <Interest image={cp} title="Competetive Programming"/>
            <Interest image={security} title="Cybersecurity"/>
            <Interest image={hack} title="Hackathons"/>
        </div> */}
    </div>
  )
}

export default Interests