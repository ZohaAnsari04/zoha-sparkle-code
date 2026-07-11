import { Button } from "@/components/ui/button";
import { Heart, Sparkles, MapPin, Globe, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import avatarImage from "@/assets/avatar.jpg";
import { useState, useEffect } from "react";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [showBlurText, setShowBlurText] = useState(false);
    const fullText = "Ansari Zoha Najmul Kalam";

    useEffect(() => {
        // Delay typing animation to start after preloader (3 seconds)
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
        }, 3000); // Wait 3 seconds for preloader to finish

        // Show BlurText after preloader finishes
        const blurTextDelay = setTimeout(() => {
            setShowBlurText(true);
        }, 3000); // Same delay as preloader

        return () => {
            clearTimeout(startDelay);
            clearTimeout(blurTextDelay);
        };
    }, []);

    const handleContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-24"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90 dark:from-transparent dark:via-black/50 dark:to-black/80" />

            <div className="container mx-auto px-4 relative z-10">
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

                    <h1 className="text-[6.2vw] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 min-h-[3rem] md:min-h-[5rem] whitespace-nowrap">
                        <span className="gradient-text">
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </h1>

                    {showBlurText && (
                        <BlurText
                            text="Frontend Developer Focused on Performance, UX & Clean Code"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-[3.4vw] sm:text-[2.8vw] md:text-2xl lg:text-3xl font-semibold mb-6 text-foreground whitespace-nowrap"
                        />
                    )}

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                        <GradientText
                            colors={["#ec4899", "#8b5cf6", "#ec4899", "#8b5cf6", "#ec4899"]}
                            animationSpeed={5}
                            showBorder={false}
                            className="text-lg md:text-xl font-medium"
                        >
                            Frontend Engineer crafting fast, scalable, and pixel-perfect web experiences with React, Next.js, and TypeScript. Passionate about building products that users enjoy and businesses rely on!💖
                        </GradientText>
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                        <Button
                            size="lg"
                            onClick={handleContact}
                            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-full px-8 py-6 text-base font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                        >
                            <Sparkles className="h-5 w-5 animate-pulse" />
                            <span>Let's Connect</span>
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Button>

                        <button
                            onClick={handleContact}
                            className="relative flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 backdrop-blur-md px-8 py-[18px] text-base font-semibold text-foreground/90 transition-all duration-300 hover:border-violet-500/40 hover:scale-105 shadow-[0_4px_30px_rgba(0,0,0,0.1)] group"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span>Open to Frontend Roles & Internships</span>
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium mb-16">
                        <div className="flex items-center gap-2 border border-violet-500/10 bg-violet-500/5 backdrop-blur-md rounded-full px-5 py-2.5 text-foreground/80 shadow-sm transition-all duration-300 hover:border-violet-500/25 hover:text-foreground">
                            <MapPin className="text-violet-400 w-4 h-4 animate-jump-pulse" />
                            <span>Mumbai, India</span>
                        </div>
                        <div className="flex items-center gap-2 border border-sky-500/10 bg-sky-500/5 backdrop-blur-md rounded-full px-5 py-2.5 text-foreground/80 shadow-sm transition-all duration-300 hover:border-sky-500/25 hover:text-foreground">
                            <Globe className="text-sky-400 w-4 h-4 animate-spin-slow" />
                            <span>Open to Remote Work</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
                onClick={() => {
                    const aboutSection = document.getElementById('about');
                    aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <div className="w-[22px] h-[36px] border-2 border-primary/40 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll-dot" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-primary/80 font-bold">Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
