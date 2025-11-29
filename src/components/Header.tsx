if (element) {
    element.scrollIntoView({ behavior: "smooth" });
}
        }
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
                    </div>
                </nav>
            )}
        </div>
    </header>
);
};

export default Header;
