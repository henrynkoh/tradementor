'use client';

import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">TradeMentor</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary-200 transition-colors">Home</Link>
            <Link href="/charts" className="hover:text-primary-200 transition-colors">Charts</Link>
            <Link href="/training" className="hover:text-primary-200 transition-colors">Training</Link>
            <Link href="/about" className="hover:text-primary-200 transition-colors">About</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={classNames(
          "mt-4 md:hidden",
          isMobileMenuOpen ? "block" : "hidden"
        )}>
          <div className="flex flex-col space-y-4 pb-4">
            <Link href="/" className="hover:text-primary-200 transition-colors">Home</Link>
            <Link href="/charts" className="hover:text-primary-200 transition-colors">Charts</Link>
            <Link href="/training" className="hover:text-primary-200 transition-colors">Training</Link>
            <Link href="/about" className="hover:text-primary-200 transition-colors">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 