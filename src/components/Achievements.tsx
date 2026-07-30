import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Award,
  Trophy,
  GraduationCap,
  Flame,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Calendar,
  ExternalLink,
  X,
  Cpu,
  Star,
  Layers,
  CheckCircle2,
  Bookmark
} from "lucide-react";

// Certificate Image Imports
import cert1 from "@/assets/certificates/cert1.jpg";
import cert2 from "@/assets/certificates/cert2.jpg";
import cert3 from "@/assets/certificates/cert3.jpg";
import cert4 from "@/assets/certificates/cert4.jpg";
import cert5 from "@/assets/certificates/cert5.jpg";
import cert6 from "@/assets/certificates/cert6.jpg";
import cert7 from "@/assets/certificates/cert7.jpg";
import cert8 from "@/assets/certificates/cert8.jpg";
import cert9 from "@/assets/certificates/cert9.jpg";
import cert10 from "@/assets/certificates/cert10.jpg";
import cert11 from "@/assets/certificates/cert11.jpg";
import cert12 from "@/assets/certificates/cert12.jpg";
import cert13 from "@/assets/certificates/cert13.jpg";
import cert14 from "@/assets/certificates/cert14.jpg";
import cert15 from "@/assets/certificates/cert15.jpg";
import cert16 from "@/assets/certificates/cert16.jpg";
import cert17 from "@/assets/certificates/cert17.jpg";
import cert18 from "@/assets/certificates/cert18.jpg";
import cert19 from "@/assets/certificates/cert19_fixed.png";
import cert20 from "@/assets/certificates/cert20.jpg";
import cert21 from "@/assets/certificates/cert21.jpg";
import cert22 from "@/assets/certificates/cert22_fixed.jpg";

// Interactive Particle Background Canvas Component
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

    const particleCount = 40;
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
        radius: Math.random() * 1.6 + 0.5,
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

