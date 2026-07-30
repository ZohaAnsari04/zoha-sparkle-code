import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Lock,
  ArrowUpRight,
  TrendingUp,
  Activity,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Cpu
} from "lucide-react";

import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";
import project6 from "@/assets/project6.png";
import project7 from "@/assets/project7.png";
import jobVerifyImg from "@/assets/jobverify.png";
import foreseeImg from "@/assets/foresee.png";

// 3D Card Tilt Component with Cursor Spotlight
const TiltProjectCard = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({ x: mouseX, y: mouseY });

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d"
      }}
      className={`relative group overflow-hidden bg-[#09090c]/75 backdrop-blur-2xl border border-white/10 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,45,85,0.05)] hover:border-[#ff2d55]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(255,45,85,0.2)] transition-all duration-500 ${className}`}
    >
      {/* Mouse Follow Ambient Spotlight Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 45, 85, 0.12), transparent 70%)`
        }}
      />

      {/* Floating Glass Edge Reflection */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-20" />

      {/* Internal Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-between p-6 sm:p-8">
        {children}
      </div>
    </motion.div>
  );
};

// macOS Browser Window Mockup Wrapper
const MacOsBrowserMockup = ({
  src,
  alt,
  urlDomain,
  className = ""
}: {
  src: string;
  alt: string;
  urlDomain?: string;
  className?: string;
}) => {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[#121216] overflow-hidden shadow-2xl ${className}`}>
      {/* macOS Header Bar */}
      <div className="px-4 py-3 bg-[#18181e]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-4">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/40 inline-block" />
        </div>

        {/* Address Bar */}
        {urlDomain && (
          <div className="flex-1 max-w-xs mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-white/50 font-mono select-none truncate">
            <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
            <span className="truncate">{urlDomain}</span>
          </div>
        )}

        <div className="w-12 hidden sm:block" />
      </div>

      {/* Browser Canvas Container */}
      <div className="relative overflow-hidden bg-black/40 group-hover:bg-black/20 transition-colors">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
      </div>
    </div>
  );
};

// Animated Glass Tech Pill Component
const TechPill = ({ name }: { name: string }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/80 hover:text-white hover:border-[#ff2d55]/50 hover:bg-[#ff2d55]/10 hover:shadow-[0_0_15px_rgba(255,45,85,0.25)] transition-all duration-300 backdrop-blur-md"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d55]" />
      {name}
    </motion.span>
  );
};

