import Navbar from '../../components/Navbar/Navbar'
import { useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';


function Header() {
    const [isSmall, setIsSmall] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

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
                        <h3 className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700'>Firas.</h3>
                        <button onClick={toggleMenu} className='flex items-center justify-center mr-2 text-lg font-semibold'>
                            <FaTimes />
                        </button>
                    </div>
                    <DropDownMenu toggle={toggleMenu}/>
                </>
            )
        }
        return (
            <div className='h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black bg-white'>
                <h3 className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700'>Firas.</h3>
                <button onClick={toggleMenu} className='flex items-center justify-center mr-2 text-lg font-semibold'>
                    <FaBars />
                </button>
            </div>
        );
    }
  return (
    <div className='h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black bg-white'>
        <h3 className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700'>Firas.</h3>
        <Navbar/>
    </div>
  )
}

export default Header