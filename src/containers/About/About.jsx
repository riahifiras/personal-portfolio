import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import Domain from '../../components/Domain/Domain';
import domains from '../../assets/data';
import './About.css'

const About = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showDomains, setShowDomains] = useState(false);

  useEffect(() => {
    setShowDomains(true); // Set to true to trigger animation on initial load
  }, []);

  return (
    <div id='About' className={`lg:h-screen translate-y-[100vh] mb-[100vh] ${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}`}>
      <div className='lg:h-[86vh] almost flex gap-10 items-start bg-blue-700 text-white'>
        <div className='flex flex-col justify-center text-left pl-40 pr-20 w-[52%] items h-full gap-20 bg-gray-800'>
          <h1 className='slide-in-right text-8xl font-semibold flex items-center'>About<span className='text-blue-700'>&nbsp;me</span></h1>
          <div className='slide-in-right flex flex-col gap-10'>
            <div className='lg:text-3xl text-xl'>
              I am currently pursuing a degree in Computer Science Engineering at the National School of Computer Science (ENSI).
            </div>
            <div className='lg:text-3xl text-xl'>
              Throughout my academic journey, I have actively engaged in diverse projects spanning various domain, constantly challenging myself to enhance my skills.
            </div>
            <div className='lg:text-3xl text-xl'>
              I am quietly confident, naturally curious, and perpetually working on improving my chops one project at a time.
            </div>
          </div>
        </div>
        <div className='h-full w-[40%] py-4 flex flex-col justify-around items-center'>
          {showDomains &&
            domains.map(({ id, icon, title, tools, description }, index) => (
              <Domain
                key={id}
                index={index+1}
                icon={icon}
                title={title}
                tools={tools}
                description={description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
