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
      title: "Projet 1",
      description:
        "Une application web moderne utilisant les dernières technologies.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "TypeScript"],
      liveUrl: "https://projet1.com",
      githubUrl: "https://github.com/user/projet1",
    },
    {
      title: "Projet 2",
      description: "Une plateforme innovante avec une architecture robuste.",
      image: "/project2.jpg",
      technologies: ["Next.js", "Tailwind", "PostgreSQL"],
      liveUrl: "https://projet2.com",
      githubUrl: "https://github.com/user/projet2",
    },
    // Ajoutez d'autres projets ici
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
          className={`text-3xl font-bold mb-12 transform transition-all duration-700
                       ${
                         isVisible
                           ? "translate-y-0 opacity-100"
                           : "translate-y-10 opacity-0"
                       }`}
        >
          Projets sélectionnés
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-secondary p-6 rounded-lg transform transition-all duration-700
                         hover:translate-y-[-5px] hover:shadow-xl
                         ${
                           isVisible
                             ? "translate-y-0 opacity-100"
                             : "translate-y-10 opacity-0"
                         }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-accent text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11" />
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
