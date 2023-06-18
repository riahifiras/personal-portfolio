import React from 'react'
import Skill from '../../components/Skill/Skill'
import skills from './assets';

const Skills = () => {
  return (
    <div className='flex flex-row justify-center items-start py-6 h-4/6 w-7/12 rounded-3xl bg-white'>
        {skills.map(({id, icon, title, desc, app, title1, title2, tools}) => {
            return(
                <Skill key={id} icon={icon} title={title} description={desc} applications={app} title1={title1} title2={title2} tools={tools}/>
            )
        })}
    </div>
  )
}

export default Skills