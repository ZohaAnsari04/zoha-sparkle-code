import { useState, useEffect } from "react";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-muted/30 z-[60]">
            <div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
