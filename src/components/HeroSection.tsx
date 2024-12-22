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
    <section className="min-h-screen flex items-center px-8">
      <div className="max-w-6xl mx-auto w-full">
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
                alt="Guillaume Rot Portrait"
                // fill
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-text-primary block mb-2">Développeur</span>
              <span className="text-accent">Full Stack</span>
            </h1>

            <p
              className="text-text-secondary max-w-xl text-lg mb-8 
                         transition-all duration-1000 delay-300
                         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}"
            >
              Je crée des applications web modernes et performantes
            </p>

            <Link
              href="#contact"
              className={`inline-block bg-accent text-primary px-8 py-3 rounded-full 
                         hover:bg-accent/90 transition-all duration-300
                         transform transition-all duration-1000 delay-500
                         ${
                           isVisible
                             ? "translate-y-0 opacity-100"
                             : "translate-y-10 opacity-0"
                         }`}
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2
                        transition-all duration-1000 delay-700
                        ${isVisible ? "opacity-100" : "opacity-0"}`}
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
