import { useState } from 'react';
import ContactPopup from '../ContactPopup/ContactPopup'; // Import the ContactPopup component
import './Offer.css'

const Offer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="flex lg:gap-0 gap-4 sm:flex-row bg-gray-800 text-white rounded-3xl shadow-md justify-around items-center w-11/12 lg:w-3/5 lg:h-36 ml-auto mr-auto negative flex-col py-6">
        <h1 className="text-xl font-semibold w-5/6 sm:w-1/4 text-center">
          Start a project?
        </h1>
        <h3 className="text-md w-5/6 sm:w-1/4 text-center">
          Interested in working together? We should queue up a time to chat. I’ll
          buy the coffee.
        </h3>
        <button
          onClick={togglePopup}
          className="flex justify-center items-center h-10 w-40 mt-6 rounded-full bg-blue-700 text-white text-md font-semibold transition duration-200"
        >
          Get in touch
        </button>
      </div>
      {showPopup && <ContactPopup onClose={togglePopup} />} {/* Render ContactPopup if showPopup is true */}
    </>

  );
};

export default Offer;
