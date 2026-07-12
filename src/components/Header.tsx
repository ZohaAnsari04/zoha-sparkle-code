import { useState, useEffect } from "react";
import { Menu, X, Download, Home, User, Briefcase, FolderGit2, Brain, Blocks, Award, Mail } from "lucide-react";
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
        { name: "Home", href: "#", icon: Home, color: "text-orange-500" },
        { name: "About Me", href: "#about", icon: User, color: "text-emerald-400" },
        { name: "Journey", href: "#journey", icon: Briefcase, color: "text-cyan-400" },
        { name: "Projects", href: "#projects", icon: FolderGit2, color: "text-indigo-400" },
        { name: "AI Studio", href: "#ai-showcase", icon: Brain, color: "text-fuchsia-400" },
        { name: "Skills", href: "#skills", icon: Blocks, color: "text-yellow-400" },
        { name: "Achievements", href: "#achievements", icon: Award, color: "text-amber-400" },
        { name: "Contact", href: "#contact", icon: Mail, color: "text-rose-400" },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/30"
                    : "bg-background/80 backdrop-blur-sm border-b border-transparent"
                }`}
        >
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative">
                <div className={`flex items-center justify-between transition-all duration-300 ${
                    isScrolled ? "h-16" : "h-16 lg:h-20"
                }`}>
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("#")}
                        className="text-xl lg:text-2xl xl:text-3xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer whitespace-nowrap z-10"
                    >
                        BuiltByZoha
                    </button>

                    {/* Desktop Navigation Links */}
                    <nav className={`hidden lg:flex items-center gap-0.5 xl:gap-1.5 transition-all duration-500 ease-in-out z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
                        isScrolled
                            ? "bg-background/80 dark:bg-background/90 backdrop-blur-md px-5 py-1.5 rounded-full border border-primary/30 dark:border-primary/20 shadow-[0_12px_40px_rgba(236,72,153,0.12)] scale-95"
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
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2 z-10">
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
