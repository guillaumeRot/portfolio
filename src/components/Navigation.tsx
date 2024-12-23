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
      <div className="max-w-6xl mx-auto px-8 flex justify-center items-center border-b border-accent/20">
        <div className="hidden md:flex gap-12 font-medium tracking-[0.2em] text-xs uppercase">
          {["Projets", "À propos", "Compétences", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace("à ", "")}`}
              className="relative py-2 hover:text-accent transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button (conservé pour tous les styles) */}
      <button className="md:hidden absolute right-8 text-accent hover:text-accent/80 transition-colors">
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
    </nav>
  );
};

export default Navigation;
