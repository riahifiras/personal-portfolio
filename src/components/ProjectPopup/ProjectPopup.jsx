import { useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { robotics } from "../../components/Images"

const ProjectPopup = ({ onClose }) => {
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
            <div className="flex bg-white h-[540px] w-[1000px] rounded-lg" ref={popupRef}>
                <img className="h-[540px] rounded-l-lg w-auto" src={robotics} alt="" />
                <div className="w-full px-4 pt-4 flex flex-col gap-8">
                    <div className="flex justify-between w-full">
                        <p className="text-xl">Line follower</p>
                        <button
                            className="relative flex justify-center items-center text-2xl font-bold h-8 w-8 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition duration-200"
                            onClick={onClose}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, nemo eius, magnam animi ea itaque sit at placeat quam laborum nihil tempora, aperiam ullam assumenda. Maxime perspiciatis soluta eveniet maiores.</p>
                    <div className="flex gap-2">
                        <button className="bg-slate-200 rounded-full h-8 w-24">View demo</button>
                        <button className="bg-slate-200 rounded-full h-8 w-24">See more</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectPopup;