const Projects = () => {
  const featuredProject = {
    title: "FORESEE",
    subtitle: "AI Healthcare & Outbreak Forecasting Platform",
    image: foreseeImg,
    description: "AI-powered healthcare platform for real-time disease diagnosis, epidemic forecasting, and clinical decision support.",
    domain: "foreseehealth.vercel.app",
    metrics: [
      { label: "Diagnosis Accuracy", value: "94.8%", icon: Activity },
      { label: "Outbreak Analytics", value: "Real-time AI", icon: TrendingUp },
      { label: "Healthcare Data", value: "28 Metrics", icon: Cpu }
    ],
    tech: ["React", "Node.js", "Python", "MongoDB", "Tailwind CSS"],
    demo: "https://foreseehealth.vercel.app/"
  };

  const bentoProjects = [
    {
      title: "SplitSync",
      description: "Automated expense management and group balance settlement platform.",
      image: project1,
      domain: "splitsync-umber.vercel.app",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      demo: "https://splitsync-umber.vercel.app/",
      colSpan: "lg:col-span-7"
    },
    {
      title: "PhishEye",
      description: "Real-time phishing detection system monitoring scam web sources.",
      image: project2,
      domain: "phisheye.vercel.app",
      tech: ["React", "Tailwind CSS", "Python"],
      demo: "https://phisheye.vercel.app/",
      colSpan: "lg:col-span-5"
    },
    {
      title: "JobVerify",
      description: "Intelligent AI platform analyzing listings to protect job seekers from scam offers.",
      image: jobVerifyImg,
      domain: "job-shield-zoha.vercel.app",
      tech: ["React", "Python", "Tailwind CSS"],
      demo: "https://job-shield-zoha.vercel.app/",
      colSpan: "lg:col-span-5"
    },
    {
      title: "TaskiePie",
      description: "Minimalist task productivity application engineered for fast daily workflow tracking.",
      image: project6,
      domain: "taskiepie.vercel.app",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      demo: "https://taskiepie.vercel.app/",
      colSpan: "lg:col-span-7"
    },
    {
      title: "CoreCalc",
      description: "Precision arithmetic calculator app featuring real-time expression parsing.",
      image: project7,
      domain: "corecalc.vercel.app",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      demo: "https://corecalc.vercel.app/",
      colSpan: "lg:col-span-12"
    }
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#050505] text-white py-24 sm:py-32 lg:py-36 overflow-hidden selection:bg-[#ff2d55]/30 selection:text-white"
    >
      {/* Ambient Radial Lighting & Crimson Glow Orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-gradient-to-br from-[#ff2d55]/15 via-[#800020]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow-red" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff4b6e]/15 via-[#4a0010]/10 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow-red" />

      {/* Animated Grid & Noise Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise-pattern pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,45,85,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-[#ff2d55] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">
              Selected Showcase
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-playfair"
          >
            Selected <span className="animate-gradient-text-red">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Real-world products built with modern technologies to solve meaningful problems.
          </motion.p>
        </div>

        {/* 1. FEATURED HIGHLIGHT PROJECT (FULL WIDTH HERO CARD) */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mb-12 lg:mb-16"
        >
          <TiltProjectCard className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Featured Left Side: Content & Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2d55]/10 border border-[#ff2d55]/30 text-xs font-semibold text-[#ff2d55] shadow-[0_0_15px_rgba(255,45,85,0.2)]">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    Featured Project
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-playfair">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm font-medium text-[#ff2d55]">
                    {featuredProject.subtitle}
                  </p>
                </div>

                <p className="text-base text-white/80 leading-relaxed font-sans font-light">
                  {featuredProject.description}
                </p>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {featuredProject.metrics.map((m, idx) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1 backdrop-blur-md"
                      >
                        <div className="flex items-center gap-1.5 text-xs text-white/50">
                          <Icon className="w-3.5 h-3.5 text-[#ff2d55]" />
                          <span className="truncate">{m.label}</span>
                        </div>
                        <p className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                          {m.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.tech.map((t, idx) => (
                    <TechPill key={idx} name={t} />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ff2d55] via-[#ff4b6e] to-[#c2185b] text-white font-semibold text-sm shadow-[0_10px_30px_rgba(255,45,85,0.35)] hover:shadow-[0_15px_45px_rgba(255,45,85,0.55)] hover:-translate-y-0.5 transition-all duration-300 group/btn"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Featured Right Side: macOS Mockup */}
              <div className="lg:col-span-7">
                <MacOsBrowserMockup
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  urlDomain={featuredProject.domain}
                  className="h-[320px] sm:h-[420px] lg:h-[460px]"
                />
              </div>
            </div>
          </TiltProjectCard>
        </motion.div>

        {/* 2. RESPONSIVE BENTO GRID FOR REMAINING PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {bentoProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
              className={`${project.colSpan}`}
            >
              <TiltProjectCard className="h-full">
                <div className="space-y-6 flex flex-col justify-between h-full">
                  {/* Browser Mockup Image */}
                  <MacOsBrowserMockup
                    src={project.image}
                    alt={project.title}
                    urlDomain={project.domain}
                    className="h-[220px] sm:h-[260px]"
                  />

                  {/* Card Bottom Details */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white tracking-tight font-playfair group-hover:text-[#ff2d55] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-white/70 mt-1 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Links Icons */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.demo && project.demo !== "#" && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-[#ff2d55]/10 border border-[#ff2d55]/20 hover:bg-[#ff2d55] text-[#ff2d55] hover:text-white transition-all duration-300"
                            title="Live Preview"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {project.tech.map((t, tIdx) => (
                        <TechPill key={tIdx} name={t} />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltProjectCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;