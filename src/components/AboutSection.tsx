"use client";

import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "Git", category: "Outils" },
    { name: "Docker", category: "Outils" },
    { name: "Gitlab CI", category: "Outils" },
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
    <section id="apropos" className="py-20 px-8">
      <div id="about-section" className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-16 text-center transform transition-all duration-700
                     ${
                       isVisible
                         ? "translate-y-0 opacity-100"
                         : "translate-y-10 opacity-0"
                     }`}
        >
          À propos
        </h2>

        <div className="space-y-12">
          {/* Introduction avec effet de glassmorphism */}
          <div
            className={`relative bg-secondary/50 backdrop-blur-sm border border-accent/10 
                       rounded-2xl p-8 transform transition-all duration-700
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />

            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Bonjour ! Développeur expérimenté depuis plus de 7 ans et issu
                d&apos;une école d&apos;ingénieur, j&apos;ai eu
                l&apos;opportunité de travailler dans des secteurs variés tels
                que la banque, la santé, et l&apos;agroalimentaire.
              </p>

              <p>
                Je combine une expertise technique en Java avec Spring Boot et
                en React avec Next.js pour concevoir des applications
                performantes, maintenables et centrées sur l&apos;utilisateur.
              </p>

              <p>
                Toujours à la recherche de nouveaux défis, je suis motivé par la
                création de solutions innovantes adaptées aux besoins métiers.
              </p>
            </div>
          </div>

          {/* Skills avec animation */}
          <div
            className={`transform transition-all duration-700 delay-300
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
          >
            <h3 className="text-xl font-semibold text-accent mb-8 text-center">
              Technologies principales
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-accent/5 rounded-xl blur group-hover:bg-accent/10 transition-colors duration-300" />
                  <div
                    className="relative bg-secondary/30 backdrop-blur-sm border border-accent/10 
                                rounded-xl p-4 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="text-sm text-accent/60 mb-1">
                      {skill.category}
                    </div>
                    <div className="font-medium">{skill.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div
            className={`text-center transform transition-all duration-700 delay-500
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
          >
            <a
              href="/cv-guillaume-rot.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl 
                       bg-accent/10 hover:bg-accent/20 text-accent
                       border border-accent/20 hover:border-accent/40 
                       transition-all duration-300"
            >
              <span>Télécharger mon CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
