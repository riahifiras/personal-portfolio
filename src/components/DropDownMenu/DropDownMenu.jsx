const DropDownMenu = (props) => {
  const {toggle} = props;
  return (
    <ul className='flex-col justify-center items-center text-black bg-red-500'>
        <li onClick={toggle} className="flex justify-center text-white text-md font-semibold items-center h-16 bg-slate-500 w-full"><a href="#me" >About</a></li>
        <li onClick={toggle} className="flex justify-center text-white text-md font-semibold items-center h-16 bg-slate-500 w-full"><a href="#me" >Projects</a></li>
        <li onClick={toggle} className="flex justify-center text-white text-md font-semibold items-center h-16 bg-slate-500 w-full"><a href="#me" >Contact</a></li>
    </ul>
  )
}


export default DropDownMenu