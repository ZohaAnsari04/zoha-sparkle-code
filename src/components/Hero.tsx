import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import avatarImage from "@/assets/avatar.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Ansari Zoha Najmul Kalam";

    useEffect(() => {
        // Delay typing animation to start after preloader (2 seconds)
        const startDelay = setTimeout(() => {
            let index = 0;
            const timer = setInterval(() => {
                if (index <= fullText.length) {
                    setDisplayedText(fullText.slice(0, index));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 90); // Speed of typing (90ms per character)

            return () => clearInterval(timer);
        }, 2000); // Wait 2 seconds for preloader to finish

        return () => clearTimeout(startDelay);
    }, []);

    const handleContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center animate-fade-in">
                    <div className="mb-8 inline-block relative">
                        <img
                            src={avatarImage}
                            alt="Zoha Avatar"
                            className="w-56 h-56 rounded-full border-4 border-primary shadow-[0_0_40px_rgba(236,72,153,0.3)] animate-float mx-auto"
                        />
                        <Heart className="absolute -top-6 -right-6 text-primary w-10 h-10 animate-sparkle" fill="currentColor" />
                        <Sparkles className="absolute -bottom-4 -left-4 text-accent w-8 h-8 animate-sparkle" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[5rem] whitespace-nowrap">
                        <span className="gradient-text">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </h1>

                    <p className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                        Frontend Developer Focused on Performance, UX & Clean Code
                    </p>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                        Creating digital magic with code and creativity ✨
                        Transforming ideas into beautiful, functional experiences
                        that make the web a more delightful place! 💖
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                        <Button
                            size="lg"
                            onClick={handleContact}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold shadow-[0_10px_40px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105"
                        >
                            <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                            Available for Collaborations
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            onClick={handleContact}
                            className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                        >
                            <Sparkles className="mr-2 h-5 w-5" />
                            Let's Connect
                        </Button>
                    </div>

                    <div className="flex justify-center gap-8 text-base text-muted-foreground mb-16">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">📍</span>
                            <span>Byculla-Mumbai</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">💫</span>
                            <span>Open to Remote Work</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
                </div>
                <span className="text-sm font-semibold text-primary">Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
