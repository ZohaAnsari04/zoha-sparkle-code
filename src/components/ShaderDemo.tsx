import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

const ShaderDemo = () => {
    return (
        <div className="w-full h-screen bg-black relative">
            <AnimatedShaderBackground />
            {/* You can add content on top of the background */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h1 className="text-white text-6xl font-bold">Beautiful Aurora Effect</h1>
            </div>
        </div>
    );
};

export default ShaderDemo;
