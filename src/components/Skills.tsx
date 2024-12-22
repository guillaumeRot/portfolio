"use client";

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-text-primary">{name}</span>
      <span className="text-accent">{percentage}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full">
      <div
        className="h-full bg-accent rounded-full 
                   transition-all duration-300 ease-in-out
                   relative overflow-hidden
                   after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0
                   after:bg-gradient-to-r after:from-accent/40 after:to-accent
                   after:animate-pulse"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { name: "React / Next.js", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "Tailwind CSS", percentage: 95 },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 85 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "API REST", percentage: 90 },
  ];

  const otherSkills = ["Git", "Docker", "CI/CD", "Testing"];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Mes compétences</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Frontend</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Backend</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-accent">
            Autres compétences
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherSkills.map((skill) => (
              <div
                key={skill}
                className="bg-secondary rounded-lg p-4 text-center 
                         hover:bg-hover transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
