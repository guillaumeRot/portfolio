"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="min-h-screen flex items-center px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="sr-only">Guillaume Rot - Développeur Java & React</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div
            className={`relative aspect-square max-w-[500px] mx-auto
                          transform transition-all duration-1000
                          ${
                            isVisible
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-10 opacity-0"
                          }`}
          >
            <div className="absolute inset-0 bg-accent/20 rounded-2xl -rotate-6 transform transition-transform hover:rotate-0 duration-300" />
            <div className="absolute inset-0 bg-accent/20 rounded-2xl rotate-6 transform transition-transform hover:rotate-0 duration-300" />
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/guillaume-rot.png"
                alt="Guillaume Rot - Développeur Fullstack Java & React à Rennes"
                width={400}
                height={400}
                className="object-cover rounded-2xl transform transition-transform hover:scale-105 duration-300"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transform transition-all duration-1000 
                          ${
                            isVisible
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
          >
            <div className="mb-8">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-md md:text-2xl">
                Bonjour, je suis Guillaume Rot
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-text-primary block mb-2">Développeur</span>
              <span className="text-accent">Java / React</span>
            </h1>

            <div className="flex gap-4">
              <Link
                href="#contact"
                className={`inline-block border-2 border-accent text-accent px-8 py-3 rounded-full 
                           hover:bg-accent hover:text-primary transition-all duration-300
                           transform transition-all duration-200 delay-50
                           ${
                             isVisible
                               ? "translate-y-0 opacity-100"
                               : "translate-y-10 opacity-0"
                           }`}
              >
                Me contacter
              </Link>

              <Link
                href="/cv-guillaume-rot.pdf"
                target="_blank"
                className={`inline-block border-2 border-accent text-accent px-8 py-3 rounded-full 
                           hover:bg-accent hover:text-primary transition-all duration-300
                           transform transition-all duration-200 delay-50
                           ${
                             isVisible
                               ? "translate-y-0 opacity-100"
                               : "translate-y-10 opacity-0"
                           }`}
              >
                Télécharger mon CV
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2
                        transition-all duration-1000 delay-700
                        ${isVisible ? "opacity-100" : "opacity-0"}
                        hidden md:block`}
        >
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
