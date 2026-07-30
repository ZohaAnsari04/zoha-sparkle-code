import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Award,
  BookOpen,
  Sparkles,
  Calendar,
  ExternalLink,
  X,
  Cpu,
  Flame,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  Filter,
  Library,
  BookMarked
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

// Canvas Floating Dust Particles Component
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

// Bookshelf Book Spine Component
interface BookData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  year: string;
  credentialId?: string;
  category: string;
  icon: any;
  image: string;
  skills: string[];
  spineGradient: string;
  ribbonColor: string;
  goldAccent: string;
}

const BookSpine = ({
  book,
  onClick
}: {
  book: BookData;
  onClick: () => void;
}) => {
  const Icon = book.icon;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -18,
        scale: 1.05,
        rotateY: -12,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="relative group cursor-pointer flex-shrink-0 select-none perspective-1000"
    >
      {/* Soft Red Ambient Glow Behind Spine */}
      <div className="absolute -inset-2 bg-[#ff2d55]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Hardcover Book Spine Container */}
      <div
        className={`w-14 sm:w-16 md:w-20 h-64 sm:h-72 md:h-80 rounded-r-lg rounded-l-sm bg-gradient-to-b ${book.spineGradient} border-t-2 border-b-2 border-r ${book.goldAccent} shadow-[5px_15px_35px_rgba(0,0,0,0.8),inset_-2px_0_6px_rgba(255,255,255,0.15)] flex flex-col justify-between items-center py-4 px-1.5 relative overflow-hidden transition-all duration-300`}
      >
        {/* Spine Light Reflection Sweep Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-black/40 pointer-events-none" />

        {/* Top Gold Embossed Icon */}
        <div className="relative z-10 p-2 rounded-full bg-black/40 border border-amber-400/40 shadow-inner group-hover:scale-110 transition-transform">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
        </div>

        {/* Vertical Book Spine Title (Rotated Text) */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-4 overflow-hidden">
          <p className="text-xs sm:text-sm font-bold text-white/90 tracking-wider uppercase font-playfair [writing-mode:vertical-rl] rotate-180 truncate max-h-[180px] drop-shadow-md group-hover:text-white transition-colors">
            {book.title}
          </p>
        </div>

        {/* Bookmark Ribbon Tip Sticking Out Bottom */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 ${book.ribbonColor} shadow-md clip-ribbon z-20 transition-transform group-hover:translate-y-1`}
        />

        {/* Bottom Year & Issuer Badge */}
        <div className="relative z-10 text-center">
          <span className="text-[10px] sm:text-xs font-mono font-bold text-amber-300/90 block">
            {book.year}
          </span>
        </div>
      </div>

      {/* Book Shadow Cast On Walnut Shelf */}
      <div className="w-full h-3 bg-black/80 blur-sm rounded-full mt-1 group-hover:scale-95 transition-transform" />
    </motion.div>
  );
};

const Achievements = () => {
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedBook(null);
    };
    if (selectedBook) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBook]);

  // Curated Hardcover Library Collection Data
  const libraryCollection: BookData[] = [
    {
      id: "oracle-genai",
      title: "Oracle Certified Generative AI Professional",
      issuer: "Oracle University",
      date: "Oct 26, 2025",
      year: "2025",
      credentialId: "322738038OCI25GAIOCP",
      category: "AI",
      icon: Cpu,
      image: cert9,
      skills: ["Oracle Cloud", "Generative AI", "LLM Architecture", "OCI"],
      spineGradient: "from-purple-950 via-purple-900 to-indigo-950",
      ribbonColor: "bg-purple-500",
      goldAccent: "border-amber-400/50"
    },
    {
      id: "azure-mlsa",
      title: "Microsoft Azure Ambassador Challenge",
      issuer: "Microsoft Learn Student Ambassadors",
      date: "2025",
      year: "2025",
      credentialId: "MLSA-AZURE-2025",
      category: "Cloud",
      icon: Sparkles,
      image: cert22,
      skills: ["Microsoft Azure", "Cloud Computing", "Architecture"],
      spineGradient: "from-blue-950 via-blue-900 to-sky-950",
      ribbonColor: "bg-sky-400",
      goldAccent: "border-sky-400/50"
    },
    {
      id: "hierro-ctf",
      title: "Hierro CTF Cybersecurity Hackathon",
      issuer: "Hierroshield Pvt Ltd",
      date: "Nov 30, 2025",
      year: "2025",
      credentialId: "HIERRO-CTF-2025",
      category: "Cyber Security",
      icon: ShieldCheck,
      image: cert19,
      skills: ["Cybersecurity", "CTF", "Ethical Hacking", "Defense"],
      spineGradient: "from-emerald-950 via-emerald-900 to-teal-950",
      ribbonColor: "bg-emerald-500",
      goldAccent: "border-emerald-400/50"
    },
    {
      id: "deloitte-cyber",
      title: "Deloitte Cybersecurity Experience",
      issuer: "Deloitte (via Forage)",
      date: "Nov 14, 2025",
      year: "2025",
      credentialId: "FxcuxqwGepTMRi67K",
      category: "Cyber Security",
      icon: ShieldCheck,
      image: cert12,
      skills: ["Cybersecurity", "Enterprise Risk", "Security Audit"],
      spineGradient: "from-green-950 via-emerald-900 to-teal-950",
      ribbonColor: "bg-emerald-400",
      goldAccent: "border-emerald-500/50"
    },
    {
      id: "research-mastery",
      title: "Path to Research Mastery",
      issuer: "MHSSCE Computer Dept & CSI Chapter",
      date: "Feb 5, 2025",
      year: "2025",
      credentialId: "PRM-2025",
      category: "Research",
      icon: BookOpen,
      image: cert17,
      skills: ["Academic Research", "Data Methodology", "Computer Science"],
      spineGradient: "from-cyan-950 via-teal-900 to-blue-950",
      ribbonColor: "bg-cyan-400",
      goldAccent: "border-cyan-400/50"
    },
    {
      id: "err-hackathon",
      title: "ERR_404 6.0 International Hackathon",
      issuer: "MHSSCE Programmers' Club",
      date: "Feb 15–16, 2025",
      year: "2025",
      credentialId: "ERR404-2025",
      category: "Hackathons",
      icon: Flame,
      image: cert13,
      skills: ["Hackathon", "Problem Solving", "Rapid Prototyping"],
      spineGradient: "from-amber-950 via-amber-900 to-yellow-950",
      ribbonColor: "bg-amber-400",
      goldAccent: "border-amber-400/50"
    },
    {
      id: "mern-bootcamp",
      title: "3-Day MERN Stack Intensive Bootcamp",
      issuer: "MHSSCE Programmers' Club",
      date: "2025",
      year: "2025",
      credentialId: "MERN-BOOTCAMP-2025",
      category: "Frontend",
      icon: Flame,
      image: cert16,
      skills: ["React", "MongoDB", "Express", "Node.js"],
      spineGradient: "from-red-950 via-[#ff2d55]/80 to-rose-950",
      ribbonColor: "bg-[#ff2d55]",
      goldAccent: "border-[#ff2d55]/50"
    },
    {
      id: "clash-codes",
      title: "Clash Of Codes 2.0 — Ace Track",
      issuer: "Mumbai University",
      date: "2025",
      year: "2025",
      credentialId: "COC-ACE-2025",
      category: "Hackathons",
      icon: Trophy,
      image: cert14,
      skills: ["Competitive Programming", "Algorithms", "Optimization"],
      spineGradient: "from-orange-950 via-amber-900 to-yellow-950",
      ribbonColor: "bg-amber-500",
      goldAccent: "border-amber-400/50"
    }
  ];

  const filterChips = ["All", "Frontend", "AI", "Cloud", "Cyber Security", "Research", "Hackathons"];

  const filteredBooks = libraryCollection.filter((b) => {
    if (activeFilter === "All") return true;
    return b.category === activeFilter;
  });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#050505] text-white py-12 sm:py-16 lg:py-20 overflow-hidden selection:bg-[#ff2d55]/30 selection:text-white"
    >
      {/* Background Dust Particles */}
      <ParticleBackground />

      {/* Mouse Follow Ambient Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 45, 85, 0.12), transparent 75%)`
        }}
      />

      {/* Crimson Ambient Radial Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-[#ff2d55]/15 via-[#800020]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow-red" />
      <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff4b6e]/15 via-[#4a0010]/10 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow-red" />

      {/* Grid Pattern & Noise Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-noise-pattern pointer-events-none z-0 opacity-40" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(255,45,85,0.15)]"
          >
            <Library className="w-4 h-4 text-[#ff2d55] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-white/80">
              Interactive Library
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-playfair"
          >
            Knowledge <span className="animate-gradient-text-red">Library</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-sans font-light"
          >
            Every certificate represents another chapter in my journey as a software engineer.
          </motion.p>
        </div>

        {/* ELEGANT CATEGORY CHIPS */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-14 max-w-3xl mx-auto"
        >
          {filterChips.map((chip) => {
            const isActive = activeFilter === chip;
            return (
              <button
                key={chip}
                onClick={() => setActiveFilter(chip)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 backdrop-blur-md border ${
                  isActive
                    ? "text-white border-[#ff2d55] bg-[#ff2d55]/20 shadow-[0_0_20px_rgba(255,45,85,0.3)]"
                    : "text-white/70 border-white/10 bg-white/[0.03] hover:text-white hover:border-white/30 hover:bg-white/[0.06]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeLibraryFilterGlow"
                    className="absolute inset-0 rounded-full bg-[#ff2d55]/10 border border-[#ff2d55]/50 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {chip === "All" && <Filter className="w-3 h-3 text-[#ff2d55]" />}
                  {chip}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* LUXURY FLOATING WALNUT BOOKSHELF CONTAINER */}
        <div className="relative max-w-5xl mx-auto pt-10 pb-8 px-4 sm:px-8">
          {/* Standing Books Row */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-6 min-h-[340px] sm:min-h-[380px] overflow-x-auto pb-4 pt-8 px-4 scrollbar-none">
            <AnimatePresence mode="popLayout">
              {filteredBooks.map((book) => (
                <BookSpine
                  key={book.id}
                  book={book}
                  onClick={() => setSelectedBook(book)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Dark Walnut Wood Shelf Platform */}
          <div className="relative w-full h-7 bg-gradient-to-r from-[#181214] via-[#2a1a1e] to-[#181214] border-t-2 border-b border-[#ff2d55]/40 rounded-sm shadow-[0_25px_50px_rgba(0,0,0,0.95)] z-20 flex items-center justify-between px-6">
            <div className="w-3 h-3 rounded-full bg-amber-400/40 border border-amber-300/30" />
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mx-4" />
            <div className="w-3 h-3 rounded-full bg-amber-400/40 border border-amber-300/30" />
          </div>

          {/* Red Volumetric Glow Underneath Walnut Shelf */}
          <div className="w-full h-8 bg-[#ff2d55]/15 blur-2xl rounded-full -mt-2 pointer-events-none" />
        </div>
      </div>

      {/* REALISTIC 3D OPENED HARDCOVER BOOK MODAL */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6"
            onClick={() => setSelectedBook(null)}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-[#ff2d55] text-white rounded-full transition-colors backdrop-blur-md border border-white/10 shadow-2xl"
              aria-label="Close book"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 3D Opened Hardcover Book Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateY: 20 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotateY: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-5xl w-full bg-[#0d0d12] border-2 border-amber-400/30 rounded-[28px] shadow-[0_30px_100px_rgba(0,0,0,0.98),0_0_50px_rgba(255,45,85,0.25)] backdrop-blur-3xl overflow-hidden p-6 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bookmark Ribbon Design Overlay */}
              <div className="absolute top-0 right-12 w-6 h-28 bg-[#ff2d55] shadow-xl z-30 clip-ribbon pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Page (Metadata & Information) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff2d55]/10 border border-[#ff2d55]/30 text-xs font-bold text-[#ff2d55]">
                      <BookMarked className="w-3.5 h-3.5" />
                      Chapter • {selectedBook.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-playfair leading-snug">
                      {selectedBook.title}
                    </h3>
                    <p className="text-sm font-semibold text-white/60">
                      Issued by <span className="text-white">{selectedBook.issuer}</span>
                    </p>
                  </div>

                  {/* Metadata Info Stack */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/50">Issue Date</span>
                      <span className="font-semibold text-white">{selectedBook.date}</span>
                    </div>

                    {selectedBook.credentialId && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/50">Credential ID</span>
                        <span className="font-mono text-xs font-semibold text-white/90 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10 truncate max-w-[180px]">
                          {selectedBook.credentialId}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Skills Badges */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-wider font-semibold text-white/50">
                      Skills & Competencies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedBook.skills.map((sk, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/90"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Page (High-Res Certificate Document Preview) */}
                <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-amber-400/20 bg-black/60 shadow-2xl p-2">
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="w-full max-h-[60vh] object-contain rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
