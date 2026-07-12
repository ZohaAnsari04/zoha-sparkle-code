import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

// Custom premium, realistic, colorful gradient SVG icons for the timeline & navigation
const HomeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="homeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8a00" />
                <stop offset="100%" stopColor="#e52e71" />
            </linearGradient>
        </defs>
        <path d="M12 2.09l-9 6.92v11.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-11.5l-9-6.92z" fill="url(#homeGrad)" />
        <path d="M9 20v-6a1 1 0 011-1h4a1 1 0 011 1v6H9z" fill="#FFF" fillOpacity="0.4" />
        <path d="M12 6.5L6 11v7h12v-7l-6-4.5z" fill="#FFF" fillOpacity="0.15" />
    </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="100%" stopColor="#4facfe" />
            </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#aboutGrad)" opacity="0.2" />
        <circle cx="12" cy="8" r="4.5" fill="url(#aboutGrad)" />
        <path d="M12 14c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z" fill="url(#aboutGrad)" />
        <circle cx="12" cy="8" r="2.5" fill="#FFF" fillOpacity="0.3" />
    </svg>
);

const JourneyIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3afcbe" />
                <stop offset="100%" stopColor="#08b3e5" />
            </linearGradient>
        </defs>
        <path d="M18.8 3H5.2C4 3 3 4 3 5.2v13.6C3 20 4 21 5.2 21h13.6c1.2 0 2.2-1 2.2-2.2V5.2C21 4 20 3 18.8 3z" fill="url(#journeyGrad)" opacity="0.15" />
        <rect x="11" y="4" width="2" height="16" rx="1" fill="url(#journeyGrad)" />
        <path d="M12 6h7a1 1 0 011 1v3a1 1 0 01-1 1h-7V6z" fill="url(#journeyGrad)" />
        <path d="M5 11h7v5H5a1 1 0 01-1-1v-3a1 1 0 015-1z" fill="url(#journeyGrad)" opacity="0.8" />
        <rect x="14" y="7.5" width="4" height="2" rx="0.5" fill="#FFF" fillOpacity="0.6" />
        <rect x="6" y="12.5" width="4" height="2" rx="0.5" fill="#FFF" fillOpacity="0.6" />
    </svg>
);

const ProjectsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="projGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b92b27" />
                <stop offset="100%" stopColor="#1565c0" />
            </linearGradient>
        </defs>
        <rect x="2" y="6" width="14" height="12" rx="2" fill="url(#projGrad)" opacity="0.5" />
        <rect x="8" y="10" width="14" height="12" rx="2" fill="url(#projGrad)" />
        <circle cx="12" cy="13" r="1" fill="#FFF" fillOpacity="0.8" />
        <circle cx="15" cy="13" r="1" fill="#FFF" fillOpacity="0.8" />
        <circle cx="18" cy="13" r="1" fill="#FFF" fillOpacity="0.8" />
        <rect x="11" y="16" width="8" height="3" rx="0.5" fill="#FFF" fillOpacity="0.3" />
    </svg>
);

const AIShowcaseIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e0c3fc" />
                <stop offset="100%" stopColor="#8ec5fc" />
            </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="10" fill="url(#aiGrad)" opacity="0.15" />
        <path d="M12 4a8 8 0 00-6.5 12.5L12 21l6.5-4.5A8 8 0 0012 4zm0 2c2.5 0 4.5 2 4.5 4.5 0 2-1 3.5-2.5 4v2.5h-4V15c-1.5-.5-2.5-2-2.5-4 0-2.5 2-4.5 4.5-4.5z" fill="url(#aiGrad)" />
        <circle cx="12" cy="10.5" r="2" fill="#FFF" />
        <line x1="12" y1="6" x2="12" y2="8.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="12.5" x2="12" y2="15" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7.5" y1="10.5" x2="10" y2="10.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="10.5" x2="16.5" y2="10.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const SkillsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="skillsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffe259" />
                <stop offset="100%" stopColor="#ffa751" />
            </linearGradient>
        </defs>
        <path d="M12 2L2 14h9v8l10-12h-9l1-8z" fill="url(#skillsGrad)" />
        <path d="M12 2L4.5 11h6.5v8.5l8.5-9.5h-8.5l1-8z" fill="#FFF" fillOpacity="0.35" />
    </svg>
);

const AchievementsIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="achGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f857a6" />
                <stop offset="100%" stopColor="#ff5858" />
            </linearGradient>
        </defs>
        <path d="M6 3h12v9c0 3.3-2.7 6-6 6s-6-2.7-6-6V3z" fill="url(#achGrad)" />
        <path d="M12 18v3m-4 0h8" stroke="url(#achGrad)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 5H3v5c0 2 1.5 3.5 3 3.8M18 5h3v5c0 2-1.5 3.5-3 3.8" stroke="url(#achGrad)" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6.5l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4L12 6.5z" fill="#FFF" />
    </svg>
);

const ContactIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
        <defs>
            <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#11998e" />
                <stop offset="100%" stopColor="#38ef7d" />
            </linearGradient>
        </defs>
        <rect x="2" y="4" width="20" height="16" rx="3" fill="url(#contactGrad)" />
        <path d="M2 6.5l10 6.5 10-6.5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 17.5l6.5-5.5m7 0l6.5 5.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track active section with Intersection Observer
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the middle of viewport
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute("id");
                    setActiveSection(sectionId ? `#${sectionId}` : "#");
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => observer.observe(section));

        // Check if at top of page
        const handleScrollTop = () => {
            if (window.scrollY < 100) {
                setActiveSection("#");
            }
        };

        window.addEventListener("scroll", handleScrollTop);

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            window.removeEventListener("scroll", handleScrollTop);
        };
    }, []);

    const navItems = [
        { name: "Home", href: "#", icon: HomeIcon, color: "text-orange-500" },
        { name: "About Me", href: "#about", icon: AboutIcon, color: "text-emerald-400" },
        { name: "Journey", href: "#journey", icon: JourneyIcon, color: "text-cyan-400" },
        { name: "Projects", href: "#projects", icon: ProjectsIcon, color: "text-indigo-400" },
        { name: "AI Studio", href: "#ai-showcase", icon: AIShowcaseIcon, color: "text-fuchsia-400" },
        { name: "Skills", href: "#skills", icon: SkillsIcon, color: "text-yellow-400" },
        { name: "Achievements", href: "#achievements", icon: AchievementsIcon, color: "text-amber-400" },
        { name: "Contact", href: "#contact", icon: ContactIcon, color: "text-rose-400" },
    ];

    const scrollToSection = (href: string) => {
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const handleResumeDownload = () => {
        const resumeUrl = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:f2729e96-d920-4596-8b46-5faa7733867f";
        window.open(resumeUrl, "_blank");
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
                : "bg-background/80 backdrop-blur-sm"
                }`}
        >
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("#")}
                        className="text-xl lg:text-2xl xl:text-3xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer whitespace-nowrap z-10"
                    >
                        ZohaAIverse
                    </button>

                    {/* Desktop Navigation Container on the right */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {/* Desktop Navigation Links */}
                        <nav className={`flex items-center gap-0.5 xl:gap-1.5 transition-all duration-500 ease-in-out z-10 ${
                            isScrolled
                                ? "absolute left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-border shadow-[0_4px_20px_rgba(0,0,0,0.1)] scale-95"
                                : ""
                        }`}>
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href;
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`px-2.5 py-1.5 xl:px-4 xl:py-2 text-xs xl:text-sm whitespace-nowrap transition-all font-medium rounded-full flex items-center gap-1.5 group ${isActive
                                            ? "text-primary bg-primary/20 scale-105 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                                            : "text-foreground hover:text-primary hover:bg-primary/10"
                                            }`}
                                    >
                                        <item.icon className={`h-3.5 w-3.5 xl:h-4 xl:w-4 ${isActive ? "" : item.color} group-hover:scale-110 transition-transform`} />
                                        <span>{item.name}</span>
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Resume & Theme */}
                        <div className="flex items-center gap-1 xl:gap-2 z-10 ml-2 xl:ml-4">
                            {/* Resume Button */}
                            <Button
                                onClick={handleResumeDownload}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 py-1.5 xl:px-6 xl:py-2 text-xs xl:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-1.5 whitespace-nowrap"
                            >
                                <Download className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                                <span>Resume</span>
                            </Button>

                            {/* Theme Toggle */}
                            <div className="ml-1 xl:ml-2">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href;
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`px-4 py-3 text-left transition-all font-medium rounded-xl flex items-center gap-3 group ${isActive
                                            ? "text-primary bg-primary/20 shadow-[0_0_10px_rgba(236,72,153,0.2)]"
                                            : "text-foreground hover:text-primary hover:bg-primary/10"
                                            }`}
                                    >
                                        <item.icon className={`h-5 w-5 ${isActive ? "" : item.color} group-hover:scale-110 transition-transform`} />
                                        {item.name}
                                    </button>
                                );
                            })}

                            {/* Mobile Resume Button */}
                            <button
                                onClick={handleResumeDownload}
                                className="mx-4 mt-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-4 py-3 font-semibold shadow-lg transition-all duration-300 flex items-center gap-3"
                            >
                                <Download className="h-5 w-5" />
                                Download Resume
                            </button>

                            {/* Mobile Theme Toggle */}
                            <div className="mx-4 mt-2 flex items-center justify-between px-4 py-3 bg-muted/50 rounded-xl">
                                <span className="font-medium text-foreground">Theme</span>
                                <ThemeToggle />
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
