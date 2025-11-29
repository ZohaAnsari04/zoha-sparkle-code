import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

const skills = {
  all: [
    { name: "React", level: 80, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 92, category: "frontend" },
    { name: "JavaScript", level: 94, category: "frontend" },
    { name: "Python", level: 87, category: "languages" },
    { name: "Java", level: 75, category: "languages" },
    { name: "SQL", level: 70, category: "languages" },
    { name: "Solidity", level: 70, category: "blockchain" },
    { name: "Ethereum", level: 75, category: "blockchain" },
    { name: "Ethers.js", level: 75, category: "blockchain" },
    { name: "Smart Contracts", level: 84, category: "blockchain" },
    { name: "GitHub", level: 92, category: "tools" },
    { name: "Figma", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Docker", level: 78, category: "tools" }
  ],
  frontend: [
    { name: "React", level: 80 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript", level: 94 }
  ],
  languages: [
    { name: "Python", level: 87 },
    { name: "JavaScript", level: 94 },
    { name: "TypeScript", level: 85 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 70 }
  ],
  blockchain: [
    { name: "Solidity", level: 70 },
    { name: "Ethereum", level: 75 },
    { name: "Ethers.js", level: 75 },
    { name: "Smart Contracts", level: 84 }
  ],
  tools: [
    { name: "GitHub", level: 92 },
    { name: "Figma", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Docker", level: 78 }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills[activeTab].map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 bg-card rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.15)] border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground font-semibold bg-primary/10 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                  style={{
                    width: `${skill.level}%`,
                    animation: 'expand 1s ease-out'
                  }}
                />
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

      <style>{`
        @keyframes expand {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;