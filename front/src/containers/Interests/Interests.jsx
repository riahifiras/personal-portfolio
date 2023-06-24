import React from 'react'
import Interest from '../../components/Interest/Interest'
import './Interests.css'
import { robotics, cp, hack, security } from '../../components/Images'

const Interests = () => {
  return (
    <div id='Interests' className='w-full h-screen flex flex-col justify-around items-center'>
        <h1 className='text-4xl font-semibold'>Interests</h1>
        <h1 className='w-1/2 text-3xl text-center'>
        As a computer science engineering student, I'm passionate about delving into various computer science-related activities outside of my curriculum. These pursuits allow me to explore diverse areas of interest and expand my knowledge and skills beyond the confines of the classroom.
        </h1>
        <div className='w-full flex justify-center items-center gap-5'>
            <Interest image={robotics} title="Robotics"/>
            <Interest image={cp} title="Competetive Programming"/>
            <Interest image={security} title="Cybersecurity"/>
            <Interest image={hack} title="Hackathons"/>
        </div>
    </div>
  )
}

export default Interests