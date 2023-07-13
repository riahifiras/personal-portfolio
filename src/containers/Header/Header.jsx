import Navbar from '../../components/Navbar/Navbar'
import { useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';


function Header() {
    const [isSmall, setIsSmall] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const path = window.location.pathname;
    console.log(path);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 640){
                setIsSmall(true)
            }
            else{
                setIsSmall(false)
                setShowMenu(false)
            }
            
        }
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)

    }, [])
    if(isSmall){
        if(showMenu){
            return(
                <>
                    <div id='me' className='h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black bg-white'>
                        <h3 className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700 cursor-pointer' onClick={() => window.location.pathname="/"}>Firas.</h3>
                        <button onClick={toggleMenu} className='flex items-center justify-center mr-2 text-lg font-semibold'>
                            <FaTimes />
                        </button>
                    </div>
                    {path === "/" ? <DropDownMenu toggle={toggleMenu}/> : <div></div>}
                    
                </>
            )
        }
        return (
            <div className='h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black bg-white'>
                <h3 className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700 cursor-pointer' onClick={() => window.location.pathname="/"}>Firas.</h3>
                {path === "/" ? <button onClick={toggleMenu} className='flex items-center justify-center mr-2 text-lg font-semibold'><FaBars /></button> : <div></div>}
                
            </div>
        );
    }
  return (
    <div className='h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black bg-white'>
        <h3 className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700 cursor-pointer' onClick={() => window.location.pathname="/"}>Firas.</h3>
        {path === "/" ? <Navbar/> : <div></div>}
    </div>
  )
}

export default Header