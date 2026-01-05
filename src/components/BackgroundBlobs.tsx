import { motion } from "framer-motion";

const BackgroundBlobs = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
            <div className="absolute bottom-0 right-20 w-[500px] h-[500px] bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        </div>
    );
};

export default BackgroundBlobs;
