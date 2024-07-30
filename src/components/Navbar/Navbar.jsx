import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-800 py-5 fixed w-full z-10 top-0 shadow-lg">
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex justify-between items-center'>
            <div className="uppercase">
              <NavLink to="/" className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Start Framework</NavLink>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                <i className={isOpen ? "fa-solid fa-xmark text-2xl" : "fa-solid fa-bars text-2xl"}></i>
              </button>
            </div>
            <div className="hidden lg:flex">
              <ul className="flex space-x-14">
                <li className='cursor-pointer'>
                  <NavLink to="about" className="p-2 block text-white text-lg md:text-xl font-bold">About</NavLink>
                </li>
                <li className='cursor-pointer'>
                  <NavLink to="portfolio" className="p-2 block text-white text-lg md:text-xl font-bold">Portfolio</NavLink>
                </li>
                <li className='cursor-pointer'>
                  <NavLink to="contact" className="p-2 block text-white text-lg md:text-xl font-bold">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`bg-slate-800 px-4 sm:px-6 lg:px-8 duration-500 overflow-hidden ${isOpen ? 'dropdown-enter-active' : 'dropdown-leave-active'}`}>
          <ul className="flex flex-col space-y-4 mt-4">
            <li className='cursor-pointer'>
              <NavLink to="about" className="p-2 block text-white text-lg md:text-xl font-bold">About</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="portfolio" className="p-2 block text-white text-lg md:text-xl font-bold">Portfolio</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="contact" className="p-2 block text-white text-lg md:text-xl font-bold">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
