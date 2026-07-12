import { Button } from "@/components/ui/button";
import { Heart, Sparkles, MapPin, Globe, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import avatarImage from "@/assets/avatar.png";
import { useState, useEffect } from "react";
import SplitText from "@/components/SplitText";
import Lightfall from "@/components/Lightfall";

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
            {/* WebGL Lightfall Backdrop */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Lightfall
                    colors={["#ef4444", "#991b1b", "#ff3333"]}
                    backgroundColor="#070708"
                    speed={0.5}
                    streakCount={2}
                    streakWidth={1}
                    streakLength={0.7}
                    glow={0.7}
                    density={0.6}
                    twinkle={1}
                    zoom={3}
                    backgroundGlow={0.5}
                    opacity={1}
                    mouseInteraction={false}
                    mouseStrength={0.5}
                    mouseRadius={1}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/95 dark:from-transparent dark:via-black/30 dark:to-black/90 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Column: Picture and grid background */}
                    <div className="lg:col-span-5 flex justify-center relative animate-fade-in order-1 py-10 w-full overflow-visible">
                        {/* Rounded squares grid background behind picture */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] grid grid-cols-6 gap-3.5 opacity-35 pointer-events-none z-0">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <div key={i} className="border border-white/10 dark:border-white/10 rounded-xl aspect-square bg-gradient-to-br from-white/[0.02] to-transparent shadow-[inset_0_0_12px_rgba(255,255,255,0.01)]" />
                            ))}
                        </div>

                        {/* Image wrapper */}
                        <div className="relative z-10 w-64 h-[380px] sm:w-72 sm:h-[420px] md:w-80 md:h-[460px] lg:w-[340px] lg:h-[480px] rounded-3xl overflow-hidden group">
                            <img
                                src={avatarImage}
                                alt="Zoha Avatar"
                                className="w-full h-full object-cover [mask-image:radial-gradient(ellipse_90%_90%_at_50%_35%,#000_50%,transparent_100%)] transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text content */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start order-2 w-full">
                        {showBlurText ? (
                            <>
                                <SplitText
                                    text="Ansari Zoha Najmul Kalam"
                                    className="gradient-text text-[6.2vw] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left inline-block"
                                    delay={40}
                                    duration={0.8}
                                    ease="power3.out"
                                    splitType="chars"
                                    tag="h1"
                                />

                                <SplitText
                                    text="Frontend Developer Focused on Performance, UX & Clean Code"
                                    className="text-[3.4vw] sm:text-[2.8vw] md:text-2xl lg:text-3xl font-semibold text-foreground whitespace-normal text-center lg:text-left inline-block"
                                    delay={30}
                                    duration={0.7}
                                    ease="power2.out"
                                    splitType="words"
                                    tag="h2"
                                />

                                <SplitText
                                    text="Frontend Engineer crafting fast, scalable, and pixel-perfect web experiences with React, Next.js, and TypeScript. Passionate about building products that users enjoy and businesses rely on!💖"
                                    className="text-lg md:text-xl text-muted-foreground font-medium text-center lg:text-left leading-relaxed inline-block"
                                    delay={15}
                                    duration={0.8}
                                    ease="power3.out"
                                    splitType="words"
                                    tag="p"
                                />
                            </>
                        ) : (
                            <div className="opacity-0 space-y-6 flex flex-col items-center lg:items-start">
                                <h1 className="text-[6.2vw] sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">Ansari Zoha Najmul Kalam</h1>
                                <h2 className="text-[3.4vw] sm:text-[2.8vw] md:text-2xl lg:text-3xl font-semibold text-foreground">Frontend Developer Focused on Performance, UX & Clean Code</h2>
                                <p className="text-lg md:text-xl text-muted-foreground font-medium">Frontend Engineer crafting fast, scalable, and pixel-perfect web experiences with React, Next.js, and TypeScript. Passionate about building products that users enjoy and businesses rely on!💖</p>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                            <Button
                                size="lg"
                                onClick={handleContact}
                                className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white rounded-full px-8 py-6 text-base font-semibold shadow-[0_4px_20px_rgba(185,28,28,0.25)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                            >
                                <Sparkles className="h-5 w-5 animate-pulse" />
                                <span>Let's Connect</span>
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </Button>

                            <button
                                onClick={handleContact}
                                className="relative flex items-center gap-3 rounded-full border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 backdrop-blur-md px-8 py-[18px] text-base font-semibold text-foreground/90 transition-all duration-300 hover:border-red-500/40 hover:scale-105 shadow-[0_4px_30px_rgba(0,0,0,0.1)] group"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span>Open to Frontend Roles</span>
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                            <div className="flex items-center gap-2 border border-red-500/10 bg-red-500/5 backdrop-blur-md rounded-full px-5 py-2.5 text-foreground/80 shadow-sm transition-all duration-300 hover:border-red-500/25 hover:text-foreground">
                                <MapPin className="text-red-400 w-4 h-4 animate-jump-pulse" />
                                <span>Mumbai, India</span>
                            </div>
                            <div className="flex items-center gap-2 border border-red-500/10 bg-red-500/5 backdrop-blur-md rounded-full px-5 py-2.5 text-foreground/80 shadow-sm transition-all duration-300 hover:border-red-500/25 hover:text-foreground">
                                <Globe className="text-red-400 w-4 h-4 animate-spin-slow" />
                                <span>Open to Remote Work</span>
                            </div>
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
