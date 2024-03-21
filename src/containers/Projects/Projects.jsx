import { useState, useEffect, useContext } from 'react'
import { DarkModeContext } from '../../context/DarkModeContext'
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider'
import Project from '../../components/Project/Project'
import ProjectPopup from '../../components/ProjectPopup/ProjectPopup'
import { projects } from '../../data'

const Projects = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const { darkMode } = useContext(DarkModeContext);


  const openPopup = (image, name, url, description) => {
    setSelectedProject({
      image,
      name,
      url,
      description
    })
    setShowPopup(true);
  };
  
  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 1024;
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
      {showPopup && <ProjectPopup info={selectedProject} onClose={closePopup} />}
      <hr className='border- border-gray-400 rounded-full w-[90%]' />

      <h1 className={`lg:text-6xl text-5xl font-semibold ${darkMode ? "text-black" : "text-white"}`}>My recent work</h1>
      <h3 className={`lg:text-xl text-center ${darkMode ? "text-black" : "text-white"}`}>Here are a few projects I&#39;ve worked on. Want to see more? Email me.</h3>
      {!isSmall ? <div className=" w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => {

          return (
            <Project key={index} showPopup={showPopup} openPopup={() => openPopup(project.image, project.name, project.url, project.description)} image={project.image} name={project.name} url={project.url} descripton={project.description}/>
          )
        })}
      </div> :
        <ProjectsSlider showPopup={showPopup} openPopup={openPopup} />}

    </div>
  )
}

export default Projects