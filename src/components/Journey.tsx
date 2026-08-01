import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Compass,
  Rocket
} from "lucide-react";

// Interactive Canvas Particle Component
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
        radius: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
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
        ctx.fillStyle = `rgba(59, 130, 246, ${clampedAlpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(59, 130, 246, 0.7)";
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

// 3D Tilt Card Component for Milestone Islands
const TiltIslandCard = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Journey = () => {
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

  // Scroll Progress Tracking for Snaking Path
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 85%"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  // Career Story Chapters (Milestone Islands)
  const chapters = [
    {
      chapter: "01",
      type: "Education",
      icon: GraduationCap,
      title: "Diploma in Information Technology",
      subtitle: "Vidyalankar Polytechnic • Mumbai",
      date: "Aug 2020 – Jun 2023",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    },
    {
      chapter: "02",
      type: "Experience",
      icon: Briefcase,
      title: "Front-end Developer Intern",
      subtitle: "Sunarj Technologies • Mumbai",
      date: "Jun 2022 – Nov 2022",
      badgeColor: "bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/30"
    },
    {
      chapter: "03",
      type: "Education",
      icon: GraduationCap,
      title: "B.E. in CSE (IoT & Cyber Security)",
      subtitle: "M.H. Saboo Siddik College of Engineering",
      date: "Sept 2023 – Jun 2026",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
    },
    {
      chapter: "04",
      type: "Experience",
      icon: Briefcase,
      title: "AR Associate",
      subtitle: "Macksofy Technologies • Remote",
      date: "Mar 2026 – Present",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    },
    {
      chapter: "05",
      type: "Education",
      icon: GraduationCap,
      title: "Masters of Technology (M.Tech)",
      subtitle: "K.J. Somaiya School of Engineering",
      date: "Jun 2026 – May 2028",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    },
    {
      chapter: "06",
      type: "Internship",
      icon: Briefcase,
      title: "Business Development Intern",
      subtitle: "GAOTek Inc. • New York, US (Remote)",
      date: "Jul 2026 – Present",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
    }
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-950/20 via-background to-blue-900/10 dark:from-transparent dark:via-transparent dark:to-transparent overflow-hidden selection:bg-[#3b82f6]/30 selection:text-white"
    >
      {/* Background Ambient Lighting & Effects */}
      <ParticleBackground />

      {/* Grid Pattern Background matching AI Creative Studio */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Mouse Follow Ambient Radial Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.12), transparent 75%)`
        }}
      />

      {/* Blue Ambient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-[#3b82f6]/15 via-[#1e3a8a]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow-blue" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563eb]/15 via-[#172554]/10 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow-blue" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3b82f6] animate-spin-slow" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-white/80">
              Interactive Storytelling
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4 sm:mb-6 font-playfair"
          >
            My Engineering <span className="animate-gradient-text-blue">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-sm xs:text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-sans font-light"
          >
            Every project, internship, achievement, and challenge became another
            step toward becoming the engineer I am today.
          </motion.p>
        </div>

        {/* SNAKING RIVER PATH & FLOATING ISLAND MILESTONES CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Snaking SVG Path Line (Desktop & Tablet) */}
          <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 3200"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Background Dim Snaking Path */}
              <path
                d="M 500 0 C 800 250, 800 450, 500 650 C 200 850, 200 1050, 500 1250 C 800 1450, 800 1650, 500 1850 C 200 2050, 200 2250, 500 2450 C 800 2650, 800 2850, 500 3200"
                stroke="rgba(59, 130, 246, 0.15)"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
              {/* Illuminated Glowing Animated Path */}
              <motion.path
                d="M 500 0 C 800 250, 800 450, 500 650 C 200 850, 200 1050, 500 1250 C 800 1450, 800 1650, 500 1850 C 200 2050, 200 2250, 500 2450 C 800 2650, 800 2850, 500 3200"
                stroke="url(#blueRiverGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="blueRiverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Straight Glowing Vertical Center Line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3b82f6] via-[#2563eb] to-[#1e3a8a] md:hidden z-0 shadow-[0_0_15px_#3b82f6]" />

          {/* FLOATING ISLAND CHAPTER CARDS STACK */}
          <div className="space-y-12 xs:space-y-16 sm:space-y-28 relative z-10">
            {chapters.map((ch, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = ch.icon;

              return (
                <div key={idx} className="relative">
                  {/* Main Milestone Island Card */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -30 : 30,
                      filter: "blur(12px)"
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)"
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Glowing Milestone Node on River Path */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 top-6 sm:top-8 -translate-x-1/2 z-20 flex items-center justify-center">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#050505] border-2 border-[#3b82f6] shadow-[0_0_20px_#3b82f6] flex items-center justify-center group">
                        <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3b82f6] animate-ping" />
                      </span>
                    </div>

                    {/* Island Platform Card */}
                    <div className="w-full md:w-[46%] pl-9 xs:pl-12 sm:pl-14 md:pl-0">
                      <TiltIslandCard>
                        <div className="relative bg-[#09090c]/75 backdrop-blur-2xl border border-white/10 rounded-[22px] sm:rounded-[30px] p-4 xs:p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] hover:border-[#3b82f6]/40 hover:shadow-[0_0_45px_rgba(59,130,246,0.25)] transition-all duration-500 group overflow-hidden">
                          {/* Floating Top Reflection Highlight */}
                          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3b82f6]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#3b82f6]/20 transition-all duration-700" />

                          {/* Island Header: Chapter Tag & Date */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold border ${ch.badgeColor}`}
                            >
                              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              Chapter {ch.chapter} • {ch.type}
                            </span>
                            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white/50">
                              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#3b82f6]" />
                              <span>{ch.date}</span>
                            </div>
                          </div>

                          {/* Island Title & Subtitle */}
                          <h3 className="text-base xs:text-lg sm:text-2xl font-bold text-white tracking-tight font-playfair group-hover:text-[#3b82f6] transition-colors leading-snug">
                            {ch.title}
                          </h3>
                          <p className="text-xs sm:text-sm font-medium text-white/50 mt-1">
                            {ch.subtitle}
                          </p>
                        </div>
                      </TiltIslandCard>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
