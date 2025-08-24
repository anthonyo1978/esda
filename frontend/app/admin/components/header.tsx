'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSettings } from '../../../context/settingscontext';
import { useAuthStore } from '../../../stores/authstore';

interface HeaderProps {
  onSidebarToggle?: () => void;
}

function Header({ onSidebarToggle }: HeaderProps) {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = useRouter();
  const { settings } = useSettings();
  const logout = useAuthStore((state) => state.logout);

  const logo = settings.find((s) => s.slug === 'logo');
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;

  const logoSrc = logo?.value
    ? `${baseUrl}/Uploads/${logo.value.replace(/^\/+uploads\/+/, '')}`
    : '/images/logo.png'; // Use static logo from public/images

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Image
            src={logoSrc}
            alt="Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <span className="text-sm font-medium">Hi Admin</span>
            </button>

            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;