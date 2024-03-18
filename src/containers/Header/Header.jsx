import Navbar from '../../components/Navbar/Navbar';
import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DarkModeContext } from "../../context/DarkModeContext"
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';

function Header() {
  const [isSmall, setIsSmall] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const {darkMode} = useContext(DarkModeContext);


  const path = window.location.pathname;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
  
    // Calculate the scroll position based on viewport height
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const scrollThreshold = 100 * vh / 100; // Change 100 to the desired percentage
  
    if (currentPosition > scrollThreshold) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 844) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
        setShowMenu(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    transition: 'background-color 0.3s ease',
    backgroundColor: scrolling ? darkMode ? "#cbd4d4" : "#16181d" : 'transparent',
  };

  if (isSmall) {
    if (showMenu) {
      return (
        <>
          <div
            id='me'
            className={`h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black`}
            style={headerStyle}
          >
            <h3
              className='lg:text-3xl text-xl font-bold ml-4 text-blue-700 cursor-pointer'
              onClick={() => (window.location.pathname = '/')}
            >
              Firas.
            </h3>
            <button
              onClick={toggleMenu}
              className='flex items-center justify-center mr-4 text-sm font-semibold'
            >
              <FaTimes />
            </button>
          </div>
          {path === '/' ? <DropDownMenu toggle={toggleMenu} /> : <div></div>}
        </>
      );
    }
    return (
      <div
        className={`h-16 sticky top-0  right-0 w-full flex justify-between items-center z-10 text-black`}
        style={headerStyle}
      >
        <h3
          className='lg:text-3xl text-xl font-bold ml-4 text-blue-700 cursor-pointer'
          onClick={() => (window.location.pathname = '/')}
        >
          Firas.
        </h3>
        {path === '/' ? (
          <button
            onClick={toggleMenu}
            className='flex items-center justify-center mr-4 text-sm font-semibold'
          >
            <FaBars />
          </button>
        ) : (
          <div></div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`h-20 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-${darkMode ? "black" : "white"}`}
      style={headerStyle}
    >
      <h3
        className='lg:text-4xl text-xl font-bold ml-40 text-blue-700 cursor-pointer'
        onClick={() => (window.location.pathname = '/')}
      >
        Firas.
      </h3>
      {path === '/' ? <Navbar /> : <div></div>}
    </div>
  );
}

export default Header;
