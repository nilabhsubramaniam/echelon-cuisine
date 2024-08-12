"use client"; // Ensure this is a Client Component

import { useState } from 'react';
import { PhoneIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import { FaBars, FaHome, FaInfoCircle, FaChevronDown, FaCaretDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  setShowAbout: (show: boolean) => void;
}

export default function Navbar({ setShowAbout }: NavbarProps) {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsMenuDropdownOpen(false); // Close other dropdowns
  };

  const toggleMenuDropdown = () => {
    setIsMenuDropdownOpen(!isMenuDropdownOpen);
    setIsAboutDropdownOpen(false); // Close other dropdowns
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="YourBrand Logo"
                width={70}  // Adjust width as necessary
                height={70} // Adjust height as necessary
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800 flex items-center">
              <FaHome className="h-5 w-5 mr-2" />
              Home
            </Link>
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-gray-800 flex items-center"
                onClick={() => setShowAbout(true)}
              >
                About Us <FaChevronDown className="ml-2 h-5 w-5" />
              </button>
              {isAboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Story</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Team</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Careers</Link>
                </div>
              )}
            </div>
            <Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800 flex items-center">
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Order Online
            </Link>
            {/* New Menu Item */}
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-gray-800 flex items-center"
                onClick={toggleMenuDropdown}
              >
                Menu <FaCaretDown className="ml-2 h-5 w-5" />
              </button>
              {isMenuDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Item 1</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Item 2</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Item 3</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button with Icons */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-800">
                <FaHome className="h-5 w-5 mr-2" />
                Home
              </Link>
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-gray-800"
                  onClick={() => setShowAbout(true)}
                >
                  About Us <FaCaretDown className="ml-2 h-5 w-5" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Our Story</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Team</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Careers</Link>
                  </div>
                )}
              </div>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Us
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-800">
                <ShoppingCartIcon className="h-5 w-5 mr-2" />
                Order Online
              </Link>
              {/* Mobile Menu Item */}
              <div className="relative">
                <button 
                  className="flex items-center text-gray-600 hover:text-gray-800"
                  onClick={toggleMenuDropdown}
                >
                  Menu <FaCaretDown className="ml-2 h-5 w-5" />
                </button>
                {isMenuDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Item 1</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Item 2</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Item 3</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
