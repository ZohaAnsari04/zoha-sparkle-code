import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for the outer follower ring (creates a smooth organic lag)
  const springConfig = { stiffness: 350, damping: 28, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device has a coarse pointer (mobile/touch screens)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      return;
    }

    // Set cursor visibility
    setIsVisible(true);

    // Hide default cursor by adding class to html tag
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Detect clickable elements (links, buttons, or role="button")
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[99999] flex items-center justify-center"
        style={{
          x: followerX,
          y: followerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.7 : 1,
          borderColor: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--accent) / 0.5)',
          borderStyle: isHovered ? 'dashed' : 'solid',
          rotate: isHovered ? 180 : 0,
          backgroundColor: isHovered ? 'hsl(var(--primary) / 0.05)' : 'rgba(0,0,0,0)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          borderColor: { duration: 0.2 },
          rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
          backgroundColor: { duration: 0.2 },
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[100000] bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          boxShadow: isHovered 
            ? '0 0 15px hsl(var(--primary))' 
            : '0 0 8px rgba(236,72,153,0.6)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 15 },
        }}
      />
    </>
  );
};

export default CustomCursor;
