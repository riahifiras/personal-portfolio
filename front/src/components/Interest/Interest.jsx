import React from 'react'

const Interest = ({image}) => {
  return (
    <div className='w-1/5 h-auto border-2 rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer'>
        <img src={image} alt="image" className='rounded-2xl hover:contrast-[0.5] transition duration-200'/>
    </div>
  )
}

export default Interest