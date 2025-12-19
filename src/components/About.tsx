import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Download, Code2, Blocks, Brain, Wand2 } from "lucide-react";

const About = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:0f53ebfc-b68a-43c3-9bda-c584cbda1589";
    window.open(resumeUrl, "_blank");
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet <span className="gradient-text">Zoha</span>
            <Heart className="inline-block ml-2 text-primary animate-sparkle" fill="currentColor" />
          </h2>
          <p className="text-xl text-muted-foreground">Code with care and creativity!</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.15)] border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/profile-bg.jpg"
                alt="Profile Background"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
            </div>

            {/* Content */}
            <div className="space-y-4 relative z-10">
              <h3 className="text-3xl font-bold text-foreground flex items-center gap-2">
                <Sparkles className="text-primary" />
                Who I am
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer who believes in creating not just functional code,
                but experiences that spark joy! With expertise in frontend development, blockchain
                engineering, and AI/ML, I bring a unique blend of technical prowess and creative flair
                to every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing
                to open-source projects, or mentoring aspiring developers. Let's build something
                amazing together! 💖
              </p>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Code2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Frontend Development</h4>
                  <p className="text-base text-muted-foreground">
                    React, Next.js, TypeScript, Tailwind CSS - Creating beautiful, responsive interfaces
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Blocks className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Blockchain Engineering</h4>
                  <p className="text-base text-muted-foreground">
                    Solidity, Ethereum, Ethers.js - Building decentralized applications
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-3xl border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Brain className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">AI & Machine Learning</h4>
                  <p className="text-base text-muted-foreground">
                    Python, TensorFlow, AI Integration - Creating intelligent solutions
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border-2 border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Wand2 className="text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Generative AI Prompt Design</h4>
                  <p className="text-base text-muted-foreground">
                    Image & Video Prompting, Cinematic Trailers, Hyper-Realistic Visuals – Crafting high-fidelity AI-generated media through structured, production-grade prompts
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            onClick={handleResumeDownload}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-[0_10px_40px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;