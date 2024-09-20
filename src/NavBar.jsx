import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-pearl border border-b-gray-40  z-50 flex items-center justify-between w-full px-6 py-4   md:px-10">
      <div className="flex items-center justify-center">
      <img src="alietlogo.png" className="w-12"/>

      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <div className={`relative w-8 h-8 flex gap-[9px] flex-col justify-center items-center`}>
            {/* Line 1 */}
            <span className={`block w-8 h-[2px] bg-gray-800 transform transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            {/* Line 2 */}
            <span className={`block w-8 h-[2px] bg-gray-800 transform transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Menu for larger screens */}
      <div className="items-center justify-center hidden gap-4 md:flex">
        <h1 className="text-lg px-3 py-1 hover:bg-gray-400 text-center rounded-full tracking-tight cursor-pointer duration-200 delay-75 font-medium font-mono">Event Scheduler</h1>
        <a href="#" className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-black  font-poppins">
          Learn More
        </a>
      </div>

      {/* Dropdown Menu for small screens */}
      <div className={`absolute top-16 left-0 w-full bg-white p-6 z-10 flex flex-col space-y-4 items-center transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <h1 className="text-xl font-medium font-mono">Venue</h1>
        <a href="#" className="flex items-center justify-center px-3 py-2 font-medium text-white bg-black rounded-lg font-poppins">
          Learn More
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
