"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 
                    ${
                      isScrolled
                        ? "bg-primary/90 backdrop-blur-sm py-4"
                        : "bg-transparent py-6"
                    }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
        >
          GR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="#projets" className="hover:text-accent transition-colors">
            Projets
          </Link>
          <Link href="#apropos" className="hover:text-accent transition-colors">
            À propos
          </Link>
          <Link
            href="#competences"
            className="hover:text-accent transition-colors"
          >
            Compétences
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent hover:text-accent/80 transition-colors"
          onClick={() => {
            /* Ajouter la logique du menu mobile ici */
          }}
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
    </nav>
  );
};

export default Navigation;
