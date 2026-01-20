import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface LocomotiveScrollWrapperProps {
    children: React.ReactNode;
    onMount?: (scroll: LocomotiveScroll) => void;
}

const LocomotiveScrollWrapper = ({ children, onMount }: LocomotiveScrollWrapperProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

    useEffect(() => {
        // Locomotive Scroll disabled to fix scroll lag/stuck issues
        // Native browser scroll is now used
        if (onMount) {
            // onMount(null); 
        }
    }, [onMount]);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default LocomotiveScrollWrapper;
