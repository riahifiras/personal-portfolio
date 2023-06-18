import React from 'react'
import Offer from '../../components/Offer/Offer'
import ContactLinks from '../../components/ContactLinks/ContactLinks'
import './Footer.css'

const Footer = () => {
  return (
    <div className='bg-blue-700 text-white h-96 w-full'>
        <Offer/>
        <div className='pos flex flex-col ml-auto mr-auto gap-10'>
          <p className='ml-auto mr-auto'>Made with love and passion, :D</p>
          <ContactLinks/>
        </div>
        
    </div>
  )
}

export default Footer