import React from 'react'
import { MdAddTask } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-700 text-white py-2 '>
        <div className="logo">
            <span className='font-bold text-xl mx-1'> <p className='flex items-center gap-2'><MdAddTask />iTask</p></span>
           
        </div>
        <ul className="flex items-center gap-8 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
