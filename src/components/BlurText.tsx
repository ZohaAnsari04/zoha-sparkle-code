"use client";

import { motion, Variants } from "framer-motion";
import { useMemo } from "react";

type BlurTextProps = {
    text: string;
    delay?: number;
    animateBy?: "words" | "characters";
    direction?: "top" | "bottom";
    className?: string;
    onAnimationComplete?: () => void;
};

const BlurText = ({
    text,
    delay = 150,
    animateBy = "words",
    direction = "top",
    className,
    onAnimationComplete,
}: BlurTextProps) => {
    const MotionComponent = motion.span;

    const defaultVariants: Variants = {
        hidden: {
            filter: "blur(10px)",
            opacity: 0,
            y: direction === "top" ? -20 : 20
        },
        visible: {
            filter: "blur(0px)",
            opacity: 1,
            y: 0
        },
    };

    const text_arr = useMemo(() => {
        return animateBy === "words" ? text.split(" ") : text.split("");
    }, [text, animateBy]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{
                staggerChildren: delay / 1000,
            }}
            className={className}
            onAnimationComplete={onAnimationComplete}
        >
            {text_arr.map((char, i) => (
                <MotionComponent
                    key={i}
                    variants={defaultVariants}
                    transition={{
                        duration: 0.4,
                        ease: "easeOut",
                    }}
                    style={{ display: "inline-block" }}
                >
                    {char}
                    {animateBy === "words" && i !== text_arr.length - 1 && "\u00A0"}
                </MotionComponent>
            ))}
        </motion.div>
    );
};

export default BlurText;
