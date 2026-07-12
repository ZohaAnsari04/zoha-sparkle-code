import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    splitType?: "chars" | "words" | "lines" | "words, chars";
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: "left" | "center" | "right" | "justify" | "initial" | "inherit";
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
    onLetterAnimationComplete?: () => void;
}

const SplitText = ({
    text,
    className = "",
    delay = 50,
    duration = 1.25,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    tag = "p",
    onLetterAnimationComplete
}: SplitTextProps) => {
    const ref = useRef<HTMLElement | null>(null);
    const animationCompletedRef = useRef(false);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Keep callback ref updated
    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

    useEffect(() => {
        if (document.fonts && document.fonts.status === "loaded") {
            setFontsLoaded(true);
        } else if (document.fonts) {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        } else {
            setFontsLoaded(true);
        }
    }, []);

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;
            // Prevent re-animation if already completed
            if (animationCompletedRef.current) return;
            const el = ref.current;

            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
            const sign =
                marginValue === 0
                    ? ""
                    : marginValue < 0
                    ? `-=${Math.abs(marginValue)}${marginUnit}`
                    : `+=${marginValue}${marginUnit}`;
            const start = `top ${startPct}%${sign}`;

            let targets: NodeListOf<Element> | null = null;
            if (splitType.includes("chars")) {
                targets = el.querySelectorAll(".split-char");
            } else if (splitType.includes("words")) {
                targets = el.querySelectorAll(".split-word");
            } else {
                targets = el.querySelectorAll(".split-char");
            }

            if (!targets || targets.length === 0) return;

            const tween = gsap.fromTo(
                targets,
                { ...from },
                {
                    ...to,
                    duration,
                    ease,
                    stagger: delay / 1000,
                    scrollTrigger: {
                        trigger: el,
                        start,
                        once: true,
                        fastScrollEnd: true,
                        anticipatePin: 0.4
                    },
                    onComplete: () => {
                        animationCompletedRef.current = true;
                        onCompleteRef.current?.();
                    },
                    willChange: "transform, opacity",
                    force3D: true
                }
            );

            return () => {
                ScrollTrigger.getAll().forEach(st => {
                    if (st.trigger === el) st.kill();
                });
                tween.kill();
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                splitType,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded
            ],
            scope: ref
        }
    );

    const isGradient = className.includes("gradient-text");
    const parentClass = isGradient 
        ? className.replace("gradient-text", "").trim() 
        : className;

    const renderContent = () => {
        if (splitType === "words") {
            return text.split(" ").map((word, wIdx) => (
                <span
                    key={wIdx}
                    className={`split-word inline-block ${isGradient ? "gradient-text" : ""}`}
                    style={{ willChange: "transform, opacity" }}
                >
                    {word}&nbsp;
                </span>
            ));
        }

        if (splitType === "words, chars") {
            return text.split(" ").map((word, wIdx) => (
                <span
                    key={wIdx}
                    className="split-word inline-block"
                    style={{ willChange: "transform, opacity", whiteSpace: "nowrap" }}
                >
                    {word.split("").map((char, cIdx) => (
                        <span
                            key={cIdx}
                            className={`split-char inline-block ${isGradient ? "gradient-text" : ""}`}
                            style={{ willChange: "transform, opacity" }}
                        >
                            {char}
                        </span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                </span>
            ));
        }

        // Default: split by chars
        return text.split("").map((char, cIdx) => (
            <span
                key={cIdx}
                className={`split-char inline-block ${isGradient ? "gradient-text" : ""}`}
                style={{
                    willChange: "transform, opacity",
                    whiteSpace: char === " " ? "pre" : "normal"
                }}
            >
                {char === " " ? " " : char}
            </span>
        ));
    };

    const Tag = tag;

    return (
        <Tag
            ref={ref as unknown as React.Ref<HTMLParagraphElement>}
            className={`split-parent ${parentClass}`}
            style={{
                textAlign,
                overflow: "hidden",
                display: "inline-block",
                whiteSpace: "normal",
                wordWrap: "break-word",
                willChange: "transform, opacity"
            }}
        >
            {renderContent()}
        </Tag>
    );
};

export default SplitText;
