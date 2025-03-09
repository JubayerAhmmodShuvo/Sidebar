'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { menuItems } from '../data/menuItems';

export default function Sidebar() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        ref={toggleButtonRef}
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 left-4 z-50 p-2 rounded-lg transition-colors bg-blue-100 dark:bg-gray-800"
        aria-label="Toggle Sidebar"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 transition duration-200 ease-in-out z-20 w-64 bg-blue-100 text-black p-4 flex flex-col shadow-lg mt-16 lg:mt-16`}
      >
        <div className="flex-1 space-y-1">
         <Link href="/sidebar"> <h5 className='text-center font-bold text-3xl ' >SideBar</h5></Link>
          {menuItems.map((item) => (
            <div key={item.title} className="space-y-2">
              <button
                onClick={() => toggleDropdown(item.title)}
                className="w-full flex items-center justify-between px-4 mt-14  text-foreground-light dark:text-foreground-dark hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {item.icon && (
                    <Image
                      width={20}
                      height={20}
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-5 h-5 dark:invert"
                    />
                  )}
                  <span>{item.title}</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${openItems[item.title] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {item.items && openItems[item.title] && (
                <div className="ml-4 space-y-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-foreground-light dark:text-foreground-dark hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button
          onClick={toggleTheme}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 text-foreground-light dark:text-foreground-dark hover:bg-primary-light dark:hover:bg-primary-dark rounded-lg transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
          <span className="ml-2">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
      </div>
    </>
  );
}