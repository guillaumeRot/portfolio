"use client";

import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
                Bonjour ! Développeur expérimenté depuis plus de 7 ans, basé à
                Rennes et issu d&apos;une école d&apos;ingénieur, j&apos;ai eu
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
