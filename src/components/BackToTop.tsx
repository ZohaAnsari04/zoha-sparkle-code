import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Lenis from "lenis";

interface BackToTopProps {
    lenisInstance?: Lenis | null;
}

const BackToTop = ({ lenisInstance }: BackToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleWindowScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        if (lenisInstance) {
            const handleLenisScroll = (e: { scroll: number }) => {
                setIsVisible(e.scroll > 300);
            };
            lenisInstance.on('scroll', handleLenisScroll);
            return () => {
                lenisInstance.off('scroll', handleLenisScroll);
            };
        } else {
            window.addEventListener("scroll", handleWindowScroll);
            return () => {
                window.removeEventListener("scroll", handleWindowScroll);
            };
        }
    }, [lenisInstance]);

    const scrollToTop = () => {
        if (lenisInstance) {
            lenisInstance.scrollTo(0, {
                duration: 1.2,
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
                }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};

export default BackToTop;
