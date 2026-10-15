'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync theme with localStorage or system preference on load
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#E9E5E2]/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
          Zelalem<span className="text-blue-600">.</span>dev
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
          <Link href="/" className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</Link>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</Link>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Right Side Actions: Theme Toggle + Hire Me */}
        <div className="flex items-center gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? (
              /* Sun Icon for Light Mode */
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon Icon for Dark Mode */
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hire Me Button */}
          <Link 
            href="/contact" 
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 shadow-sm transition"
          >
            Hire Me 
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}