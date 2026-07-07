import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Sparkles, Briefcase, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const techLogos: { [key: string]: string } = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

const Journey = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const experienceData = [
    {
      role: "AR Associate",
      company: "Macksofy Technologies Pvt Ltd",
      location: "Remote",
      duration: "Mar 2026 – Present",
      points: [
        "Working on billing and accounts receivable operations for Samar Health, a US-based healthcare client based in Texas.",
        "Managing financial transactions and ensuring accurate processing of healthcare claims.",
        "Collaborating with cross-functional teams to streamline revenue cycle management processes."
      ],
      skills: [],
    },
    {
      role: "Front-end Developer Intern",
      company: "Sunarj Technologies",
      location: "Mumbai, India",
      duration: "Jun 2022 – Nov 2022",
      points: [
        "Worked on developing and maintaining responsive web applications using HTML, CSS, JavaScript, and modern frontend technologies.",
        "Collaborated with the development team to create user-friendly interfaces, improve website performance."
      ],
      skills: ["HTML", "CSS", "JavaScript"],
    }
  ];

  const educationData = [
    {
      degree: "Masters of Technology",
      field: "Computer Engineering",
      specialization: "Vidyavihar",
      institution: "K.J. Somaiya School of Engineering",
      duration: "June 2026 – May 2028",
      points: [
        "Pursuing advanced coursework and research in computer systems, advanced algorithms, and software architectures.",
        "Collaborating on high-performance computing projects and modern engineering solutions."
      ],
      skills: ["Advanced Algorithms", "Software Engineering", "Computer Systems"],
    },
    {
      degree: "Bachelor of Engineering",
      field: "CSE IoT & Cyber Security including Blockchain Technology",
      specialization: "Byculla",
      institution: "M.H. Saboo Siddik College of Engineering",
      duration: "Sept 2023 – June 2026",
      grade: "8.80 CGPA",
      points: [
        "Acquired deep fundamentals in computer systems, cryptographic protocols, blockchain engineering, and network security.",
        "Built transparent decentralized applications and smart contract ecosystems as part of engineering projects."
      ],
      skills: ["IoT Ecosystems", "Cryptography & Cyber Security", "Solidity", "Computer Science"],
    }
  ];

  const getLogoIcon = (name: string) => {
    if (name === "Express.js") {
      return (
        <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-[7px] font-bold text-zinc-300 border border-zinc-700">
          ex
        </div>
      );
    }
    if (techLogos[name]) {
      return <img src={techLogos[name]} alt={name} className="w-4 h-4 object-contain" />;
    }
    return null;
  };

  return (
    <section id="journey" className="py-20 bg-background dark:bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full border border-border dark:border-white/10 bg-card/50 dark:bg-gray-900/40 text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4 backdrop-blur-sm">
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
          <div className="mt-10 p-1.5 bg-muted/40 dark:bg-gray-900/60 rounded-full border border-border dark:border-white/10 flex items-center w-80 relative">
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
        <div className="max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "experience" ? (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative border-l border-zinc-800 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[1px] md:before:bg-zinc-800 pl-6 md:pl-0"
              >
                {experienceData.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative flex flex-col md:grid md:grid-cols-9 md:gap-8 items-center mb-12">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-30px] md:left-1/2 md:-translate-x-1/2 top-4 w-2.5 h-2.5 rounded-full bg-white z-20 ring-4 ring-background"></div>

                      {/* Left Column: Card or Date */}
                      <div className={`w-full md:col-span-4 ${isLeft ? "order-2 md:order-none md:text-right" : "order-1 md:order-none"}`}>
                        {isLeft ? (
                          <Card className="p-6 bg-[#09090b]/70 dark:bg-[#09090b]/40 dark:backdrop-blur-md rounded-3xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/20 text-left">
                            <h3 className="text-2xl font-bold text-foreground font-playfair mb-1 group-hover:text-primary transition-colors">
                              {item.role}
                            </h3>
                            <p className="text-sm font-semibold text-muted-foreground/80 mb-4">
                              <span className="text-zinc-200">{item.company}</span> • <span className="text-zinc-400">📍 {item.location}</span>
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm md:text-base leading-relaxed mb-6 marker:text-zinc-600">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx}>{pt}</li>
                              ))}
                            </ul>
                            {item.skills && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 justify-start">
                                {item.skills.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-3.5 py-1.5 bg-zinc-900/40 border border-zinc-800/60 rounded-full text-xs font-medium text-zinc-400 flex items-center gap-2 hover:bg-zinc-800/40 transition-colors cursor-default"
                                  >
                                    {getLogoIcon(skill)}
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </Card>
                        ) : (
                          <div className="flex md:justify-end items-center gap-2 text-zinc-300 font-semibold bg-zinc-900/60 border border-zinc-800/60 px-4 py-2 rounded-full text-sm w-fit md:ml-auto mb-4 md:mb-0">
                            <Calendar size={14} className="text-zinc-400" />
                            {item.duration}
                          </div>
                        )}
                      </div>

                      {/* Spacer for Center */}
                      <div className="hidden md:block md:col-span-1"></div>

                      {/* Right Column: Date or Card */}
                      <div className={`w-full md:col-span-4 ${isLeft ? "order-1 md:order-none" : "order-2 md:order-none"}`}>
                        {isLeft ? (
                          <div className="flex md:justify-start items-center gap-2 text-zinc-300 font-semibold bg-zinc-900/60 border border-zinc-800/60 px-4 py-2 rounded-full text-sm w-fit mb-4 md:mb-0">
                            <Calendar size={14} className="text-zinc-400" />
                            {item.duration}
                          </div>
                        ) : (
                          <Card className="p-6 bg-[#09090b]/70 dark:bg-[#09090b]/40 dark:backdrop-blur-md rounded-3xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/20 text-left">
                            <h3 className="text-2xl font-bold text-foreground font-playfair mb-1 group-hover:text-primary transition-colors">
                              {item.role}
                            </h3>
                            <p className="text-sm font-semibold text-muted-foreground/80 mb-4">
                              <span className="text-zinc-200">{item.company}</span> • <span className="text-zinc-400">📍 {item.location}</span>
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm md:text-base leading-relaxed mb-6 marker:text-zinc-600">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx}>{pt}</li>
                              ))}
                            </ul>
                            {item.skills && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 justify-start">
                                {item.skills.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-3.5 py-1.5 bg-zinc-900/40 border border-zinc-800/60 rounded-full text-xs font-medium text-zinc-400 flex items-center gap-2 hover:bg-zinc-800/40 transition-colors cursor-default"
                                  >
                                    {getLogoIcon(skill)}
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </Card>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative border-l border-zinc-800 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[1px] md:before:bg-zinc-800 pl-6 md:pl-0"
              >
                {educationData.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={idx} className="relative flex flex-col md:grid md:grid-cols-9 md:gap-8 items-center mb-12">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-30px] md:left-1/2 md:-translate-x-1/2 top-4 w-2.5 h-2.5 rounded-full bg-white z-20 ring-4 ring-background"></div>

                      {/* Left Column: Card or Date */}
                      <div className={`w-full md:col-span-4 ${isLeft ? "order-2 md:order-none md:text-right" : "order-1 md:order-none"}`}>
                        {isLeft ? (
                          <Card className="p-6 bg-[#09090b]/70 dark:bg-[#09090b]/40 dark:backdrop-blur-md rounded-3xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/20 text-left">
                            <h3 className="text-2xl font-bold text-foreground font-playfair mb-1 group-hover:text-primary transition-colors">
                              {item.degree}
                            </h3>
                            <p className="text-base font-semibold text-primary/80 mb-1">
                              {item.field}
                            </p>
                            <p className="text-xs text-muted-foreground/80 mb-3">
                              <span className="text-zinc-200">{item.institution}</span> • <span className="text-zinc-400">{item.specialization}</span>
                            </p>
                            {item.grade && (
                              <p className="text-sm font-bold text-primary mb-4">
                                {item.grade}
                              </p>
                            )}
                            <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm md:text-base leading-relaxed mb-6 marker:text-zinc-600">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx}>{pt}</li>
                              ))}
                            </ul>
                            {item.skills && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 justify-start">
                                {item.skills.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-3.5 py-1.5 bg-zinc-900/40 border border-zinc-800/60 rounded-full text-xs font-medium text-zinc-400 flex items-center gap-2 hover:bg-zinc-800/40 transition-colors cursor-default"
                                  >
                                    {getLogoIcon(skill)}
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </Card>
                        ) : (
                          <div className="flex md:justify-end items-center gap-2 text-zinc-300 font-semibold bg-zinc-900/60 border border-zinc-800/60 px-4 py-2 rounded-full text-sm w-fit md:ml-auto mb-4 md:mb-0">
                            <Calendar size={14} className="text-zinc-400" />
                            {item.duration}
                          </div>
                        )}
                      </div>

                      {/* Spacer for Center */}
                      <div className="hidden md:block md:col-span-1"></div>

                      {/* Right Column: Date or Card */}
                      <div className={`w-full md:col-span-4 ${isLeft ? "order-1 md:order-none" : "order-2 md:order-none"}`}>
                        {isLeft ? (
                          <div className="flex md:justify-start items-center gap-2 text-zinc-300 font-semibold bg-zinc-900/60 border border-zinc-800/60 px-4 py-2 rounded-full text-sm w-fit mb-4 md:mb-0">
                            <Calendar size={14} className="text-zinc-400" />
                            {item.duration}
                          </div>
                        ) : (
                          <Card className="p-6 bg-[#09090b]/70 dark:bg-[#09090b]/40 dark:backdrop-blur-md rounded-3xl border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/20 text-left">
                            <h3 className="text-2xl font-bold text-foreground font-playfair mb-1 group-hover:text-primary transition-colors">
                              {item.degree}
                            </h3>
                            <p className="text-base font-semibold text-primary/80 mb-1">
                              {item.field}
                            </p>
                            <p className="text-xs text-muted-foreground/80 mb-3">
                              <span className="text-zinc-200">{item.institution}</span> • <span className="text-zinc-400">{item.specialization}</span>
                            </p>
                            {item.grade && (
                              <p className="text-sm font-bold text-primary mb-4">
                                {item.grade}
                              </p>
                            )}
                            <ul className="list-disc pl-5 space-y-2 text-zinc-400 text-sm md:text-base leading-relaxed mb-6 marker:text-zinc-600">
                              {item.points.map((pt, pIdx) => (
                                <li key={pIdx}>{pt}</li>
                              ))}
                            </ul>
                            {item.skills && item.skills.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60 justify-start">
                                {item.skills.map((skill, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-3.5 py-1.5 bg-zinc-900/40 border border-zinc-800/60 rounded-full text-xs font-medium text-zinc-400 flex items-center gap-2 hover:bg-zinc-800/40 transition-colors cursor-default"
                                  >
                                    {getLogoIcon(skill)}
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </Card>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Journey;
