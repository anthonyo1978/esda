'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="F9 Tech Logo"
            width={40}
            height={40}
            className="w-[150px] sm:w-[200px] md:w-[250px]" // Responsive logo width
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-xl gap-[5vw]" role="navigation" aria-label="Main navigation">
          <Link href="/" className="text-black hover:text-blue-600 transition-colors font-500">
            Home
          </Link>
          <Link href="/about" className="text-black hover:text-blue-600 transition-colors font-500">
            About
          </Link>
          <Link href="/services" className="text-black hover:text-blue-600 transition-colors font-500">
            Services
          </Link>
          <Link href="/contact" className="text-black hover:text-blue-600 transition-colors font-500">
            Contact
          </Link>
        </nav>

        {/* Contact Us Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/admin/login"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenu />
      </div>
    </header>
  );
}

// Create a new file for MobileMenu component
// This will be created in a separate step