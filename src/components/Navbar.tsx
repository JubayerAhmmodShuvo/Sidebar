'use client';

import { useState } from 'react';
import Link from 'next/link';
// import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { theme } = useTheme();

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Sidebar', href: '/sidebar' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-blue-100 dark:bg-gray-800 fixed w-full top-0 left-0 z-40 h-16 px-4 shadow-md">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-4  ">
          <Link href="/" className="lg:block hidden text-xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Dashboard
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors text-sm md:text-base"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          aria-label="Toggle Mobile Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bg-blue-100 dark:bg-gray-800 shadow-lg transition-all duration-200 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} z-50`}
      >
        <div className="px-4 py-3 space-y-3 max-w-7xl mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors text-base py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}