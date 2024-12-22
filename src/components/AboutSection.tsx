"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Git",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="apropos" className="py-20 px-8 bg-secondary">
      <div id="about-section" className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-12 transform transition-all duration-700
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
        >
          À propos
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`transform transition-all duration-700 delay-200
                          ${
                            isVisible
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-10 opacity-0"
                          }`}
          >
            <div className="space-y-4 text-text-secondary">
              <p>
                Bonjour ! Je suis un développeur passionné par la création
                d&apos;applications web modernes et performantes. Mon parcours
                dans le développement web a commencé il y a quelques années, et
                depuis, je n&apos;ai cessé d&apos;apprendre et d&apos;évoluer
                avec les technologies les plus récentes.
              </p>
              <p>
                Je me spécialise dans le développement full stack, avec une
                expertise particulière dans l&apos;écosystème JavaScript
                moderne. J&apos;aime créer des expériences utilisateur fluides
                et intuitives, tout en maintenant un code propre et maintenable.
              </p>
              <p>
                Voici quelques technologies avec lesquelles je travaille
                régulièrement :
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className={`flex items-center gap-2 transform transition-all duration-700
                               ${
                                 isVisible
                                   ? "translate-x-0 opacity-100"
                                   : "translate-x-10 opacity-0"
                               }`}
                    style={{
                      transitionDelay: `${skills.indexOf(skill) * 100}ms`,
                    }}
                  >
                    <span className="text-accent">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transform transition-all duration-700 delay-500
                          ${
                            isVisible
                              ? "translate-x-0 opacity-100"
                              : "translate-x-10 opacity-0"
                          }`}
          >
            <div className="relative max-w-[400px] aspect-square mx-auto">
              <div className="absolute inset-0 bg-accent/20 rounded-lg -rotate-6 transform transition-transform hover:rotate-0 duration-300" />
              <div className="absolute inset-0 bg-accent/20 rounded-lg rotate-6 transform transition-transform hover:rotate-0 duration-300" />
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/about-image.jpg" // Assurez-vous d'ajouter votre image dans le dossier public
                  alt="À propos de moi"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
