import { useRef, useEffect, useCallback } from "react";

interface ClickSparkProps {
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
    extraScale?: number;
}

interface Spark {
    x: number;
    y: number;
    angle: number;
    startTime: number;
}

const ClickSpark = ({
    sparkColor = "#fff",
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    easing = "ease-out",
    extraScale = 1.0
}: ClickSparkProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sparksRef = useRef<Spark[]>([]);
    const startTimeRef = useRef<number | null>(null);
    const animationIdRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationIdRef.current);
        };
    }, []);

    const easeFunc = useCallback(
        (t: number) => {
            switch (easing) {
                case "linear":
                    return t;
                case "ease-in":
                    return t * t;
                case "ease-in-out":
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:
                    return t * (2 - t);
            }
        },
        [easing]
    );

    // Memoize drawing parameters to prevent recreating draw loop functions unnecessarily
    const drawParams = useRef({ sparkColor, sparkSize, sparkRadius, duration, easing, extraScale });
    useEffect(() => {
        drawParams.current = { sparkColor, sparkSize, sparkRadius, duration, easing, extraScale };
    }, [sparkColor, sparkSize, sparkRadius, duration, easing, extraScale]);

    const draw = useCallback((timestamp: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        if (!startTimeRef.current) {
            startTimeRef.current = timestamp;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const params = drawParams.current;

        sparksRef.current = sparksRef.current.filter(spark => {
            const elapsed = timestamp - spark.startTime;
            if (elapsed >= params.duration) {
                return false;
            }

            const progress = elapsed / params.duration;
            const eased = easeFunc(progress);

            const distance = eased * params.sparkRadius * params.extraScale;
            const lineLength = params.sparkSize * (1 - eased);

            const x1 = spark.x + distance * Math.cos(spark.angle);
            const y1 = spark.y + distance * Math.sin(spark.angle);
            const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
            const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

            let resolvedColor = params.sparkColor;
            if (params.sparkColor.startsWith("var(")) {
                const varName = params.sparkColor.slice(4, -1);
                resolvedColor = getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || "#fff";
            }
            ctx.strokeStyle = resolvedColor;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            return true;
        });

        if (sparksRef.current.length > 0) {
            animationIdRef.current = requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            startTimeRef.current = null;
        }
    }, [easeFunc]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const x = e.clientX;
            const y = e.clientY;

            const now = performance.now();
            const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
                x,
                y,
                angle: (2 * Math.PI * i) / sparkCount,
                startTime: now
            }));

            const wasEmpty = sparksRef.current.length === 0;
            sparksRef.current.push(...newSparks);

            if (wasEmpty) {
                cancelAnimationFrame(animationIdRef.current);
                startTimeRef.current = now;
                animationIdRef.current = requestAnimationFrame(draw);
            }
        };

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [sparkCount, draw]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100vw",
                height: "100vh",
                display: "block",
                userSelect: "none",
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 100001
            }}
        />
    );
};

export default ClickSpark;
