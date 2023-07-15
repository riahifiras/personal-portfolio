import React from 'react'
import './ContactLinks.css'
import { FaTwitter, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const ContactLinks = () => {
  return (
    <nav className='flex flex-row justify-between items-center ml-auto mr-auto w-72 lg:w-96 mb-6'>
        <button onClick={() => window.open("https://www.facebook.com/riahi.firas.505/", "_blank")} className='contact-link'><FaFacebook className='w-5 h-5' /></button>
        <button onClick={() => window.open("https://www.linkedin.com/in/firas-riahi-200346246/", "_blank")} className='contact-link'><FaLinkedin className='w-5 h-5' /></button>
        <button onClick={() => window.open("https://github.com/riahifiras", "_blank")} className='contact-link'><FaGithub className='w-5 h-5' /></button>
        <button onClick={() => window.location.pathname = "/contact"} className='contact-link'><FaEnvelope className='w-5 h-5' /></button>
    </nav>
  )
}

export default ContactLinks