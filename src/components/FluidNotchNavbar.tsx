import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Layers,
  Wand2,
  Library,
  Send,
  Download,
  FileText
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: any;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#", icon: Home },
  { id: "journey", label: "Journey", href: "#journey", icon: Briefcase },
  { id: "projects", label: "Projects", href: "#projects", icon: Layers },
  { id: "ai-showcase", label: "AI Studio", href: "#ai-showcase", icon: Wand2 },
  { id: "achievements", label: "Library", href: "#achievements", icon: Library },
  { id: "contact", label: "Contact", href: "#contact", icon: Send }
];

const RESUME_URL = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:799e46e2-07de-4152-aee3-ceb88160f19e";

const FluidNotchNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Active section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["journey", "projects", "ai-showcase", "achievements", "contact"];
      const scrollPosition = window.scrollY + 250;

      let currentSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    setActiveTab(id);
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-[90] pointer-events-none px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* BRAND LOGO (Left) */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#", "home")}
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#09090c]/80 backdrop-blur-2xl border border-[#3b82f6]/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] text-white font-playfair group hover:border-[#3b82f6]/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
        >
          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] flex items-center justify-center text-white text-xs font-black shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform">
            Z
          </span>
          <span className="text-sm font-bold hidden sm:inline-block">
            BuiltBy<span className="text-[#3b82f6]">Zoha</span>
          </span>
        </a>

        {/* FLOATING FLUID NOTCH TAB NAVBAR (Center Top) */}
        <nav className="pointer-events-auto relative bg-[#09090c]/90 backdrop-blur-2xl border border-[#3b82f6]/30 rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-[0_0_25px_rgba(59,130,246,0.25),0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_0_35px_rgba(59,130,246,0.4),0_20px_50px_rgba(0,0,0,0.9)] hover:border-[#3b82f6]/60 transition-all duration-500 flex items-center gap-1 sm:gap-2">
          {/* Glowing Edge Gradient Ring */}
          <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#3b82f6]/40 via-transparent to-[#3b82f6]/40 opacity-70 pointer-events-none blur-[1px]" />
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className="relative px-2.5 sm:px-4 py-1.5 flex flex-col items-center justify-center min-w-[56px] sm:min-w-[70px] transition-colors group select-none"
              >
                {/* Elevated Active Circular Notch Badge */}
                {isActive && (
                  <motion.div
                    layoutId="fluidNotchActiveCircle"
                    className="absolute -top-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#3b82f6] via-[#2563eb] to-[#1d4ed8] text-white flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)] border-4 border-[#050505] z-30"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                )}

                {/* Dim Icon for Non-Active Tabs */}
                {!isActive && (
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors mb-0.5" />
                )}

                {/* Label Text Underneath */}
                <span
                  className={`text-[10px] sm:text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-white font-bold mt-3.5 sm:mt-4"
                      : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Indicator Underline Glow */}
                {isActive && (
                  <motion.div
                    layoutId="fluidNotchGlowDot"
                    className="absolute bottom-0.5 w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RESUME BUTTON (Right) */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#09090c]/80 backdrop-blur-2xl border border-[#3b82f6]/30 text-xs font-semibold text-white/90 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:text-white hover:border-[#3b82f6]/60 hover:bg-[#3b82f6]/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
        >
          <FileText className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span className="hidden sm:inline-block">Resume</span>
          <Download className="w-3 h-3 text-white/60" />
        </a>
      </div>
    </header>
  );
};

export default FluidNotchNavbar;
