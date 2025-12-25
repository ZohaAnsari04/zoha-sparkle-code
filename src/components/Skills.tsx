import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useState } from "react";
import hardhatLogo from "@/assets/hardhat-logo.png";
import ipfsLogo from "@/assets/ipfs-logo.png";
import { AnimatedCard, AnimatedIcons } from "@/components/ui/feature-block-animated-card";

const skills = {
  all: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { name: "Ethers.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Hardhat", logo: hardhatLogo },
    { name: "IPFS", logo: ipfsLogo },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
  ],
  frontend: [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
  backend: [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" }
  ],
  blockchain: [
    { name: "Solidity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { name: "Ethers.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Smart Contracts", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
    { name: "Hardhat", logo: hardhatLogo },
    { name: "IPFS", logo: ipfsLogo }
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
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof skills>("all");

  const tabs = [
    { key: "all" as const, label: "All Skills" },
    { key: "frontend" as const, label: "Frontend" },
    { key: "backend" as const, label: "Backend" },
    { key: "blockchain" as const, label: "Blockchain" },
    { key: "tools" as const, label: "Tools & Productivity" }
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 animate-fade-in">
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
              className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${activeTab === tab.key
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-card border-2 border-border hover:border-primary/50 text-foreground hover:scale-105"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
          {skills[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="relative px-3 py-2 bg-gradient-to-br from-white/90 to-primary/10 dark:from-slate-900/90 dark:to-primary/20 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:to-primary/20 animate-fade-in group flex items-center gap-2"
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              {/* Icon */}
              <div className="w-8 h-8 flex-shrink-0">
                <div className="w-full h-full rounded-full flex items-center justify-center bg-background/50 p-1.5 shadow-sm border border-white/10">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Skill Name */}
              <span className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="relative overflow-hidden p-8 rounded-3xl border-2 border-primary/30 animate-fade-in h-full">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 animate-gradient bg-[length:200%_200%]"></div>

          {/* Floating Sparkles */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-accent rounded-full animate-bounce"></div>
          <div className="absolute bottom-6 left-12 w-2 h-2 bg-secondary rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-12 right-6 w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>

          {/* Glow Effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="text-center relative z-10">
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
                  className="px-4 py-2 bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-full font-semibold text-sm hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default hover:scale-105 shadow-[0_2px_10px_rgba(236,72,153,0.1)]"
                >
                  <Heart className="inline-block mr-2 h-4 w-4 text-primary" fill="currentColor" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <AnimatedCard
          title="Built with Modern Tech"
          description="This portfolio is crafted with the latest technologies for performance and experience."
          icons={[
            {
              icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full object-contain" />,
              size: "lg",
            },
            {
              icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-full h-full object-contain" />,
              size: "md",
            },
            {
              icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full object-contain" />,
              size: "lg",
            },
            {
              icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="w-full h-full object-contain" />,
              size: "md",
            },
            {
              icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-full h-full object-contain" />,
              size: "sm",
            },
          ]}
          className="h-full"
        />
      </div>
    </section>
  );
};

export default Skills;
