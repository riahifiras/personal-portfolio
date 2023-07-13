import { useState } from "react";

const Project = ({image, url, name}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`w-80 h-auto transition duration-500 relative`}
    onMouseEnter={handleHover}
    onMouseLeave={handleMouseLeave}>
      <img
        src={image}
        alt="project"
        className="rounded-xl shadow-lg transition duration-200 cursor-pointer aspect-video object-cover h-48"
        style={isHovered ? { filter: 'contrast(0.7) brightness(0.4)' } : {}}
      />
      {isHovered && (
          <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-0 transition-opacity duration-500">
            <p className="text-white text-3xl font-semibold text-center cursor-default">{name}</p>
            <a className='flex justify-center items-center h-10 w-36 mt-6 rounded-full bg-white text-black hover:bg-slate-300 text-xl font-semibold transition duration-200 cursor-pointer' href={url} target="_blank" rel="noreferrer">See more</a>
          </div>
        )}
    </div>
  );
};

export default Project;
