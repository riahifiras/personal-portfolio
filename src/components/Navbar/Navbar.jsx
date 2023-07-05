import './Navbar.css'

const Navbar = () => {
    
    return (
        <div>
            <div className='flex items-center mr-8 gap-6 text-2xl font-semibold'>
                <a className="nav" href="#About">About</a>
                <a className="nav" href="#Interests">Interests</a>
                <a className="nav" href="#Projects">Projects</a>
                <a className="nav" href="#Contact">Contact</a>
            </div>
        </div>
        
    );
};

export default Navbar;