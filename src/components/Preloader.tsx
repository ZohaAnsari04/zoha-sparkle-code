import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 10;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
            <div className="text-center animate-fade-in">
                {/* Logo/Icon */}
                <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-spin-slow opacity-20 blur-xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Heart className="w-16 h-16 text-primary animate-pulse" fill="currentColor" />
                        </div>
                        <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-sparkle" />
                        <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-primary animate-sparkle" />
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">ZohaAIverse</span>
                </h2>
                <p className="text-muted-foreground mb-6 animate-pulse">
                    Loading magic... ✨
                </p>

                {/* Progress Bar */}
                <div className="w-64 mx-auto">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
