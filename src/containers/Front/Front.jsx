import React from 'react';
import Header from '../Header/Header';
import { me, image1, backgroundImg } from '../../components/Images';
import './Front.css'


const Front = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'src/assets/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImg})`, // Set the URL of your background image
    backgroundSize: 'cover', // You can customize the background size as needed
    backgroundPosition: 'center', // You can customize the background position as needed
  };

  return (
    <div className='w-full h-[100vh] -mt-16 border-red-400' >

      <div className='w-full h-screen flex justify-between items-center flex-col-reverse lg:flex-row relative ' style={backgroundImageStyle}>
        <div className='flex flex-col up lg:ml-36 items-center text-left lg:items-start w-3/4 lg:w-1/2'>
          <h1 className='flex flex-col gap-4 lg:text-7xl text-3xl font-semibold font-euro'>Hi, I'm <br /><span className='whitespace-nowrap name'>Firas <span className='text-blue-600'>Riahi</span></span></h1>
          <br />
          <h3 className='lg:text-4xl text-xl'>Frontend developer, Game developer, and Graphic designer</h3>
          <button onClick={handleDownload} className='flex justify-center items-center h-10 w-36 mt-6 rounded-full bg-blue-700 text-white text-xl font-semibold hover:bg-blue-600 transition duration-200'>Download CV</button>
        </div>
        <img src={me} alt="" className='absolute right-20 -bottom-16 size' />
      </div>
    </div>

  );
};

export default Front;