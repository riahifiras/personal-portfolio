import { useRef, useEffect, useContext } from "react";
import { DarkModeContext } from '../../context/DarkModeContext'
import { RxCross2 } from "react-icons/rx";

const ProjectPopup = ({ info, onClose }) => {
    const { darkMode } = useContext(DarkModeContext);
    const popupRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="flex bg-white lg:flex-row flex-col lg:h-[540px] h-[80vh] lg:w-[1000px] w-[80%] rounded-lg" ref={popupRef}>
                <div className="lg:h-540px h-[100%] w-full relative">
                    <img className="lg:h-[540px] h-full object-cover lg:rounded-l-lg rounded-t-lg lg:w-[600px] w-full" src={info.image} alt="" />
                    <button
                        className="lg:hidden absolute right-4 top-4 flex justify-center items-center text-xl font-bold h-8 w-8 text-black rounded-full"
                        onClick={onClose}
                    >
                        <RxCross2 />
                    </button>
                </div>

                <div className={`w-full h-full lg:rounded-r-lg rounded-b-lg p-4 flex flex-col gap-8 ${darkMode ? "text-black" : "text-white"} ${darkMode ? "bg-[#cbd4d4]" : "bg-[#16181d]"}`}>
                    <div className="flex justify-between w-full">
                        <p className="text-xl font-semibold">{info.name}</p>
                        <button
                            className="lg:relative hidden lg:flex justify-center items-center text-xl font-bold h-8 w-8 rounded-full"
                            onClick={onClose}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <p className="text-left text-lg">{info.description}</p>
                    <div className="flex gap-2">
                        <button className="bg-blue-700 shadow-lg text-white rounded-full h-8 w-24">View demo</button>
                        <button className="bg-blue-700 shadow-lg text-white rounded-full h-8 w-24" onClick={() => window.open(info.url)}>See more</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectPopup;
