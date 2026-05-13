import { useState, useEffect } from "react";
import { Menu, X, Rocket, Fingerprint, Blocks, BrainCircuit, Zap, Trophy, ScrollText, Send, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

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
        { name: "Home", href: "#", icon: Rocket, color: "text-orange-500" },
        { name: "About Me", href: "#about", icon: Fingerprint, color: "text-emerald-400" },
        { name: "Projects", href: "#projects", icon: Blocks, color: "text-indigo-400" },
        { name: "AI Studio", href: "#ai-showcase", icon: BrainCircuit, color: "text-fuchsia-400" },
        { name: "Skills", href: "#skills", icon: Zap, color: "text-yellow-400" },
        { name: "Achievements", href: "#achievements", icon: Trophy, color: "text-amber-400" },
        { name: "Education", href: "#education", icon: ScrollText, color: "text-cyan-400" },
        { name: "Contact", href: "#contact", icon: Send, color: "text-rose-400" },
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
        const resumeUrl = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:940707e8-4d8b-46d8-86ec-ff00931fe6d2";
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
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("#")}
                        className="text-2xl md:text-3xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer"
                    >
                        ZohaAIverse
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href;
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`px-4 py-2 transition-all font-medium rounded-full flex items-center gap-2 group ${isActive
                                        ? "text-primary bg-primary/20 scale-105 shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                                        : "text-foreground hover:text-primary hover:bg-primary/10"
                                        }`}
                                >
                                    <item.icon className={`h-4 w-4 ${isActive ? "" : item.color} group-hover:scale-110 transition-transform`} />
                                    {item.name}
                                </button>
                            );
                        })}

                        {/* Resume Button */}
                        <Button
                            onClick={handleResumeDownload}
                            className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Resume
                        </Button>

                        {/* Theme Toggle */}
                        <div className="ml-2">
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
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
                    <nav className="md:hidden py-4 border-t border-border animate-fade-in">
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
