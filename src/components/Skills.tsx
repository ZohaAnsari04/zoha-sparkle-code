import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiJava,
  SiMysql,
  SiSolidity,
  SiEthereum,
  SiEthers,
  SiGithub,
  SiFigma,
  SiVisualstudiocode,
  SiDocker
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  level: number;
  icon: IconType;
  color: string;
}

const skills: Record<string, Skill[]> = {
  all: [
    { name: "React", level: 80, icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", level: 80, icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", level: 94, icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", level: 87, icon: SiPython, color: "#3776AB" },
    { name: "Java", level: 75, icon: SiJava, color: "#007396" },
    { name: "SQL", level: 70, icon: SiMysql, color: "#4479A1" },
    { name: "Solidity", level: 70, icon: SiSolidity, color: "#363636" },
    { name: "Ethereum", level: 75, icon: SiEthereum, color: "#3C3C3D" },
    { name: "Ethers.js", level: 75, icon: SiEthers, color: "#2535A0" },
    { name: "GitHub", level: 92, icon: SiGithub, color: "#181717" },
    { name: "Figma", level: 85, icon: SiFigma, color: "#F24E1E" },
    { name: "VS Code", level: 95, icon: SiVisualstudiocode, color: "#007ACC" },
    { name: "Docker", level: 78, icon: SiDocker, color: "#2496ED" }
  ],
  frontend: [
    { name: "React", level: 80, icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", level: 80, icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", level: 92, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", level: 94, icon: SiJavascript, color: "#F7DF1E" }
  ],
  languages: [
    { name: "Python", level: 87, icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", level: 94, icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
    { name: "Java", level: 75, icon: SiJava, color: "#007396" },
    { name: "SQL", level: 70, icon: SiMysql, color: "#4479A1" }
  ],
  blockchain: [
    { name: "Solidity", level: 70, icon: SiSolidity, color: "#363636" },
    { name: "Ethereum", level: 75, icon: SiEthereum, color: "#3C3C3D" },
    { name: "Ethers.js", level: 75, icon: SiEthers, color: "#2535A0" }
  ],
  tools: [
    { name: "GitHub", level: 92, icon: SiGithub, color: "#181717" },
    { name: "Figma", level: 85, icon: SiFigma, color: "#F24E1E" },
    { name: "VS Code", level: 95, icon: SiVisualstudiocode, color: "#007ACC" },
    { name: "Docker", level: 78, icon: SiDocker, color: "#2496ED" }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skills>("all");

  const tabs = [
    { key: "all" as const, label: "All Skills" },
    { key: "frontend" as const, label: "Frontend" },
    { key: "languages" as const, label: "Languages" },
    { key: "blockchain" as const, label: "Blockchain" },
    { key: "tools" as const, label: "Tools" }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Technologies
            <Heart className="inline-block ml-2 text-primary animate-sparkle" fill="currentColor" />
          </h2>
          <p className="text-xl text-muted-foreground">
            My technical toolkit for creating magic ✨
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card border-2 border-border hover:border-primary/50 text-foreground hover:scale-105"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills[activeTab].map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 bg-card rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.15)] border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in group hover:scale-105"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}15`,
                  }}
                >
                  <skill.icon
                    className="w-10 h-10 transition-all duration-300"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl border-2 border-primary/20 animate-fade-in">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Top Superpowers
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "React.js Developer", "Blockchain Developer", "AI/ML Project Developer",
                  "UI/UX Engineer", "Problem Solver", "Fast Learner", "Open Source Contributor", "AI Image Prompt Design", "Cinematic AI Trailer Prompting"
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 bg-card border-2 border-primary/30 rounded-full font-semibold text-sm hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default hover:scale-105 shadow-[0_2px_10px_rgba(236,72,153,0.1)]"
                  >
                    <Heart className="inline-block mr-2 h-4 w-4 text-primary" fill="currentColor" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;