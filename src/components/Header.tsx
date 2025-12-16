import { useState, useEffect } from "react";
import { Menu, X, Home, User, FolderKanban, Lightbulb, Award, GraduationCap, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#", icon: Home },
        { name: "About Me", href: "#about", icon: User },
        { name: "Projects", href: "#projects", icon: FolderKanban },
        { name: "Skills", href: "#skills", icon: Lightbulb },
        { name: "Achievements", href: "#achievements", icon: Award },
        { name: "Education", href: "#education", icon: GraduationCap },
        { name: "Contact", href: "#contact", icon: Mail },
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
        const resumeUrl = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:6c2781b0-99ca-429f-b709-585ce072a69f";
        window.open(resumeUrl, "_blank");
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
                : "bg-transparent"
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
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium rounded-full hover:bg-primary/10 flex items-center gap-2"
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </button>
                        ))}

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
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="px-4 py-3 text-left text-foreground hover:text-primary hover:bg-primary/10 transition-colors font-medium rounded-xl flex items-center gap-3"
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.name}
                                </button>
                            ))}

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
