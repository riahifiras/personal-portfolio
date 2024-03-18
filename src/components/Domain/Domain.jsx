import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../../containers/About/About.css";

const Domain = ({ index, icon, title, tools, description }) => {
  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0, // Adjust the threshold as needed
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [divRef]);

  useEffect(() => {
    if (isVisible) {
      setIsClicked(false); // Ensure dropdown is hidden when component becomes visible
    }
  }, [isVisible]);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div
      className={`w-[90%] flex flex-col my-1 flex-grow shadow-lg cursor-pointer bg-gray-800 text-white rounded-[40px] hover:shadow-xl relative ${
        isVisible ? `slide-in-left2` : ""
      }`}
      ref={divRef}
    >
      <div
        className={`flex justify-between items-center px-10 w-full h-[132px] absolute`}
        onClick={handleDropdownToggle}
      >
        <img src={icon} alt="" className="h-16 w-auto" />
        <h1 className="w-[70%] font-semibold text-xl">{title}</h1>
        <div className="relative">
          <IoIosArrowDown
            className={`text-2xl transition-transform ${
              isClicked ? "-rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-h duration-500 ${
          isClicked ? "max-h-[132px]" : "max-h-0"
        } translate-y-[100px] w-full`}
      >
        <p className="px-10 pb-2 text-sm">{description}</p>
        <h2 className="px-10 pb-2 text-md">Tools i use</h2>
        <div className="px-10 pb-20 flex gap-2 w-full">
          {tools.map((pic, index) => {
            return <img key={index} className="w-8 h-auto" src={pic} alt="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Domain;
