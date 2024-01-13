import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import './Navbar.css'

const Navbar = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    
    return (
        <div>
            <div className='flex items-center mr-40 gap-10 text-[1.6rem] font-semibold'>
                <a className="nav" href="#About">About</a>
                <a className="nav" href="#Interests">Interests</a>
                <a className="nav" href="#Projects">Projects</a>
                <a className="nav" href="#Contact">Contact</a>
                <button className="flex justify-center items-center text-3xl shadow-2xl rounded-full bg-blue-700 h-12 w-12 text-white transition duration-300 ease-in-out relative" href="#Contact" onClick={toggleDarkMode}>{darkMode ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}</button>
            </div>
        </div>
        
    );
};

export default Navbar;