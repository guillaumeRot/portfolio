"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const FeaturedProjects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const projects: Project[] = [
    {
      title: "RentaCal",
      description:
        "Un simulateur de rentabilité pour les investissements locatifs. RentaCal permet de simuler vos revenus locatifs et vos charges en toute simplicité. Découvrez la rentabilité réelle de votre projet immobilier en quelques clics et investissez intelligemment",
      image: "/rentacal.jpg",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "ShadcnUI"],
      liveUrl: "https://rentacal.vercel.app/",
      githubUrl: "https://github.com/guillaumeRot/rentacal",
    },
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

    const section = document.getElementById("projects-section");
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
    <section id="projets" className="py-20 px-8">
      <div id="projects-section" className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-16 text-center transform transition-all duration-700
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
        >
          Mes projets
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col md:flex-row gap-12 items-center transform transition-all duration-700
                         ${
                           isVisible
                             ? "translate-y-0 opacity-100"
                             : "translate-y-10 opacity-0"
                         }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative">
                <div className="relative aspect-video rounded-2xl overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Technos flottantes */}
                <div className="absolute -bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-accent border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 space-y-6">
                <h3 className="text-3xl font-bold text-accent">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-accent/10 transition-colors border border-accent/20 hover:border-accent/40"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-accent"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>Code source</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-primary hover:bg-accent/90 transition-colors"
                    >
                      <span>Voir le projet</span>
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
