import React from 'react';
import { image1 } from '../../components/Images';
import './Front.css'


const Front = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  return (
    <div className='w-full h-screen flex justify-evenly items-center flex-col-reverse lg:flex-row'>
      <div className='flex flex-col items-center text-center lg:text-left lg:items-start w-3/4 lg:w-1/3'>
        <h1 className='lg:text-5xl text-3xl font-semibold font-euro'>Hi, I'm Firas Riahi</h1>
        <br />
        <h3 className='lg:text-4xl text-2xl'>Frontend developer, Game developer, and Graphic designer</h3>
        <button onClick={handleDownload} className='flex justify-center items-center h-10 w-36 mt-6 rounded-full bg-blue-700 text-white text-xl font-semibold hover:bg-blue-600 transition duration-200'>Download CV</button>
      </div>
      <img src={image1} alt="" className='size' />
    </div>
  );
};

export default Front;