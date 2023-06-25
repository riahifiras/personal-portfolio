import React from 'react'

import './Offer.css'

const Offer = () => {
  return (
    <div className='flex sm:flex-row bg-gray-800 text-white rounded-3xl shadow-md justify-around items-center w-11/12 lg:w-3/5 lg:h-52 ml-auto mr-auto negative flex-col py-6'>
        <h1 className='text-3xl font-semibold w-5/6 sm:w-1/4 text-center'>Start a project?</h1>
        <h3 className='text-xl w-5/6 sm:w-1/4 text-center'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</h3>
        <button className='flex justify-center items-center h-10 w-40 mt-6 rounded-full bg-teal-400 text-white text-xl font-semibold hover:bg-teal-500 transition duration-200'>Get in touch</button>
    </div>
  )
}

export default Offer