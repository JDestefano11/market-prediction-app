'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  // Simulated auth state (replace with actual logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mockUser = {
    name: 'Demo User',
    email: 'user@example.com',
  };

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleLoginState = () => setIsLoggedIn((prev) => !prev);

  return (
    <header className="w-full bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo size="md" />
        </Link>

        {/* Right-side Nav */}
        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-lg font-bold">
                  {mockUser.name?.charAt(0)}
                </span>
              </div>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="font-medium text-gray-800 font-body">{mockUser.name}</p>
                  <p className="text-sm text-gray-500 font-financial">{mockUser.email}</p>
                </div>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-body"
                >
                  Settings
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 font-body"
                  onClick={toggleLoginState}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4 items-center">
            <Link
              href="/login"
              className="px-4 py-2 text-white hover:text-blue-300 font-body"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-headers"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
