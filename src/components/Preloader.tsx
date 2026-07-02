import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);

    const statuses = [
        "Initializing neural core...",
        "Loading frontend components...",
        "Syncing blockchain protocols...",
        "Configuring generative AI...",
        "System ready! ✨"
    ];

    useEffect(() => {
        // Increment progress: 20 steps of 5% each. 130ms per step = 2600ms
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 100); // 100ms delay after 100% (total 2700ms)
                    return 100;
                }
                return prev + 5;
            });
        }, 130);

        return () => clearInterval(interval);
    }, []);

    // Update status message based on progress
    useEffect(() => {
        if (progress < 25) setStatusIndex(0);
        else if (progress < 50) setStatusIndex(1);
        else if (progress < 75) setStatusIndex(2);
        else if (progress < 100) setStatusIndex(3);
        else setStatusIndex(4);
    }, [progress]);

    const brandName = "ZohaAIverse";
    const letters = Array.from(brandName);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -30,
                        transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background select-none overflow-hidden"
                >
                    {/* Subtle background glow blobs */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-[80px]" />
                    </div>

                    <div className="text-center relative z-10 flex flex-col items-center max-w-sm px-6">
                        {/* Interactive SVG Loader Icon */}
                        <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                            {/* Outer pulsing thin ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-primary/20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Middle dashed rotating circle */}
                            <motion.svg
                                className="absolute w-28 h-28 text-accent/40"
                                viewBox="0 0 100 100"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="44"
                                    fill="transparent"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeDasharray="6 6"
                                />
                            </motion.svg>

                            {/* Inner glowing progress ring */}
                            <motion.svg
                                className="absolute w-20 h-20 text-primary"
                                viewBox="0 0 100 100"
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="38"
                                    fill="transparent"
                                    stroke="url(#loader-gradient)"
                                    strokeWidth="3.5"
                                    strokeDasharray="240"
                                    strokeDashoffset={240 - (240 * progress) / 100}
                                    strokeLinecap="round"
                                    className="transition-all duration-300 ease-out"
                                />
                                <defs>
                                    <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>

                            {/* Centered pulsing Neural logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        scale: [0.95, 1.05, 0.95],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <BrainCircuit className="w-10 h-10 text-primary drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Logo Text Reveal */}
                        <h2 className="text-3xl font-extrabold tracking-wider mb-2 font-mono flex items-center justify-center gap-[1px]">
                            {letters.map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{
                                        delay: index * 0.05,
                                        duration: 0.35,
                                        ease: "easeOut",
                                    }}
                                    className="inline-block gradient-text"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h2>

                        {/* Dynamic Status Text with Key-based Fade */}
                        <div className="h-6 mb-4 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={statuses[statusIndex]}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-xs tracking-widest uppercase font-mono text-muted-foreground/80"
                                >
                                    {statuses[statusIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Premium Sleek Minimalist Progress Bar */}
                        <div className="w-56 mx-auto relative">
                            <div className="h-[2px] w-full bg-muted/40 rounded-full relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_rgba(236,72,153,0.8)]"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex justify-between items-center mt-2 font-mono text-[9px] tracking-widest text-muted-foreground/60">
                                <span>SYSTEM_OK</span>
                                <span>{progress}%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
