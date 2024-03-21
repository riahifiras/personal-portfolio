import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext"

const DropDownMenu = ({ toggle, showMenu }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <ul className={`fixed w-screen mx-0 inset-0 top-20 flex-col bg-[#1f2937] justify-center items-center text-black z-50 transition-all duration-300 ease-in-out overflow-hidden ${showMenu ? "max-h-[320px]" : "max-h-0 invisible"}`}>
      <li onClick={toggle} className={`flex justify-center w-full text-md font-semibold items-center h-16 bg-[#1f2937] text-white`}><a className="w-full h-full flex justify-center items-center" href="#Home">Home</a></li>
      <li onClick={toggle} className={`flex justify-center w-full text-md font-semibold items-center h-16 bg-[#1f2937] text-white`}><a className="w-full h-full flex justify-center items-center" href="#About">About</a></li>
      <li onClick={toggle} className={`flex justify-center w-full text-md font-semibold items-center h-16 bg-[#1f2937] text-white`}><a className="w-full h-full flex justify-center items-center" href="#Interests">Interests</a></li>
      <li onClick={toggle} className={`flex justify-center w-full text-md font-semibold items-center h-16 bg-[#1f2937] text-white`}><a className="w-full h-full flex justify-center items-center" href="#Projects">Projects</a></li>
      <li onClick={toggle} className={`flex justify-center w-full text-md font-semibold items-center h-16 bg-[#1f2937] text-white`}><a className="w-full h-full flex justify-center items-center" href="#Contact">Contact</a></li>
    </ul>
  );
};

export default DropDownMenu;
