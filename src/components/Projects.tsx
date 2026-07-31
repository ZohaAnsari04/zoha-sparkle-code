import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Lock,
  ArrowUpRight,
  TrendingUp,
  Activity,
  Cpu,
  Layers,
  CheckCircle2,
  Filter
} from "lucide-react";

import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpg";
import project6 from "@/assets/project6.png";
import project7 from "@/assets/project7.png";
import jobVerifyImg from "@/assets/jobverify.png";
import foreseeImg from "@/assets/foresee.png";

// Canvas Floating Particles Backdrop
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = 35;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.2;
        const clampedAlpha = Math.max(0.1, Math.min(0.8, currentAlpha));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 45, 85, ${clampedAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255, 45, 85, 0.7)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-50"
    />
  );
};

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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
      className={`relative group overflow-hidden bg-[#09090c]/75 backdrop-blur-2xl border border-white/10 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.05)] hover:border-[#3b82f6]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(59,130,246,0.2)] transition-all duration-500 ${className}`}
    >
      {/* Mouse Follow Ambient Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 70%)`
        }}
      />

      {/* Floating Glass Reflection Top Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-20" />

      {/* Internal Content */}
      <div className="relative z-20 h-full flex flex-col justify-between p-5 sm:p-6">
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
    <div className={`rounded-xl border border-white/10 bg-[#121216] overflow-hidden shadow-xl ${className}`}>
      {/* macOS Header Bar */}
      <div className="px-3.5 py-2 bg-[#18181e]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between gap-3">
        {/* macOS Traffic Light Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]/40 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]/40 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]/40 inline-block" />
        </div>

        {/* Address Bar */}
        {urlDomain && (
          <div className="flex-1 max-w-[200px] mx-auto flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] text-white/50 font-mono select-none truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />
            <span className="truncate">{urlDomain}</span>
          </div>
        )}

        <div className="w-8 hidden sm:block" />
      </div>

      {/* Screenshot Container */}
      <div className="relative overflow-hidden bg-black/40 h-full">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
      </div>
    </div>
  );
};

