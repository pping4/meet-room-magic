
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-meetroom-800 font-bold text-xl">MeetRoom Magic</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-meetroom-600 hover:text-meetroom-800 px-2 py-1 font-medium">Features</a>
            <a href="#rooms" className="text-meetroom-600 hover:text-meetroom-800 px-2 py-1 font-medium">Rooms</a>
            <a href="#testimonials" className="text-meetroom-600 hover:text-meetroom-800 px-2 py-1 font-medium">Testimonials</a>
            <a href="#contact" className="text-meetroom-600 hover:text-meetroom-800 px-2 py-1 font-medium">Contact</a>
            <Button className="ml-4 bg-meetroom-600 hover:bg-meetroom-700 text-white">Book Now</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-meetroom-600 hover:text-meetroom-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white">
          <a href="#features" className="block px-3 py-2 text-base font-medium text-meetroom-600 hover:text-meetroom-800">Features</a>
          <a href="#rooms" className="block px-3 py-2 text-base font-medium text-meetroom-600 hover:text-meetroom-800">Rooms</a>
          <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-meetroom-600 hover:text-meetroom-800">Testimonials</a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-meetroom-600 hover:text-meetroom-800">Contact</a>
          <Button className="w-full mt-2 bg-meetroom-600 hover:bg-meetroom-700 text-white">Book Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
