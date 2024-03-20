import { useState, useEffect, useContext } from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { DarkModeContext } from "../../context/DarkModeContext"
import { me } from '../../components/Images';
import './Front.css'


const Front = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const {darkMode} = useContext(DarkModeContext);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);

    // Calculate the scroll position based on viewport height
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const scrollThreshold = 100 * vh / 100; // Change 100 to the desired percentage

    if (currentPosition > scrollThreshold) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <div id='Home'>
      {!scrolling ? (
        <div className='w-full h-screen -mt-20 fixed'>
          <div className='w-full h-screen translate-y-24 lg:translate-y-0 flex justify-between items-center flex-col lg:flex-row relative'>
            <div className='flex flex-col lg:ml-40 items-center text-left lg:items-start lg:w-1/2 lg:slide-in-right'>
              <h1 className='flex flex-col lg:gap-4 gap-8 lg:text-5xl md:text-3xl text-2xl font-semibold font-euro unselectable'><span className={darkMode ? "text-black" : "text-white"}>Hi, I&#39;m</span><span className='whitespace-nowrap 2xl:text-[140px] xl:text-[120px] lg:[110px] md:text-[100px] text-[60px] lg:mb-0 mb-4'><span className={darkMode ? "text-black" : "text-white"}>Firas </span><span className='text-blue-700'>Riahi</span></span></h1>
              <br />
              <h3 className='unselectable lg:text-2xl text-xl font-[500] w-full'>
              <span className={darkMode ? "text-black" : "text-white"}>I am a</span>
                <span className='text-blue-700'>
                  <Typewriter
                    words={[' Web developer', ' Game developer', ' Graphic designer', ' CAD designer']}
                    loop={true}
                  />
                </span>
                <Cursor />
              </h3>
              <button onClick={handleDownload} className='unselectable z-30 flex justify-center items-center h-10 w-36 mt-6 rounded-full bg-blue-700 text-white text-md font-semibold hover:bg-blue-600 transition duration-200'>Download CV</button>
            </div>
            <img src={me} alt="" className='unselectable  -translate-y-20 lg:-translate-y-0 absolute lg:right-40 -bottom-16 custom-height-responsive xl:h-[740px] lg:h-[600px] w-auto' />
          </div>
        </div>
      ) : (
        <div className='w-full relative bg-[#cbd4d4]'></div>
      )}

    </div>
  );

};

export default Front;