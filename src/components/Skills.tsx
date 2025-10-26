import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript", level: 94 }
  ],
  blockchain: [
    { name: "Solidity", level: 85 },
    { name: "Ethereum", level: 82 },
    { name: "Web3.js", level: 88 },
    { name: "Ethers.js", level: 86 },
    { name: "Smart Contracts", level: 84 }
  ],
  languages: [
    { name: "Python", level: 87 },
    { name: "JavaScript", level: 94 },
    { name: "TypeScript", level: 88 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 92 },
    { name: "Figma", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Firebase", level: 83 },
    { name: "Docker", level: 78 }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Superpowers
            <Heart className="inline-block ml-2 text-primary animate-sparkle" fill="currentColor" />
          </h2>
          <p className="text-xl text-muted-foreground">
            My technical toolkit for creating magic ✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card 
              key={category}
              className="p-8 bg-card rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.15)] border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-primary" />
                <h3 className="text-2xl font-bold capitalize text-foreground">
                  {category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: 'expand 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
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
                  "React Wizard", "Blockchain Enthusiast", "AI Explorer", 
                  "UI/UX Lover", "Problem Solver", "Fast Learner",
                  "Team Player", "Open Source Contributor"
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