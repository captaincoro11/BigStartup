import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
    <div className='flex justify-between mt-1 ml-2 '>
    <div className='flex space-x-11'>
    <div className=' bg-orange-600 rounded-full w-8  text-red-600 '>
    

    </div>
    <div id='Search-Bar' className='flex p-1 rounded-full outline outline-1 outline-gray-500 shadow-md bg-white'>
    <button className='mt-0.5'><FaSearch /></button>
    <input className=' md:flex-grow md:outline-none md:w-96 w-24'  type="text" />
    
    </div>
    <div className=' font-bold md:text-md text-sm '>
        Offers & Deals
    </div>
    </div>
    <div className='  hidden lg:flex lg:space-x-20 lg:mr-4 ' >
    <div>
        <FaBell size={24}/>
    </div>
    <div>
        <FaMessage size={24}/>
    </div>
    <div>
        <FaGlobe size={24}/>
    </div>

    <div>
    <FaRegUserCircle size={24}/>

    </div>

    </div>
    </div>
      
    </div>
  )
}

export default Navbar
