import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollWrapperProps {
    children: React.ReactNode;
}

const LocomotiveScrollWrapper = ({ children }: LocomotiveScrollWrapperProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

    useEffect(() => {
        if (!scrollRef.current) return;

        // Initialize Locomotive Scroll
        locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            }
        });

        // Update scroll on window resize
        const handleResize = () => {
            locomotiveScrollRef.current?.update();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            locomotiveScrollRef.current?.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default LocomotiveScrollWrapper;
