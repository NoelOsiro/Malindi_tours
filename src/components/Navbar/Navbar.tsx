'use client'
// components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Define an array of navigation links
const navLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Explore', href: '/explore' },
  { label: 'Events', href: '/events' },
  { label: 'Commerce', href: '/commerce' },
  // Add other links as needed
];

const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 10;
      if (isTop !== scrolling) {
        setScrolling(isTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      id="header"
      className={`fixed w-full z-30 top-0 text-white ${scrolling ? '' : 'bg-white shadow'}`}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        {/* Your logo and brand */}
        <div className="pl-4 flex items-center">
          <a
            className={`toggleColour flex items-center justify-center ${
              scrolling ? 'text-white' : 'gradient-text'
            } no-underline hover:no-underline font-bold text-2xl lg:text-4xl`}
            href="/"
          >
            <Image src="/beach.svg" alt="Your SVG" className="mr-4" width={50} height={50} />
            MaliCul
          </a>
        </div>

        {/* Hamburger button for mobile */}
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 sidenav overlay`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {/* Dynamically generate navigation links */}
            {navLinks.map((link, index) => (
              <li className="mr-3" key={index}>
                <a
                  className={`inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4
                  ${scrolling ? 'text-white' : ''}
                  ${pathname === link.href ? 'font-bold': ''}`}
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Your post button */}
          <button
            id="navAction"
            className={`mx-auto lg:mx-0 hover:underline ${
              scrolling ? 'bg-white' : 'gradient text-white'
            } text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
          >
            Post
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
