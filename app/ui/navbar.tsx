"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-white bg-opacity-80 dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Text */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="YourBrand Logo"
                width={70}
                height={70}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex flex-col">
              <div className="text-xs font-bold text-black dark:text-white">
                Charminar
              </div>
              <div className="text-xs font-medium text-black dark:text-white">
                Indian Restaurant & Catering
              </div>
              <div className="text-xs font-light text-black dark:text-white">
                San Diego, CA.
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-blue-700 dark:text-blue-400 hover:text-orange-500 hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-blue-700 dark:text-blue-400 hover:text-orange-500 hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/menu"
              className="text-blue-700 dark:text-blue-400 hover:text-orange-500 hover:underline underline-offset-4"
            >
              Menu
            </Link>
            <Link
              href="/call-us"
              className="text-blue-700 dark:text-blue-400 hover:text-orange-500 hover:underline underline-offset-4"
            >
              Call Us
            </Link>
            <Link
              href="/order-online"
              className="text-blue-700 dark:text-blue-400 hover:text-orange-500 hover:underline underline-offset-4"
            >
              Order Online
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-blue-700 dark:text-yellow-400 focus:outline-none"
          >
            {isDarkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-blue-700 dark:text-blue-400 hover:text-orange-500 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link href="/" className="text-blue-700 dark:text-blue-400 hover:text-orange-500">
                Home
              </Link>
              <Link href="/about-us" className="text-blue-700 dark:text-blue-400 hover:text-orange-500">
                About Us
              </Link>
              <Link href="/menu" className="text-blue-700 dark:text-blue-400 hover:text-orange-500">
                Menu
              </Link>
              <Link href="/call-us" className="text-blue-700 dark:text-blue-400 hover:text-orange-500">
                Call Us
              </Link>
              <Link href="/order-online" className="text-blue-700 dark:text-blue-400 hover:text-orange-500">
                Order Online
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
