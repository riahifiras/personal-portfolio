import React, { useState } from 'react'
import Header from "../containers/Header/Header"

const Contact = () => {

  const [info, setInfo] = useState({
    name: "",
    email: "",
    object: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setInfo((prevInfo) => ({
      ...prevInfo, [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      name: "",
      email: "",
      object: "",
      message: ""
    })
  }

  return (
    <div className="w-screen h-screen">
      <Header />
      <form onSubmit={handleSubmit} className='translate-y-20 flex flex-col justify-center items-center gap-6'>
        <h1 className='text-4xl font-semibold text-blue-700'>Contact</h1>
        <input value={info.name} onChange={handleChange} type="text" name="name" placeholder='full name' className='flex justify-center items-center px-2 w-96 h-11 outline-none border-2 rounded-lg focus:border-blue-700' />
        <input value={info.email} onChange={handleChange} type="email" name="email" placeholder='example@gmail.com' className='flex justify-center items-center px-2 w-96 h-11 outline-none border-2 rounded-lg focus:border-blue-700' />
        <input value={info.object} onChange={handleChange} type="text" name="object" placeholder='object' className='flex justify-center items-center px-2 w-96 h-11 outline-none border-2 rounded-lg focus:border-blue-700' />
        <textarea value={info.message} onChange={handleChange} name="message" placeholder='write message here...' style={{ height: "180px" }} className='px-2 w-96 outline-none border-2 rounded-lg resize-none focus:border-blue-700'></textarea>
        <button type="submit" className='text-lg flex justify-center items-center w-96 h-11 cursor-pointer shadow-md bg-blue-700 text-white rounded-lg hover:bg-blue-600'>Send</button>
      </form>

    </div>
  )
}

export default Contact