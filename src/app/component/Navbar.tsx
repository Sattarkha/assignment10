import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full flex bg-white shadow-lg shadow-gray-700 text-yellow-400 text-xl justify-between items-center h-21 z-50">
        <div className="flex items-center gap-1">
          <Image src="/logo.png" alt="logo" width={130} height={70} />
          <h1 className="font-bold text-yellow-400 sm:text-2xl italic">JET TOYS</h1>
        </div>
        <ul className="sm:flex flex gap-1 sm:gap-5 text-sm sm:text-2xl">
          {/**          <ul className="flex flex-col sm:flex-row items-center gap-4 text-lg sm:text-xl"> */}
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
