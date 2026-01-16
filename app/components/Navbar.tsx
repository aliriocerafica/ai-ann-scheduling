'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

interface NavbarProps {
  onLoginClick?: () => void;
  user?: User;
}

export default function Navbar({ onLoginClick, user }: NavbarProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide navbar while scrolling
      if (window.scrollY > 0) {
        setIsVisible(false);
      }

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Show navbar after scrolling stops (200ms delay)
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b-4 border-[#1e4d99] shadow-md transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left Section - University Logos and Title */}
          <div className="flex items-center space-x-3">
            {/* University Logos */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-38 lg:w-38">
                <Image
                  src="/HolyAngel.png"
                  alt="Holy Angel University"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
                <Image
                  src="/Engineeringlogo.png"
                  alt="School of Engineering and Architecture"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span className="text-sm sm:text-md  lg:text-md font-bold text-[#1e4d99] tracking-wide uppercase">
              Scheduling System Civil Engineering
            </span>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/schedule" 
              className="relative text-sm font-semibold text-[#1e4d99] transition-colors duration-200 uppercase tracking-wide group pb-1"
            >
              Run Schedule Calculation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e4d99] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/dashboard" 
              className="relative text-sm font-semibold text-[#1e4d99] transition-colors duration-200 uppercase tracking-wide group pb-1"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e4d99] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/projects" 
              className="relative text-sm font-semibold text-[#1e4d99] transition-colors duration-200 uppercase tracking-wide group pb-1"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e4d99] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Section - Login Button or User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              /* User Menu */
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-[#1e4d99] rounded-full flex items-center justify-center text-white font-semibold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-900">
                    {user.name}
                  </span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <hr className="my-2" />
                    <Link
                      href="/"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              /* Login Button */
              <button
                onClick={onLoginClick}
                className="flex items-center justify-center px-2 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 border-2 border-[#1e4d99] text-[#1e4d99] font-bold text-[10px] sm:text-sm md:text-base lg:text-base uppercase tracking-tight sm:tracking-wide hover:bg-[#1e4d99] hover:text-white transition-all duration-200 rounded whitespace-nowrap"
              >
                Log In
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#1e4d99] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1e4d99] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/schedule"
              className="block px-3 py-2 text-sm font-semibold text-[#1e4d99] hover:bg-blue-50 rounded-md uppercase tracking-wide transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Run Schedule Calculation
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-sm font-semibold text-[#1e4d99] hover:bg-blue-50 rounded-md uppercase tracking-wide transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-sm font-semibold text-[#1e4d99] hover:bg-blue-50 rounded-md uppercase tracking-wide transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}