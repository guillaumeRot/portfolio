"use client";

import Image from "next/image";

const Skills = () => {
  const skillsWithLogos = {
    frontend: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
    ],
    backend: [
      { name: "Java", logo: "/logos/java.svg" },
      { name: "Spring Boot", logo: "/logos/spring-boot.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
    ],
    tools: [
      { name: "Git", logo: "/logos/git.svg" },
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "Gitlab CI", logo: "/logos/gitlab.svg" },
    ],
  };

  const SkillBadge = ({ name, logo }: { name: string; logo: string }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/30 transition-all duration-300" />
      <div
        className="relative bg-secondary border border-accent/20 backdrop-blur-sm 
                    px-8 py-8 rounded-2xl text-center
                    hover:border-accent/40 transform hover:-translate-y-1
                    transition-all duration-300"
      >
        <div className="text-accent mb-5">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={64}
            height={64}
            className="mx-auto h-16 w-16 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <span className="font-medium text-text-primary text-lg">{name}</span>
      </div>
    </div>
  );

  const SkillCategory = ({
    title,
    items,
  }: {
    title: string;
    items: Array<{ name: string; logo: string }>;
  }) => (
    <div>
      <h3 className="text-xl font-semibold mb-8 text-accent">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 px-8 relative overflow-hidden" id="competences">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Mes compétences
        </h2>

        <div className="space-y-20">
          <SkillCategory title="Frontend" items={skillsWithLogos.frontend} />
          <SkillCategory title="Backend" items={skillsWithLogos.backend} />
          <SkillCategory
            title="Outils & Autres"
            items={skillsWithLogos.tools}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
