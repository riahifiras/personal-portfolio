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
    <div id='About' className={` translate-y-[100vh] mb-[100vh] ${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}`}>
      <div className='lg:h-[86vh] flex lg:flex-row flex-col lg:gap-10 items-start bg-blue-700 text-white'>
        <div className='flex flex-col text-left lg:pl-40 lg:pr-20 px-10 lg:w-[52%] w-full items h-full lg:gap-10 gap-6 bg-gray-800 lg:py-4 py-4'>
          <h1 className='slide-in-right text-6xl font-semibold flex items-center'>About<span className='text-blue-700'>&nbsp;me</span></h1>
          <div className='slide-in-right flex flex-col lg:gap-10 gap-4'>
            <div className='lg:text-lg text-md'>
              I am currently pursuing a degree in Computer Science Engineering at the National School of Computer Science (ENSI).
            </div>
            <div className='lg:text-lg text-md'>
              Throughout my academic journey, I have actively engaged in diverse projects spanning various domain, constantly challenging myself to enhance my skills.
            </div>
            <div className='lg:text-lg text-md'>
              I am quietly confident, naturally curious, and perpetually working on improving my chops one project at a time.
            </div>
          </div>
        </div>
        <div className='lg:h-full h-[720px] lg:w-[40%] w-full py-4 flex flex-col justify-around items-center pb-28'>
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
