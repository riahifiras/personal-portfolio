import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import './Navbar.css';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -80; // Adjust this value to set the offset from the top
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className='flex items-center mr-40 gap-10 text-[1.6rem] font-semibold'>
                <a className="nav" href="#Home" onClick={(e) => handleClick(e, "Home")}>Home</a>
                <a className="nav" href="#About" onClick={(e) => handleClick(e, "About")}>About</a>
                <a className="nav" href="#Interests" onClick={(e) => handleClick(e, "Interests")}>Interests</a>
                <a className="nav" href="#Projects" onClick={(e) => handleClick(e, "Projects")}>Projects</a>
                <a className="nav" href="#Contact" onClick={(e) => handleClick(e, "Contact")}>Contact</a>
                <button className="flex justify-center items-center text-3xl shadow-2xl rounded-full bg-blue-700 h-12 w-12 text-white transition duration-300 ease-in-out relative" onClick={toggleDarkMode}>{darkMode ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}</button>
            </div>
        </div>
    );
};

export default Navbar;
