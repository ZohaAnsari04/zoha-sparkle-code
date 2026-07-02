import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Sparkles, Briefcase, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Journey = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const experienceData = [
    {
      role: "Freelance Full-Stack & Blockchain Developer",
      company: "ClarityWorks",
      duration: "August 2025 - Present",
      description: "Leading design and development of modern web applications, decentralized solutions, and generative AI integrations. Delivering custom frontends and production-grade smart contracts for clients.",
      skills: ["React", "TypeScript", "Solidity", "Prompt Design", "AI Integration"],
    },
    {
      role: "Cyber Security Analyst (Job Simulation)",
      company: "Deloitte (via Forage)",
      duration: "November 2025",
      description: "Successfully analyzed cybersecurity infrastructure, diagnosed system vulnerabilities, and formulated strategic recommendations to improve software resilience and network protection.",
      skills: ["Cybersecurity", "Vulnerability Analysis", "Risk Assessment"],
    },
    {
      role: "Open Source Contributor & Technical Mentor",
      company: "GitHub / Tech Community",
      duration: "Ongoing",
      description: "Contributing to React and TypeScript open-source web platforms while mentoring aspiring developers in software design patterns, front-end optimization, and developer tooling.",
      skills: ["React", "Next.js", "Open Source", "Mentoring"],
    }
  ];

  const educationData = [
    {
      degree: "Master of Engineering (M.E.)",
      field: "Computer Science & Engineering",
      specialization: "Specialization: Artificial Intelligence & Machine Learning",
      institution: "University of Mumbai",
      duration: "2025 - Present",
      extra: "Currently pursuing advanced coursework and research in deep learning neural networks, natural language processing, and model optimization.",
      skills: ["Deep Learning", "TensorFlow", "Advanced Algorithms", "AI Research"],
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      specialization: "Specialization: Internet of Things, Cyber Security & Blockchain Technology",
      institution: "M.H. Saboo Siddik College of Engineering (University of Mumbai)",
      duration: "2021 - 2025",
      cgpa: "8.36 CGPA",
      skills: ["IoT Ecosystems", "Cryptography & Cyber Security", "Solidity & Blockchain", "Computer Science"],
    }
  ];

  return (
    <section id="journey" className="py-20 bg-background dark:bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full border-2 border-border dark:border-white/10 bg-card/50 dark:bg-gray-900/40 text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4 backdrop-blur-sm">
            Career Path & Education
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-playfair tracking-wide flex items-center gap-2">
            My <span className="gradient-text">Journey</span>
            <Sparkles className="text-accent animate-sparkle" size={32} />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A comprehensive overview of my professional experience and academic background.
          </p>

          {/* Custom Styled Pill Tab Selector */}
          <div className="mt-10 p-1.5 bg-muted/40 dark:bg-gray-900/60 rounded-full border-2 border-border dark:border-white/10 flex items-center w-80 relative">
            <button
              onClick={() => setActiveTab("experience")}
              className={`flex-1 py-3 text-sm font-semibold rounded-full flex items-center justify-center gap-2 z-10 transition-colors duration-300 ${
                activeTab === "experience"
                  ? "text-black dark:text-black font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase size={16} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`flex-1 py-3 text-sm font-semibold rounded-full flex items-center justify-center gap-2 z-10 transition-colors duration-300 ${
                activeTab === "education"
                  ? "text-black dark:text-black font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap size={16} />
              Education
            </button>
            
            {/* Animated Active Pill Indicator */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 left-1.5 bg-white rounded-full shadow-md pointer-events-none"
              layoutId="activeTabIndicator"
              animate={{
                width: "47.5%",
                x: activeTab === "experience" ? 0 : "105%"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {experienceData.map((exp, idx) => (
                  <Card
                    key={idx}
                    className="p-8 bg-card dark:bg-gray-900/40 dark:backdrop-blur-md rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.1)] border-2 border-border dark:border-white/10 hover:border-primary/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                          <Briefcase className="text-primary flex-shrink-0" size={24} />
                          {exp.role}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm self-start">
                        <Calendar size={14} />
                        {exp.duration}
                      </div>
                    </div>

                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border dark:border-white/10">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-1.5 bg-muted dark:bg-gray-800/60 border border-border dark:border-white/5 rounded-full text-xs font-semibold text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {educationData.map((edu, idx) => (
                  <Card
                    key={idx}
                    className="p-8 bg-card dark:bg-gray-900/40 dark:backdrop-blur-md rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.1)] border-2 border-border dark:border-white/10 hover:border-primary/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                          <BookOpen className="text-primary flex-shrink-0" size={24} />
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground mb-1">
                          {edu.field}
                        </p>
                        <p className="text-sm md:text-base text-primary/80 font-medium">
                          {edu.specialization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full text-sm self-start">
                        <Calendar size={14} />
                        {edu.duration}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-base md:text-lg font-semibold text-foreground">
                          {edu.institution}
                        </p>
                      </div>

                      {edu.cgpa && (
                        <div className="flex items-center gap-2 pt-2">
                          <Award className="text-accent" size={20} />
                          <span className="text-xl font-bold gradient-text">{edu.cgpa}</span>
                        </div>
                      )}

                      {edu.extra && (
                        <p className="text-base text-muted-foreground leading-relaxed pt-2">
                          {edu.extra}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border dark:border-white/10">
                      {edu.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3.5 py-1.5 bg-muted dark:bg-gray-800/60 border border-border dark:border-white/5 rounded-full text-xs font-semibold text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Journey;
