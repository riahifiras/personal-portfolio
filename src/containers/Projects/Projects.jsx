import { useState, useEffect, useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider'
import Project from '../../components/Project/Project'
import cluedo from '../../assets/cluedo.png'
import tkinter from '../../assets/tkinter.png'
import cheesecake from '../../assets/cheesecake.png'
import stonks from '../../assets/stonks.png'
import { logo } from '../../components/Images'
import robotics3 from '../../assets/robotics3.jpg'

const Projects = () => {
  const [isSmall, setIsSmall] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    console.log("hi");
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
      const isSmallScreen = window.innerWidth <= 910;
      setIsSmall(isSmallScreen);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  return (
    <div id='Projects' className={`${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"} flex flex-col lg:text-center text-left items-center lg:h-screen mb-40 -mt-28 lg:gap-12 gap-6`}>
      <hr className='border- border-gray-400 rounded-full w-[90%]' />

      <h1 className={`lg:text-6xl text-5xl font-semibold ${darkMode ? "text-black" : "text-white"}`}>My recent work</h1>
      <h3 className={`lg:text-xl text-center ${darkMode ? "text-black" : "text-white"}`}>Here are a few projects I&#39;ve worked on. Want to see more? Email me.</h3>
      {!isSmall ? <div className=" w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project image={logo} name={"brika"} url={"https://github.com/riahifiras/recipe-website"} />
        <Project image={tkinter} name={"Stock manager"} url={"https://github.com/riahifiras/stock-managment-app"} />
        <Project image={cluedo} name={"Cluedo"} url={"https://github.com/riahifiras/cluedo"} />
        <Project image={cheesecake} name={"Jben overload"} url={"https://github.com/riahifiras/Jben-overdose"} />
        <Project image={stonks} name={"C-stock-manager"} url={"https://github.com/MedAziz218/Stock-Manager"} />
        <Project image={robotics3} name={"line follower"} url={"https://github.com/MedAziz218/Line-Follower-Arduino-code"} />
        <Project image={cheesecake} name={"Jben overload"} url={"https://github.com/riahifiras/Jben-overdose"} />
        <Project image={stonks} name={"C-stock-manager"} url={"https://github.com/MedAziz218/Stock-Manager"} />
        <Project image={robotics3} name={"line follower"} url={"https://github.com/MedAziz218/Line-Follower-Arduino-code"} />
      </div> :
      <ProjectsSlider/>}
      
    </div>
  )
}

export default Projects