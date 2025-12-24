import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import LocomotiveScroll from "locomotive-scroll";

interface BackToTopProps {
    scrollInstance?: LocomotiveScroll | null;
}

const BackToTop = ({ scrollInstance }: BackToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleWindowScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        if (scrollInstance) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            scrollInstance.on('scroll', (args: any) => {
                if (args.scroll && typeof args.scroll.y === 'number') {
                    setIsVisible(args.scroll.y > 300);
                }
            });
        } else {
            window.addEventListener("scroll", handleWindowScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleWindowScroll);
        };
    }, [scrollInstance]);

    const scrollToTop = () => {
        if (scrollInstance) {
            scrollInstance.scrollTo('#hero', {
                duration: 1500,
                disableLerp: false
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
