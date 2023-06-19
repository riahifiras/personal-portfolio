import React from 'react'
import './ContactLinks.css'
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ContactLinks = () => {
  return (
    <nav className='flex flex-row justify-between items-center ml-auto mr-auto w-96'>
        <button className='contact-link'><FaTwitter className='w-5 h-5' /></button>
        <button className='contact-link'><FaFacebook className='w-5 h-5' /></button>
        <button className='contact-link'><FaLinkedin className='w-5 h-5' /></button>
        <button className='contact-link'><FaGithub className='w-5 h-5' /></button>
        <button className='contact-link'><FaEnvelope className='w-5 h-5' /></button>
    </nav>
  )
}

export default ContactLinks