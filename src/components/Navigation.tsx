"use client";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Projets", href: "#projets" },
    { name: "À propos", href: "#apropos" },
    { name: "Compétences", href: "#competences" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent py-6">
      <div className="max-w-6xl mx-auto px-8 flex justify-center items-center md:border-b md:border-accent/20">
        <div className="hidden md:flex gap-12 font-medium tracking-[0.2em] text-xs uppercase">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative py-2 hover:text-accent transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-8 text-accent hover:text-accent/80 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Container */}
      <div
        className={`fixed inset-0 md:hidden z-40 transition-all duration-300
                    ${isMobileMenuOpen ? "visible" : "invisible"}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
                      ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-0 bg-primary flex flex-col items-center justify-center
                      transition-all duration-300 transform
                      ${
                        isMobileMenuOpen
                          ? "opacity-100"
                          : "opacity-0 translate-y-full"
                      }`}
        >
          <div className="flex flex-col items-center justify-center space-y-8 px-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Close Button */}
          <button
            className="absolute top-6 right-8 text-accent hover:text-accent/80 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
