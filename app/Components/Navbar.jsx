"use client"
import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className='navbar w-full h-[10vh] bg-transparent flex items-center justify-between px-[5vw] lg:justify-evenly gap-14 fixed z-30'>

      <div className="logo">
        <img className='w-[15vw] md:w-[100px] md:h-[33px]' src="/Logo.svg" alt="Logo" />
      </div>

      <div className="right flex items-center">
        <div className="links items-center gap-20 text-[10px] hidden lg:flex xl:text-[15px] font-bold">
          <Link to="Destinations">Destinations</Link>
          <Link to="Hotel">Hotel</Link>
          <Link to="Flights">Flights</Link>
          <Link to="Booking">Booking</Link>
          <Link to="Login">Login</Link>
          <label className="flex gap-10 items-center">
            <button className='h-[40px] w-[102px] py-2 px-5 border border-black rounded-md'>Sign Up</button>
            <select className="bg-transparent">
              <optgroup label="Language">
                <option value="">EN</option>
                <option value="">ML</option>
                <option value="">HI</option>
                <option value="">SP</option>
              </optgroup>
            </select>
          </label>
        </div>

        <div className="btn flex lg:hidden">
          <button className='h-[40px] w-[102px] py-2 px-5 border border-black text-[10px] rounded-md'>Sign Up</button>
        </div>

        {/* Hamburger */}
        <div className="relative lg:hidden flex items-center">
          <input id="menu-toggle" type="checkbox" className="hidden peer" />

<label>
  <div
    class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
  >
    <input class="hidden peer" type="checkbox" />
    <div
      class="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
    ></div>
    <div
      class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked:hidden"
    ></div>
    <div
      class="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
    ></div>
     {/* Sidebar */}
     <div className="sideBar absolute top-full right-2 w-[85vw] h-[40vh] z-10 flex-col justify-center items-center bg-white hidden peer-checked:flex">
            <div className="links z-30 gap-6 flex flex-col justify-center items-center text-blue-800">
              <Link to="Destinations" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Destinations</Link>
              <Link to="Hotel" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Hotel</Link>
              <Link to="Flights" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Flights</Link>
              <Link to="Booking" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Booking</Link>
              <Link to="Login" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Login</Link>
            </div>
          </div>
  </div>
  
</label>


         
        </div>
      </div>
    </div>
  )
}

export default Navbar
