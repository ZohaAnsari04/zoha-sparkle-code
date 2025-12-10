import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";

const skills = {
  all: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { name: "Ethers.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "CapCut", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/capcut.svg" }
  ],
  frontend: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
  ],
  languages: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ],
  blockchain: [
    { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { name: "Ethers.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" }
  ],
  tools: [
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "CapCut", logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/capcut.svg" }
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills[activeTab].map((skill, index) => (
            <Card
              key={skill.name}
              className="p-6 bg-card rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.15)] border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-lg p-3 group-hover:scale-110 transition-transform">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-full h-full object-contain"
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
