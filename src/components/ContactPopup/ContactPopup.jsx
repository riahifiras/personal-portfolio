import { useState, useEffect, useRef } from 'react';
import { RxCross2 } from "react-icons/rx";

const ContactPopup = ({ onClose }) => {
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
        console.log('Form submitted:', info);
        setInfo({
            name: '',
            email: '',
            object: '',
            message: ''
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md" ref={popupRef}>
                <div className="flex justify-between w-full mb-4">
                    <p className="text-2xl font-semibold text-blue-700">Contact</p>
                    <button
                        className="relative flex justify-center items-center text-lg font-bold h-8 w-8 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition duration-200"
                        onClick={onClose}
                    >
                        <RxCross2 />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        value={info.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="flex justify-center items-center px-2 w-96 h-11 outline-none border-2 rounded-lg focus:border-blue-700"
                    />
                    <input
                        value={info.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="flex justify-center items-center px-2 w-96 h-11 outline-none border-2 rounded-lg focus:border-blue-700"
                    />
                    <input
                        value={info.object}
                        onChange={handleChange}
                        type="text"
                        name="object"
                        placeholder="Object"
                        className="flex justify-center items-center px-2 w-96 h-11 outline-none border-2 rounded-lg focus:border-blue-700"
                    />
                    <textarea
                        value={info.message}
                        onChange={handleChange}
                        name="message"
                        placeholder="Write message here..."
                        className="px-2 w-96 outline-none border-2 rounded-lg resize-none focus:border-blue-700"
                        style={{ height: '180px' }}
                    ></textarea>
                    <div className="flex justify-center">
                        <button type="submit" className="w-96 h-11 text-sm flex justify-center items-center cursor-pointer shadow-md bg-blue-700 text-white rounded-lg hover:bg-blue-600">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPopup;