// Animated Glass Tech Pill Component
const TechPill = ({ name }: { name: string }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-white/80 hover:text-white hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-300 backdrop-blur-md"
    >
      <span className="w-1 h-1 rounded-full bg-[#3b82f6]" />
      {name}
    </motion.span>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLElement | null>(null);

  // Mouse spotlight tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const filterChips = ["All", "AI", "Frontend", "Machine Learning"];

  // Featured Project Data (FORESEE)
  const featuredProject = {
    id: "foresee",
    title: "FORESEE",
    subtitle: "Mental Health & Disease Outbreak AI Platform",
    image: foreseeImg,
    description: "AI-powered healthcare platform for real-time disease diagnosis, epidemic forecasting, and clinical support.",
    domain: "foreseehealth.vercel.app",
    categories: ["AI", "Machine Learning", "UI/UX"],
    metrics: [
      { label: "Diagnosis Accuracy", value: "94.8%", icon: Activity },
      { label: "Outbreak AI", value: "Real-time", icon: TrendingUp },
      { label: "Clinical Metrics", value: "28 Parameters", icon: Cpu }
    ],
    tech: ["React", "Python", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://foreseehealth.vercel.app/",
    github: "https://github.com/ZohaAnsari04"
  };

  // Compact Bento Projects List
  const projectsData = [
    {
      id: "splitsync",
      title: "SplitSync",
      description: "Automated group expense tracking and intelligent balance settlement platform.",
      image: project1,
      domain: "splitsync-umber.vercel.app",
      categories: ["Frontend", "UI/UX"],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      demo: "https://splitsync-umber.vercel.app/",
      github: "https://github.com/ZohaAnsari04"
    },
    {
      id: "phisheye",
      title: "PhishEye",
      description: "Real-time phishing detection system analyzing malicious web sources and URLs.",
      image: project2,
      domain: "phisheye.vercel.app",
      categories: ["AI", "Frontend"],
      tech: ["React", "Python", "Tailwind CSS"],
      demo: "https://phisheye.vercel.app/",
      github: "https://github.com/ZohaAnsari04"
    },
    {
      id: "jobverify",
      title: "JobVerify",
      description: "AI platform inspecting job offers to safeguard seekers from fraudulent listings.",
      image: jobVerifyImg,
      domain: "job-shield-zoha.vercel.app",
      categories: ["AI", "Frontend", "UI/UX"],
      tech: ["React", "Python", "Tailwind CSS"],
      demo: "https://job-shield-zoha.vercel.app/",
      github: "https://github.com/ZohaAnsari04"
    },
    {
      id: "taskiepie",
      title: "TaskiePie",
      description: "Minimalist productivity application built for fast daily task & workflow tracking.",
      image: project6,
      domain: "taskiepie.vercel.app",
      categories: ["Frontend", "UI/UX"],
      tech: ["React", "TypeScript", "Tailwind CSS"],
      demo: "https://taskiepie.vercel.app/",
      github: "https://github.com/ZohaAnsari04"
    },
    {
      id: "corecalc",
      title: "CoreCalc",
      description: "Precision arithmetic calculator app featuring real-time expression parsing.",
      image: project7,
      domain: "corecalc.vercel.app",
      categories: ["Frontend"],
      tech: ["React", "JavaScript", "Tailwind CSS"],
      demo: "https://corecalc.vercel.app/",
      github: "https://github.com/ZohaAnsari04"
    }
  ];

  // Filtering Logic
  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "All") return true;
    return p.categories.includes(activeFilter);
  });

  const showFeatured =
    activeFilter === "All" || featuredProject.categories.includes(activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#050505] text-white py-12 sm:py-16 lg:py-20 overflow-hidden selection:bg-[#3b82f6]/30 selection:text-white"
    >
      {/* Background Ambient Lighting & Particles */}
      <ParticleBackground />

      {/* Dynamic Mouse Spotlight Floor */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 75%)`
        }}
      />

      {/* Blue Ambient Glow Orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-gradient-to-br from-[#3b82f6]/15 via-[#1e3a8a]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow-blue" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563eb]/15 via-[#172554]/10 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow-blue" />

      {/* Subtle Grid Pattern & Noise Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise-pattern pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-[#3b82f6] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">
              Product Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4 sm:mb-6 font-playfair"
          >
            Featured <span className="animate-gradient-text-blue">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm xs:text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            A curated collection of products I've designed and built using modern technologies.
          </motion.p>
        </div>

        {/* ANIMATED FILTER CHIPS */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-10 sm:mb-14 max-w-3xl mx-auto px-2"
        >
          {filterChips.map((chip) => {
            const isActive = activeFilter === chip;
            return (
              <button
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all duration-300 backdrop-blur-md border min-h-[38px] flex items-center justify-center ${
                  isActive
                    ? "text-white border-[#3b82f6] bg-[#3b82f6]/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "text-white/70 border-white/10 bg-white/[0.03] hover:text-white hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterGlow"
                    className="absolute inset-0 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/50 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {chip === "All" && <Filter className="w-3 h-3 text-[#3b82f6]" />}
                  {chip}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* BENTO GRID DISPLAY CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. FEATURED PROJECT (SPANS 2 COLUMNS ON DESKTOP) */}
          <AnimatePresence mode="popLayout">
            {showFeatured && (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 min-h-[380px] max-h-[440px]"
              >
                <TiltProjectCard className="h-full">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full">
                    {/* Featured Left Content */}
                    <div className="md:col-span-5 flex flex-col justify-between h-full space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[11px] font-bold text-[#3b82f6] shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                            <Sparkles className="w-3 h-3 animate-pulse" />
                            Featured
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-playfair group-hover:text-[#3b82f6] transition-colors leading-tight">
                          {featuredProject.title}
                        </h3>
                        <p className="text-xs text-white/70 mt-2 leading-relaxed line-clamp-2 font-sans font-light">
                          {featuredProject.description}
                        </p>

                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          {featuredProject.metrics.map((m, idx) => {
                            const Icon = m.icon;
                            return (
                              <div
                                key={idx}
                                className="p-2 rounded-xl bg-white/[0.03] border border-white/10 space-y-0.5 backdrop-blur-md"
                              >
                                <div className="flex items-center gap-1 text-[10px] text-white/50">
                                  <Icon className="w-2.5 h-2.5 text-[#3b82f6]" />
                                  <span className="truncate">{m.label}</span>
                                </div>
                                <p className="text-xs font-bold text-white tracking-tight truncate">
                                  {m.value}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Bottom Footer: Tech & Icon Buttons */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {featuredProject.tech.slice(0, 3).map((t, idx) => (
                            <TechPill key={idx} name={t} />
                          ))}
                        </div>

                        {/* Icon-Only Action Buttons */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {featuredProject.demo && (
                            <a
                              href={featuredProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2.5 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Featured Right Image */}
                    <div className="md:col-span-7 h-full flex items-center justify-center">
                      <MacOsBrowserMockup
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        urlDomain={featuredProject.domain}
                        className="h-[240px] sm:h-[300px] w-full"
                      />
                    </div>
                  </div>
                </TiltProjectCard>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. COMPACT BENTO PROJECT CARDS */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="h-[380px] max-h-[420px]"
              >
                <TiltProjectCard className="h-full">
                  <div className="flex flex-col justify-between h-full space-y-3">
                    {/* Top 60% Image Preview */}
                    <div className="h-[210px] overflow-hidden rounded-xl">
                      <MacOsBrowserMockup
                        src={project.image}
                        alt={project.title}
                        urlDomain={project.domain}
                        className="h-full w-full"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="space-y-1.5">
                      <h4 className="text-xl font-bold text-white tracking-tight font-playfair group-hover:text-[#3b82f6] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed font-sans font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer: Tech Pills & Icon-Only Action Buttons */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((t, tIdx) => (
                          <TechPill key={tIdx} name={t} />
                        ))}
                      </div>

                      {/* Icon-Only Action Buttons */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all duration-300"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltProjectCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;