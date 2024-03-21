import { useState, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import './Interest.css'

const Interest = ({ image, title }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {darkMode} = useContext(DarkModeContext);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = `/slider/${title}`
  };

  return (
    <>
      <div
        className={`w-11/12 lg:w-1/5 h-auto border-2 ${darkMode ? "border-gray-200" : "border-gray-700"} rounded-2xl shadow-lg ${isHovered ? 'hover:scale-105' : ''} transition duration-500 relative mx-auto`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={image}
          alt="image"
          className="rounded-2xl"
          style={isHovered ? { filter: 'contrast(0.7) brightness(0.4)' } : {}}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-0 transition-opacity duration-500">
            <p className="text-white text-2xl font-semibold text-center cursor-default">{title}</p>
            <button className='flex justify-center items-center h-10 w-36 mt-6 rounded-full bg-[#cbd4d4] text-black hover:bg-slate-300 text-md font-semibold transition duration-200 cursor-pointer' onClick={handleClick}>See more</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Interest;
