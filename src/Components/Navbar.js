import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi';
import logoImage from '../asset/FinalLogo.png'

const Navbar = () => {
  const[open,setOpen] = useState('true');

  return (
    //  draw navbar container
    <div className='border-b border-gray-300 '>

        <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full fixed '>

          {/* image */}
          <img src={logoImage} alt='img' width={220} height={55}/>

          {/* Hamburger icon */}
          <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer' onClick={() =>{ setOpen(!open); }}/>

          {/* Links */}
          <nav className={`${ open ? "block": "hidden"} w-full lg:flex lg:items-center lg:w-auto`}> 
            <ul className='text-base text-gray-600 lg:flex lh:justify-between'>
              <li><a className='lg:px-5 py-2 block hover:text-blue-700 font-semibold ' href='/'>Home</a></li>
              <li><a className='lg:px-5 py-2 block hover:text-blue-700 font-semibold ' href='/'>About Us</a></li>
              <li><a className='lg:px-5 py-2 block hover:text-blue-700 font-semibold ' href='/'>Products</a></li>
              <li><a className='lg:px-5 py-2 block hover:text-blue-700 font-semibold ' href='/'>Blog</a></li>
              <li><a className='lg:px-5 py-2 block hover:text-blue-700 font-semibold ' href='/'>Contact</a></li>
            </ul>
          </nav>

        </div>
    </div>
  )
}

export default Navbar