// Animated Counting Number Stat Box Component
const AnimatedCounter = ({
  value,
  label,
  suffix = ""
}: {
  value: string;
  label: string;
  suffix?: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseFloat(value);
  const isFloat = value.includes(".");
  const isNaNVal = isNaN(numericValue);

  useEffect(() => {
    if (!isInView || isNaNVal) return;
    let start = 0;
    const duration = 1800;
    const steps = 50;
    const increment = numericValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, numericValue, isNaNVal]);

  return (
    <div
      ref={ref}
      className="text-center p-4 sm:p-6 rounded-3xl bg-[#09090c]/70 border border-white/10 backdrop-blur-2xl shadow-xl hover:border-[#ff2d55]/40 hover:shadow-[0_0_30px_rgba(255,45,85,0.2)] transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-playfair group-hover:text-[#ff2d55] transition-colors">
        {isNaNVal
          ? value
          : isFloat
          ? displayValue.toFixed(2)
          : Math.floor(displayValue)}
        {suffix}
      </p>
      <p className="text-xs sm:text-sm font-semibold text-white/60 mt-1.5 uppercase tracking-wider font-sans">
        {label}
      </p>
    </div>
  );
};

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState<{
    image: string;
    title: string;
    issuer?: string;
  } | null>(null);

  // Mouse spotlight tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  // Timeline Milestones Data
  const milestones = [
    {
      category: "Hackathon",
      title: "ERR_404 6.0 International Hackathon",
      issuer: "MHSSCE Programmers' Club",
      date: "Feb 15–16, 2025",
      description: "Participated in 36 hours of intense international hackathon building real-world solutions.",
      icon: Flame,
      image: cert13,
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
    },
    {
      category: "Research",
      title: "Path to Research Mastery Lecture Series",
      issuer: "MHSSCE Computer Dept & CSI Chapter",
      date: "Feb 5, 2025",
      description: "Completed month-long research mastery series covering academic literature & data methods.",
      icon: BookOpen,
      image: cert17,
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
    },
    {
      category: "Competition",
      title: "Hierro CTF Cybersecurity Hackathon",
      issuer: "Hierroshield Pvt Ltd",
      date: "Nov 30, 2025",
      description: "Recognized for active involvement & speed in solving live cybersecurity CTF challenges.",
      icon: ShieldCheck,
      image: cert19,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    },
    {
      category: "Certification",
      title: "Oracle Certified Generative AI Professional",
      issuer: "Oracle University",
      date: "Oct 26, 2025",
      description: "Earned Oracle Certified Professional credentials in OCI Generative AI & Cloud Architecture.",
      icon: Award,
      image: cert9,
      badgeColor: "bg-[#ff2d55]/10 text-[#ff2d55] border-[#ff2d55]/30"
    },
    {
      category: "Leadership",
      title: "Microsoft Azure Student Ambassador Challenge",
      issuer: "Microsoft Learn Student Ambassadors",
      date: "2025",
      description: "Completed Microsoft Build Azure virtual challenges for student ambassador excellence.",
      icon: Sparkles,
      image: cert22,
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
    },
    {
      category: "Competition",
      title: "Clash Of Codes 2.0 — Ace Track",
      issuer: "Mumbai University",
      date: "2025",
      description: "Awarded for top performance and problem-solving speed in competitive programming.",
      icon: Trophy,
      image: cert14,
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
    },
    {
      category: "Certification",
      title: "Deloitte Cybersecurity Virtual Experience",
      issuer: "Deloitte (via Forage)",
      date: "Nov 14, 2025",
      description: "Executed practical cybersecurity tasks analyzing enterprise risk & system defenses.",
      icon: ShieldCheck,
      image: cert12,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
    },
    {
      category: "Hackathon",
      title: "3-Day MERN Stack Intensive Bootcamp",
      issuer: "MHSSCE Programmers' Club",
      date: "2025",
      description: "Built full-stack React & Node.js web applications under time constraints.",
      icon: Flame,
      image: cert16,
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
    },
    {
      category: "Open Source",
      title: "IEEE World Environment Day AI Poster Challenge",
      issuer: "IEEE Student Branch",
      date: "2025",
      description: "Designed digital poster under theme 'Planet in Beta: Can AI Save Earth?'",
      icon: Star,
      image: cert18,
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30"
    }
  ];

  const statCounters = [
    { label: "Projects Built", value: "15", suffix: "+" },
    { label: "Certifications", value: "8", suffix: "+" },
    { label: "Hackathons", value: "3", suffix: "+" },
    { label: "Academic CGPA", value: "8.80", suffix: "" },
    { label: "GATE Exam", value: "Qualified", suffix: "" }
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#050505] text-white py-24 sm:py-32 lg:py-36 overflow-hidden selection:bg-[#ff2d55]/30 selection:text-white"
    >
      {/* Background Ambient Lighting & Floating Particles */}
      <ParticleBackground />

      {/* Mouse Follow Ambient Radial Light */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 45, 85, 0.12), transparent 75%)`
        }}
      />

      {/* Ambient Crimson & Wine Radial Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-[#ff2d55]/15 via-[#800020]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow-red" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff4b6e]/15 via-[#4a0010]/10 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow-red" />

      {/* Subtle Animated Grid Overlay */}
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
              Credibility & Honors
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-playfair"
          >
            Milestones That Shaped My{" "}
            <span className="animate-gradient-text-red">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-sans font-light"
          >
            Every achievement represents a challenge accepted, a skill mastered,
            and a step toward becoming a better engineer.
          </motion.p>
        </div>

        {/* SPECIAL FEATURE: FLOATING ACHIEVEMENT COUNTER ROW */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-20 max-w-5xl mx-auto"
        >
          {statCounters.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>

        {/* CINEMATIC VERTICAL TIMELINE CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing Animated Red Timeline Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#ff2d55] via-[#ff4b6e] to-[#800020] shadow-[0_0_15px_#ff2d55] z-0" />

          <div className="space-y-12 sm:space-y-16 relative z-10">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: isEven ? -40 : 40,
                    filter: "blur(10px)"
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)"
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Milestone Node on Center Line */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-20 flex items-center justify-center">
                    <span className="w-5 h-5 rounded-full bg-[#050505] border-2 border-[#ff2d55] shadow-[0_0_15px_#ff2d55] flex items-center justify-center group">
                      <span className="w-2 h-2 rounded-full bg-[#ff2d55] animate-ping" />
                    </span>
                  </div>

                  {/* Left / Right Card Content Container */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="relative bg-[#09090c]/75 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#ff2d55]/40 hover:shadow-[0_0_40px_rgba(255,45,85,0.25)] transition-all duration-500 group overflow-hidden"
                    >
                      {/* Floating Glass Reflection Top Edge */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      {/* Header Badge & Date */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-white/50 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-[#ff2d55]" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-playfair group-hover:text-[#ff2d55] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-white/50 mt-1 mb-3">
                        {item.issuer}
                      </p>

                      {/* One-Line Minimal Description */}
                      <p className="text-sm text-white/70 leading-relaxed font-sans font-light mb-5">
                        {item.description}
                      </p>

                      {/* Thumbnail Preview & Action Button */}
                      {item.image && (
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4">
                          <div
                            onClick={() =>
                              setSelectedCert({
                                image: item.image!,
                                title: item.title,
                                issuer: item.issuer
                              })
                            }
                            className="relative w-20 h-12 rounded-xl overflow-hidden border border-white/10 cursor-pointer group/img flex-shrink-0"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover/img:bg-black/10 transition-colors" />
                          </div>

                          <button
                            onClick={() =>
                              setSelectedCert({
                                image: item.image!,
                                title: item.title,
                                issuer: item.issuer
                              })
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-[#ff2d55] transition-colors group/btn"
                          >
                            <span>View Credential</span>
                            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FULL CERTIFICATE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedCert(null)}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-[#ff2d55] text-white rounded-full transition-colors backdrop-blur-sm border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative flex flex-col items-center max-w-[95vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-2xl border border-white/10 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-white font-playfair">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-white/60 mt-0.5">
                  {selectedCert.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
