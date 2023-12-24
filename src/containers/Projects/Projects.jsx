import React from 'react'
import Project from '../../components/Project/Project'
import cluedo from '../../assets/cluedo.png'
import tkinter from '../../assets/tkinter.png'
import cheesecake from '../../assets/cheesecake.png'
import stonks from '../../assets/stonks.png'
import { logo } from '../../components/Images'
import robotics3 from '../../assets/robotics3.jpg'

const Projects = () => {
  return (
    <div id='Projects' className='flex flex-col  items-center lg:h-screen mb-24 lg:gap-24 gap-6 my-10'>
        <h1 className='lg:text-7xl font-semibold'>My recent work</h1>
        <h3 className='lg:text-3xl text-center'>Here are a few projects I've worked on. Want to see more? Email me.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project image={logo} name ={"brika"} url={"https://github.com/riahifiras/recipe-website"}/>
            <Project image={tkinter} name ={"Stock manager"} url={"https://github.com/riahifiras/stock-managment-app"}/>
            <Project image={cluedo} name ={"Cluedo"} url={"https://github.com/riahifiras/cluedo"}/>
            <Project image={cheesecake} name ={"Jben overload"} url={"https://github.com/riahifiras/Jben-overdose"}/>
            <Project image={stonks} name ={"C-stock-manager"} url={"https://github.com/MedAziz218/Stock-Manager"}/>
            <Project image={robotics3} name ={"line follower"} url={"https://github.com/MedAziz218/Line-Follower-Arduino-code"}/>
        </div>
    </div>
  )
}

export default Projects