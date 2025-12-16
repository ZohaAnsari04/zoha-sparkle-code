import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink, Github, Sparkles } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

const projects = [
  {
    name: "SPLITSYNC- Smart Expense Tracker",
    image: project1,
    description: "A smart expense tracker that automatically splits costs, tracks balances, and keeps every rupee accountable. Perfect for friends, trips, and shared living",
    tech: ["React", "TypeScript", "AI Integration", "Tailwind CSS", "Lucide React",],
    demo: "https://splitsync-umber.vercel.app/",
    github: "#"
  },
  {
    name: "PhishEye",
    image: project2,
    description: "An OSINT-powered detection system that monitors the open web in real time to expose phishing and scam sites instantly",
    tech: ["React.js", "Tailwind CSS", "Python.js", "REST + WebSocket APIs", "Scrapy", "WHOIS", "Scikit-learn"],
    demo: "https://phisheye.vercel.app/",
    github: "#"
  },
  {
    name: "ClarityWorks",
    image: project3,
    description: "Clarity Works is a freelance service platform delivering modern web, blockchain, and AI-driven solutions with a focus on performance, security, and scalability. Built for clients who want results, not just designs.",
    tech: ["TypeScript ", "shadcn/ui", "React", "Tailwind CSS", "Zod "],
    demo: "#",
    github: "#"
  },
  {
    name: "PawFund - Decentralized Rescue System",
    image: project4,
    description: "Built PawFund, a blockchain-based decentralized rescue system that ensures transparent, secure, and verifiable animal rescue, adoption, and donation processes.",
    tech: ["OpenZeppelin ", "IPFS", "Hardhat", "Tailwind CSS", "React"],
    demo: undefined,
    github: undefined
  },
  {
    name: "Decentralized Real Estate marketplace powered by Blockchain.",
    image: project5,
    description: "Built a decentralized real estate marketplace using blockchain, focused on transparent, tamper-proof property records and trustless peer-to-peer transactions via smart contracts.",
    tech: ["React + Vite", "CSS3", "Ethers.js", "Hardhat", "Tailwind CSS", "React"],
    demo: undefined,
    github: undefined
  },
  {
    name: "AI Portfolio Analyzer",
    image: project6,
    description: "Smart analytics dashboard providing insights and recommendations for portfolios",
    tech: ["Python", "TensorFlow", "React", "Chart.js"],
    demo: "#",
    github: "#"
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
              className="group overflow-hidden bg-card rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demo && (
                  <Button
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_4px_20px_rgba(236,72,153,0.2)] hover:shadow-[0_6px_30px_rgba(236,72,153,0.3)] transition-all"
                    onClick={() => window.open(project.demo, '_blank')}
                    disabled={project.demo === '#'}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
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