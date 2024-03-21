import { useState, useEffect, useRef, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext'
import { RxCross2 } from "react-icons/rx";

const ContactPopup = ({ onClose }) => {
    const { darkMode } = useContext(DarkModeContext);
    const popupRef = useRef(null);
    const [info, setInfo] = useState({
        name: '',
        email: '',
        object: '',
        message: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo({
            name: '',
            email: '',
            object: '',
            message: ''
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className={`rounded-lg p-8 w-[90vw] lg:max-w-md ${darkMode ? "text-black bg-[#cbd4d4]" : "text-white bg-[#16181d]"}`} ref={popupRef}>
                <div className="flex justify-between w-full mb-4">
                    <p className="text-2xl font-semibold text-blue-700">Contact</p>
                    <button
                        className={`relative flex justify-center items-center text-lg font-bold h-8 w-8 rounded-full ${darkMode ? "text-black bg-[#cbd4d4]" : "text-white bg-[#16181d]"}`}
                        onClick={onClose}
                    >
                        <RxCross2 />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
                    <input
                        value={info.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className={`flex justify-center items-center p-2 w-full h-11 outline-none rounded-lg border-2 ${darkMode ? "border-[#e5e7eb] bg-white" : "border-gray-700 bg-gray-800"} focus:border-blue-700`}
                    />
                    <input
                        value={info.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className={`flex justify-center items-center p-2 w-full h-11 outline-none rounded-lg border-2 ${darkMode ? "border-[#e5e7eb] bg-white" : "border-gray-700 bg-gray-800"} focus:border-blue-700`}
                    />
                    <input
                        value={info.object}
                        onChange={handleChange}
                        type="text"
                        name="object"
                        placeholder="Object"
                        className={`flex justify-center items-center p-2 w-full h-11 outline-none rounded-lg border-2 ${darkMode ? "border-[#e5e7eb] bg-white" : "border-gray-700 bg-gray-800"} focus:border-blue-700`}
                    />
                    <textarea
                        value={info.message}
                        onChange={handleChange}
                        name="message"
                        placeholder="Write message here..."
                        className={`h-[180px] ${darkMode ? "border-[#e5e7eb] bg-white" : "border-gray-700 bg-gray-800"} p-2 w-full outline-none border-2 rounded-lg resize-none focus:border-blue-700`}
                    ></textarea>
                    <div className="flex justify-center w-full">
                        <button type="submit" className="w-full h-11 text-sm flex justify-center items-center cursor-pointer shadow-md bg-blue-700 text-white rounded-lg hover:bg-blue-600">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPopup;
