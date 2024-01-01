import './Navbar.css'

const Navbar = () => {
    
    return (
        <div>
            <div className='flex items-center mr-40 gap-10 text-[1.6rem] font-semibold'>
                <a className="nav" href="#About">About</a>
                <a className="nav" href="#Interests">Interests</a>
                <a className="nav" href="#Projects">Projects</a>
                <a className="nav" href="#Contact">Contact</a>
            </div>
        </div>
        
    );
};

export default Navbar;