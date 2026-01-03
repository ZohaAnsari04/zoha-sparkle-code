import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink, Sparkles } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.png";
import project7 from "@/assets/project7.png";
import { AnimatedIcons } from "@/components/ui/feature-block-animated-card";

// Tech stack logo mapping
const techLogos: { [key: string]: string } = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  "Hardhat": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
};

const projects = [
  {
    name: "SPLITSYNC- Smart Expense Tracker",
    image: project1,
    description: "SplitSync is a smart expense management web app designed for groups, trips, and shared living. It automates expense splitting, balance calculation, and settlement tracking, eliminating manual calculations and confusion.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demo: "https://splitsync-umber.vercel.app/",
    github: "#"
  },
  {
    name: "PhishEye",
    image: project2,
    description: "PhishEye is a real-time phishing detection system that monitors open web sources to identify malicious domains and scam activity. The platform helps users and organizations quickly assess threats before interacting with suspicious links. sites instantly",
    tech: ["React", "Tailwind CSS", "Python"],
    demo: "https://phisheye.vercel.app/",
    github: "#"
  },
  {
    name: "ClarityWorks",
    image: project3,
    description: "ClarityWorks is a freelance service platform delivering modern web, blockchain, and AI-driven solutions. Built for performance, scalability, and clean UX, it showcases how technical execution directly supports business outcomes..",
    tech: ["TypeScript", "React", "Tailwind CSS"],
  },
  {
    name: "PawFund - Decentralized Rescue System",
    image: project4,
    description: "Built PawFund, a blockchain-based decentralized rescue system that ensures transparent, secure, and verifiable animal rescue, adoption, and donation processes.",
    tech: ["Solidity", "Hardhat", "React"],
  },
  {
    name: "Decentralized Real Estate marketplace powered by Blockchain.",
    image: project5,
    description: "Built a decentralized real estate marketplace using blockchain, focused on transparent, tamper-proof property records and trustless peer-to-peer transactions via smart contracts.",
    tech: ["React", "Vite", "Hardhat"],
  },
  {
    name: "Todo List",
    image: project6,
    description: "A to-do list helps you organize tasks you need to complete. It keeps you focused, productive, and on track throughout the day.",
    tech: ["Python", "TensorFlow", "React"],
    demo: "https://taskiepie.vercel.app/",
  },
  {
    name: "Simple Calculator",
    image: project7,
    description: "A clean and efficient calculator app for performing basic arithmetic operations with a user-friendly interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    demo: "https://corecalc.vercel.app/",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
            <Sparkles className="inline-block ml-2 text-accent animate-sparkle" />
          </h2>
          <p className="text-xl text-muted-foreground">
            A collection of my favorite creations 💖
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary animate-gradient bg-[length:200%_200%]"></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-2 right-4 w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
              <div className="absolute top-6 left-6 w-2.5 h-2.5 bg-accent/50 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 right-8 w-2 h-2 bg-secondary/50 rounded-full animate-pulse delay-100"></div>

              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-base text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Icons */}
                <div className="mb-4">
                  <AnimatedIcons
                    id={`project-${index}`}
                    icons={project.tech.map((tech) => ({
                      icon: (
                        <img
                          src={techLogos[tech]}
                          alt={tech}
                          className="w-full h-full object-contain"
                        />
                      ),
                      size: "md",
                      className: "p-2 bg-muted hover:bg-primary/10 transition-all hover:scale-110"
                    }))}
                    containerClassName="p-0 h-auto justify-start overflow-visible"
                    className="gap-3"
                    showSparkles={false}
                  />
                </div>

                {project.demo && (
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_4px_20px_rgba(236,72,153,0.2)] hover:shadow-[0_6px_30px_rgba(236,72,153,0.3)] transition-all"
                    onClick={() => window.open(project.demo, '_blank')}
                    disabled={project.demo === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Website
                  </Button>
                )}
              </div>

              <Heart
                className="absolute top-4 right-4 text-primary/30 group-hover:text-primary transition-colors animate-sparkle"
                fill="currentColor"
                size={16}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;