import React from 'react'
import Project from '../../components/Project/Project'

const Projects = () => {
  return (
    <div id='Projects' className='flex flex-col justify-around items-center lg:h-screen mb-24 lg:gap-0 gap-6 my-10'>
        <h1 className='text-4xl font-semibold'>My recent work</h1>
        <h3 className='text-xl text-center'>Here are a few projects I've worked on. Want to see more? Email me.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    </div>
  )
}

export default Projects