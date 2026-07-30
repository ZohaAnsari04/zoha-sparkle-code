import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Send,
  Check,
  Clock,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Briefcase
} from "lucide-react";
import { toast } from "sonner";
import avatarImage from "@/assets/avatar.png";

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

    // Particle setup
    const particleCount = 45;
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
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
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
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255, 45, 85, 0.8)";
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
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-60"
    />
  );
};

// 3D Card Tilt Hook / Component
const TiltCard = ({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

// Floating Glass Input Component
interface FloatingInputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  required?: boolean;
  disabled?: boolean;
}

const FloatingInput = ({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  isTextarea = false,
  required = true,
  disabled = false
}: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isOccupied = value.length > 0;

  return (
    <div className="relative group z-10 my-2">
      {/* Glow highlight on focus */}
      <div
        className={`absolute -inset-0.5 rounded-${
          isTextarea ? "3xl" : "full"
        } bg-gradient-to-r from-[#ff2d55] via-[#ff6b81] to-[#c2185b] opacity-0 transition duration-500 group-hover:opacity-20 ${
          isFocused ? "!opacity-70 blur-md" : ""
        }`}
      />

      <div className="relative">
        {/* Floating Label */}
        <label
          htmlFor={id}
          className={`absolute left-5 transition-all duration-300 pointer-events-none flex items-center gap-1.5 text-sm ${
            isFocused || isOccupied
              ? "-top-3 text-xs font-semibold text-[#ff2d55] bg-[#09090b] px-3 rounded-full border border-[#ff2d55]/30 z-20 shadow-[0_2px_10px_rgba(255,45,85,0.2)]"
              : "top-4 text-muted-foreground/70"
          }`}
        >
          {isFocused && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d55] shadow-[0_0_8px_#ff2d55] animate-pulse" />
          )}
          {label}
        </label>

        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            disabled={disabled}
            rows={5}
            className={`w-full px-6 py-4 bg-white/[0.03] backdrop-blur-xl border ${
              isFocused
                ? "border-[#ff2d55] bg-white/[0.06] shadow-[0_0_25px_rgba(255,45,85,0.25)]"
                : "border-white/10 group-hover:border-white/20"
            } rounded-3xl text-white placeholder-transparent focus:outline-none transition-all duration-300 resize-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.7)] text-base`}
            placeholder={label}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            disabled={disabled}
            className={`w-full px-6 py-4 bg-white/[0.03] backdrop-blur-xl border ${
              isFocused
                ? "border-[#ff2d55] bg-white/[0.06] shadow-[0_0_25px_rgba(255,45,85,0.25)]"
                : "border-white/10 group-hover:border-white/20"
            } rounded-full text-white placeholder-transparent focus:outline-none transition-all duration-300 shadow-[inset_0_2px_6px_rgba(0,0,0,0.7)] text-base`}
            placeholder={label}
          />
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Ambient mouse position tracking
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdankpvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully! 🚀", {
          description: "I'll get back to you within 24 hours."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        toast.error("Failed to send message", {
          description: "Please try again or email directly."
        });
      }
    } catch (error) {
      toast.error("Network error", {
        description: "Please check your internet connection."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ZohaAnsari04",
      label: "GitHub",
      color: "hover:text-white hover:border-white/40"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/er-ansari-zoha-najmul-kalam-819610238/",
      label: "LinkedIn",
      color: "hover:text-[#0077b5] hover:border-[#0077b5]/50"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/quietlyzoha?igsh=NnRnanM3eGtiOGQy",
      label: "Instagram",
      color: "hover:text-[#e4405f] hover:border-[#e4405f]/50"
    },
    {
      icon: Twitter,
      href: "https://x.com",
      label: "X",
      color: "hover:text-white hover:border-white/40"
    },
    {
      icon: Mail,
      href: "mailto:zoha101204@gmail.com",
      label: "Email Direct",
      color: "hover:text-[#ff2d55] hover:border-[#ff2d55]/50"
    }
  ];

  const availabilityBadges = [
    { name: "Freelance", active: true },
    { name: "Internships", active: true },
    { name: "Full-time", active: true },
    { name: "Open Source", active: true }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-[#050505] text-white py-24 sm:py-32 lg:py-36 overflow-hidden selection:bg-[#ff2d55]/30 selection:text-white"
    >
      {/* Background Ambient Lighting & Effects */}
      <ParticleBackground />

      {/* Mouse Follow Ambient Radial Light */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-60"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 45, 85, 0.12), transparent 75%)`
        }}
      />

      {/* Ambient Crimson & Wine Radial Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-[#ff2d55]/20 via-[#800020]/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow-red" />
      <div className="absolute bottom-10 -right-48 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff4b6e]/20 via-[#4a0010]/20 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse-glow-red" />

      {/* Subtle Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,45,85,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,45,85,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Noise Texture Overlay */}
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 font-playfair"
          >
            Let's Build Something{" "}
            <span className="animate-gradient-text-red">Extraordinary</span>{" "}
            Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-sans font-light"
          >
            I enjoy building products that solve real problems, create meaningful
            experiences, and leave a lasting impact. Whether it's an idea,
            startup, or collaboration—let's create something amazing.
          </motion.p>
        </div>

        {/* 12-COLUMN RESPONSIVE ASYMMETRICAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT SIDE (7 COLUMNS): FLOATING GLASS CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <TiltCard className="h-full">
              <div className="relative bg-[#09090c]/70 backdrop-blur-2xl border border-white/10 rounded-[30px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,45,85,0.1)] overflow-hidden group hover:border-[#ff2d55]/40 transition-all duration-500">
                {/* Floating Top Reflection Edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2d55]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff2d55]/20 transition-all duration-700" />

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3 font-playfair">
                      Send a Message
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff2d55] animate-ping" />
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      Fill out the form below to start a conversation.
                    </p>
                  </div>
                  <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 items-center justify-center text-[#ff2d55]">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FloatingInput
                      id="name"
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    <FloatingInput
                      id="email"
                      name="email"
                      type="email"
                      label="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  </div>

                  <FloatingInput
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />

                  <FloatingInput
                    id="message"
                    name="message"
                    label="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    isTextarea={true}
                    disabled={isSubmitting}
                  />

                  {/* MASSIVE SUBMIT BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-5 px-8 text-lg font-semibold rounded-full text-white transition-all duration-500 relative overflow-hidden group shadow-[0_10px_35px_rgba(255,45,85,0.35)] hover:shadow-[0_15px_50px_rgba(255,45,85,0.6)] ${
                      isSubmitted
                        ? "bg-emerald-600 shadow-[0_10px_35px_rgba(16,185,129,0.4)]"
                        : "bg-gradient-to-r from-[#ff2d55] via-[#ff4b6e] to-[#c2185b] bg-[length:200%_auto] hover:bg-[position:right_center]"
                    } disabled:opacity-75 disabled:cursor-not-allowed`}
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <Check className="w-6 h-6 stroke-[3]" />
                          <span>Message Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>

                    {/* Button Shimmer Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.button>
                </form>
              </div>
            </TiltCard>
          </motion.div>

          {/* RIGHT SIDE (5 COLUMNS): STACKED INTERACTIVE INFORMATION CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* CARD 1: PROFILE CARD */}
            <TiltCard>
              <div className="bg-[#09090c]/70 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 sm:p-7 shadow-xl hover:border-[#ff2d55]/40 transition-all duration-300 relative overflow-hidden group">
                <div className="flex items-center gap-5">
                  {/* Circular Profile Avatar with Glowing Ring */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff2d55] via-[#ff6b81] to-[#c2185b] animate-spin-slow blur-sm opacity-80 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={avatarImage}
                      alt="Zoha Ansari"
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#09090c] shadow-lg"
                    />
                    <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#09090c] flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="absolute w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-white tracking-tight truncate font-playfair">
                        Zoha Ansari
                      </h4>
                    </div>
                    <p className="text-sm font-medium text-[#ff2d55]">
                      Frontend Engineer
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Freelance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reply badge */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/60">
                  <Clock className="w-3.5 h-3.5 text-[#ff2d55]" />
                  <span>Usually replies within 24 hours</span>
                </div>
              </div>
            </TiltCard>

            {/* CARD 3: SOCIAL LINKS */}
            <TiltCard>
              <div className="bg-[#09090c]/70 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 sm:p-7 shadow-xl hover:border-[#ff2d55]/40 transition-all duration-300 relative overflow-hidden group">
                <h4 className="text-sm uppercase tracking-wider font-semibold text-white/50 mb-5 flex items-center justify-between">
                  <span>Connect Across Platforms</span>
                  <Globe className="w-4 h-4 text-[#ff2d55]" />
                </h4>

                <div className="flex items-center justify-between gap-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15, rotate: 6 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/80 transition-all duration-300 shadow-md ${social.color} hover:shadow-[0_0_25px_rgba(255,45,85,0.3)] hover:bg-white/[0.08]`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </TiltCard>

            {/* CARD 4: AVAILABILITY STATUS CARD */}
            <TiltCard>
              <div className="bg-[#09090c]/70 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 sm:p-7 shadow-xl hover:border-[#ff2d55]/40 transition-all duration-300 relative overflow-hidden group">
                <h4 className="text-sm uppercase tracking-wider font-semibold text-white/50 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#ff2d55]" />
                  <span>Current Availability</span>
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {availabilityBadges.map((badge, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-white/90 hover:border-[#ff2d55]/50 hover:bg-[#ff2d55]/10 transition-all duration-300 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ff2d55] shadow-[0_0_8px_#ff2d55] animate-pulse" />
                      {badge.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;