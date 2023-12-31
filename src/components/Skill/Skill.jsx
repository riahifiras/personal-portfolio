const Skill = ({icon, title, description, title1,  applications, title2, tools}) => {
  return (
    <div className='h-full w-11/12 lg:w-1/3 px-4 border-b-2 lg:border-l-2 lg:border-b-0 flex flex-col justify-start items-center text-black text-center gap-4 lg:py-0 py-6'>
        <img src={icon} alt="icon" className='w-24 h-auto'/>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='max-h-64'>{description}</p>
        <h3 className='text-lg font-semibold'>{title1}</h3>
        <ul>
            {
                applications.map((app ,index) => {
                    return(
                        <li key={index}>{app}</li>
                    )
                })
            }
        </ul>
        <h3 className='text-lg font-semibold'>{title2}</h3>
        <ul>
            {
                tools.map((tool ,index) => {
                    return(
                        <li key={index}>{tool}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Skill