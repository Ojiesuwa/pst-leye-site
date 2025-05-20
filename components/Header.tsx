"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products & Services", href: "/products-services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-blue-600 shadow-md relative">
      {/* Remove container mx-auto and add px-[30px] directly */}
      <div className="px-[30px] w-full">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src="/crane.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-lg text-white">
              Rosade and Adsam
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Now absolutely positioned */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute w-full left-0 top-16 z-50`}
      >
        <div className="px-[30px] pt-2 pb-3 space-y-1 bg-blue-700 shadow-lg">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
