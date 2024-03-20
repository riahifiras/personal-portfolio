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


      <div className='flex flex-col w-full lg:px-40 px-10'>
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
      <div className="w-full h-[60%] lg:gap-24 gap-10 lg:px-40 flex lg:flex-row flex-col-reverse justify-around items-center">
        <div className='lg:w-[40%] flex lg:flex-col gap-2 lg:justify-center justify-between items-center'>
          <div className={`xl:w-[72%] lg:w-[100%] w-[110px] lg:text-left text-center lg:px-8 lg:gap-12 h-[110px] lg:h-28 rounded-[40px] cursor-pointer shadow-md flex lg:flex-row flex-col justify-center lg:justify-around items-center text-white lg:text-xl text-sm lg:font-semibold duration-200 transition-colors ease-in-out ${interest === cpc ? "bg-blue-700" : "bg-gray-800"}`} onClick={() => setInterest(cpc)}>
            <img className='lg:w-16 w-12 h-auto' src={cpcIcon} alt="" />
            <h3 className='w-[80%]'>
              Competetive programming
            </h3>
          </div>
          <div className={`xl:w-[72%] lg:w-[100%] w-[110px] lg:text-left text-center lg:px-8 lg:gap-12 h-[110px] lg:h-28 rounded-[40px] cursor-pointer shadow-md flex lg:flex-row flex-col justify-center lg:justify-around items-center text-white lg:text-xl text-sm lg:font-semibold duration-200 transition-colors ease-in-out ${interest === ctf ? "bg-blue-700" : "bg-gray-800"}`} onClick={() => setInterest(ctf)}>
            <img className='lg:w-16 w-12 h-auto' src={securityIcon} alt="" />
            <h3 className='w-[80%]'>
              Cybersecurity
            </h3>
          </div>
          <div className={`xl:w-[72%] lg:w-[100%] w-[110px] lg:text-left text-center lg:px-8 lg:gap-12 h-[110px] lg:h-28 rounded-[40px] cursor-pointer shadow-md flex lg:flex-row flex-col justify-center lg:justify-around items-center text-white lg:text-xl text-sm lg:font-semibold duration-200 transition-colors ease-in-out ${interest === robotics ? "bg-blue-700" : "bg-gray-800"}`} onClick={() => setInterest(robotics)}>
            <img className='lg:w-16 w-12 h-auto' src={roboticsIcon} alt="" />
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