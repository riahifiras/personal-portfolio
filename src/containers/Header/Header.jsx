import Navbar from '../../components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';

function Header() {
  const [isSmall, setIsSmall] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const path = window.location.pathname;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);

    if (currentPosition > 200) {
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
    backgroundColor: scrolling ? 'white' : 'transparent',
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
              className='lg:text-5xl text-3xl font-bold ml-4 text-blue-700 cursor-pointer'
              onClick={() => (window.location.pathname = '/')}
            >
              Firas.
            </h3>
            <button
              onClick={toggleMenu}
              className='flex items-center justify-center mr-4 text-lg font-semibold'
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
        className={`h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black`}
        style={headerStyle}
      >
        <h3
          className='lg:text-5xl text-3xl font-bold ml-4 text-blue-700 cursor-pointer'
          onClick={() => (window.location.pathname = '/')}
        >
          Firas.
        </h3>
        {path === '/' ? (
          <button
            onClick={toggleMenu}
            className='flex items-center justify-center mr-4 text-lg font-semibold'
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
      className={`h-16 sticky top-0 right-0 w-full flex justify-between items-center z-10 text-black`}
      style={headerStyle}
    >
      <h3
        className='lg:text-5xl text-3xl font-bold ml-8 text-blue-700 cursor-pointer'
        onClick={() => (window.location.pathname = '/')}
      >
        Firas.
      </h3>
      {path === '/' ? <Navbar /> : <div></div>}
    </div>
  );
}

export default Header;
