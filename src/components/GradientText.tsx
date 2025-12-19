import React from 'react';
import './GradientText.css';

interface GradientTextProps {
    colors: string[];
    animationSpeed?: number;
    showBorder?: boolean;
    className?: string;
    children: React.ReactNode;
}

const GradientText: React.FC<GradientTextProps> = ({
    colors,
    animationSpeed = 3,
    showBorder = false,
    className = '',
    children,
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    };

    const animationStyle = {
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`animated-gradient-text ${className}`}>
            {showBorder && (
                <div
                    className="gradient-overlay"
                    style={{ ...gradientStyle, ...animationStyle }}
                />
            )}
            <span
                className="text-content"
                style={{ ...gradientStyle, ...animationStyle }}
            >
                {children}
            </span>
        </div>
    );
};

export default GradientText;
