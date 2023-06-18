import React from 'react';
import { image1 } from '../../components/Images';

const Front = () => {
  return (
    <div className='w-full h-screen flex justify-evenly items-center flex-col-reverse sm:flex-row'>
      <div className='flex-col items-start w-9/12 sm:w-1/3'>
        <h1 className='text-5xl font-semibold font-euro'>Hi, I'm Firas Riahi</h1>
        <br />
        <h3 className='text-4xl'>Frontend developer, Game developer, and Graphic designer</h3>
        <button className='flex justify-center items-center h-10 w-36 mt-6 rounded-lg bg-blue-700 text-white text-xl font-semibold hover:bg-blue-600'>Download CV</button>
      </div>
      <img src={image1} alt="" className='w-9/12 sm:w-1/3 h-auto' />
    </div>
  );
};

export default Front;