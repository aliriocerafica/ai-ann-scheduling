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
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8 h-16 sm:h-18 md:h-20 py-2 sm:py-2.5">
          {/* Left Section - University Logos and Title */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 hover:opacity-90 transition-opacity">
            {/* University Logos */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <div className="relative h-18 w-18 sm:h-18 sm:w-18 md:h-24 md:w-24 lg:h-26 lg:w-26">
                <Image
                  src="/HolyAngel.png"
                  alt="Holy Angel University"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-12 lg:w-12">
                <Image
                  src="/Engineeringlogo.png"
                  alt="School of Engineering and Architecture"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Title - Responsive with line break on small screens */}
            <div className="min-w-0 flex-1">
              <h1 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-[#1e4d99] leading-tight">
                <span className="block sm:inline">Scheduling System</span>
                <span className="block sm:inline sm:ml-1">Civil Engineering</span>
              </h1>
            </div>
          </Link>

          {/* Center Section - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link 
              href="/schedule" 
              className="relative text-sm xl:text-base font-semibold text-[#1e4d99] transition-colors duration-200 group pb-1 whitespace-nowrap hover:text-[#0052a8]"
            >
              Run Schedule Calculation
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e4d99] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/dashboard" 
              className="relative text-sm xl:text-base font-semibold text-[#1e4d99] transition-colors duration-200 group pb-1 whitespace-nowrap hover:text-[#0052a8]"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e4d99] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/projects" 
              className="relative text-sm xl:text-base font-semibold text-[#1e4d99] transition-colors duration-200 group pb-1 whitespace-nowrap hover:text-[#0052a8]"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1e4d99] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Section - Login Button or User Menu */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0 lg:ml-12 xl:ml-16">
            {user ? (
              /* User Menu */
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#1e4d99] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:block text-sm font-medium text-gray-900 max-w-[100px] truncate">
                    {user.name}
                  </span>
                  <svg className="w-4 h-4 text-gray-600 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 md:px-7 md:py-2.5 lg:px-8 lg:py-3 border-2 border-[#1e4d99] text-[#1e4d99] font-bold text-xs sm:text-sm md:text-base hover:bg-[#1e4d99] hover:text-white transition-all duration-200 rounded-lg whitespace-nowrap shadow-sm hover:shadow-md"
              >
                Log In
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-md text-[#1e4d99] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1e4d99] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="block px-3 py-2 text-sm font-semibold text-[#1e4d99] hover:bg-blue-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Run Schedule Calculation
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-sm font-semibold text-[#1e4d99] hover:bg-blue-50 rounded-md transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-sm font-semibold text-[#1e4d99] hover:bg-blue-50 rounded-md transition-colors duration-200"
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