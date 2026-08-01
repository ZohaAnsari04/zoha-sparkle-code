import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Palette, X, Image, Film, Youtube, Video } from "lucide-react";
import { BorderBeamPanel } from "@/components/ui/border-beam-panel";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog";

import aiArt1 from "@/assets/ai-art-1.jpg";
import aiArt2 from "@/assets/ai-art-2.jpg";
import aiArt3 from "@/assets/ai-art-3.jpg";
import aiArt4 from "@/assets/ai-art-4.jpg";
import aiArt5 from "@/assets/ai-art-5.jpg";
import aiArt6 from "@/assets/ai-art-6.jpg";
import aiArt7 from "@/assets/ai-art-7.jpg";
import aiArt8 from "@/assets/ai-art-8.jpg";
import aiArt9 from "@/assets/ai-art-9.jpg";
import aiArt10 from "@/assets/ai-art-10.jpg";
import aiArt11 from "@/assets/ai-art-11.jpg";
import aiArt12 from "@/assets/ai-art-12.jpg";
import aiArt13 from "@/assets/ai-art-13.jpg";
import aiArt14 from "@/assets/ai-art-14.jpg";
import aiArt15 from "@/assets/ai-art-15.jpg";
import aiArt16 from "@/assets/ai-art-16.jpg";
import aiArt17 from "@/assets/ai-art-17.jpg";
import aiArt18 from "@/assets/ai-art-18.jpg";
import aiArt19 from "@/assets/ai-art-19.jpg";
import aiArt20 from "@/assets/ai-art-20.jpg";
import aiArt21 from "@/assets/ai-art-21.jpg";
import aiArt22 from "@/assets/ai-art-22.jpg";
import aiArt23 from "@/assets/ai-art-23.jpg";
import aiArt24 from "@/assets/ai-art-24.jpg";
import aiArt25 from "@/assets/ai-art-25.jpg";
import aiArt26 from "@/assets/ai-art-26.jpg";
import aiArt27 from "@/assets/ai-art-27.jpg";
import aiArt28 from "@/assets/ai-art-28.jpg";
import aiArt29 from "@/assets/ai-art-29.jpg";

const aiImages = [
    aiArt1, aiArt2, aiArt3, aiArt4, aiArt5,
    aiArt6, aiArt7, aiArt8, aiArt9, aiArt10,
    aiArt11, aiArt12, aiArt13, aiArt14, aiArt15,
    aiArt16, aiArt17, aiArt18, aiArt19, aiArt20,
    aiArt21, aiArt22, aiArt23, aiArt24, aiArt25,
    aiArt26, aiArt27, aiArt28, aiArt29
];

import CircularGallery from "@/components/CircularGallery";

const aiArtTitles = [
    "Cyberpunk Vision", "Neon Dreams", "Futuristic City", "Ethereal Landscape", "Cosmic Voyager",
    "Digital Renaissance", "Neural Abstraction", "Surreal Reality", "Quantum Genesis", "Synthwave Sunset",
    "Robotic Elegance", "Abstract Dimensions", "Celestial Bloom", "Hyperdrive Odyssey", "Mind Portal",
    "Luminous Entity", "Starlight Nexus", "Chrono Displacement", "Bio-Digital Fusion", "Phantom Horizon",
    "Astral Odyssey", "Vivid Resonance", "Matrix Architect", "Deep Space Nebula", "Orbital Sphere",
    "Prismatic Flow", "Ghost In Machine", "Temporal Distortion", "Cybernetic Harmony"
];

const aiGalleryItems = aiImages.map((img, index) => ({
    image: img,
    text: aiArtTitles[index] || `AI Artwork #${index + 1}`
}));

const AIArtGallery = () => {
    return (
        <div className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center bg-black overflow-hidden">
            <CircularGallery
                items={aiGalleryItems}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
            />

            <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors border border-white/10 cursor-pointer">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </DialogClose>
        </div>
    );
};

const AIShowcase = () => {
    return (
        <section id="ai-showcase" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-950/20 via-background to-blue-900/10 dark:from-transparent dark:via-transparent dark:to-transparent relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 animate-fade-in">
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground tracking-tight">
                        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Creative Studio</span>
                    </h2>
                    <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Redefining creativity with Artificial Intelligence. From stunning visuals to cinematic storytelling, I bring imagination to life through prompt engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                    {/* AI Image Art Card */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="h-full cursor-pointer">
                                <BorderBeamPanel
                                    beams={2}
                                    thickness={2}
                                    radius={20}
                                    glow
                                    seed={1}
                                    colors={["#3b82f6", "#60a5fa"]}
                                    className="group relative overflow-hidden bg-[#0a1128] dark:bg-[#090e24] border border-blue-500/20 p-6 hover:bg-[#0f1938] transition-all duration-300 h-full flex flex-col justify-between"
                                >
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    <div>
                                        <div className="mb-4 p-3 bg-blue-500/20 rounded-lg w-fit group-hover:bg-blue-500/30 transition-colors">
                                            <Image className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">AI Image Art</h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                            Crafting hyper-realistic and abstract visuals using advanced prompt engineering on Midjourney & Stable Diffusion.
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] w-fit mt-2">
                                        View Gallery <ExternalLink className="ml-2 w-4 h-4" />
                                    </div>
                                </BorderBeamPanel>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] bg-black/90 border-blue-500/20 backdrop-blur-xl p-0 overflow-hidden">
                            <DialogTitle className="sr-only">AI Art Gallery</DialogTitle>
                            <AIArtGallery />
                        </DialogContent>
                    </Dialog>

                    {/* Cinematic Trailers Card */}
                    <a
                        href="https://drive.google.com/drive/folders/10soQVRW2IkmwkCHID2yyjE9eIzqKoo9V?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full cursor-pointer"
                    >
                        <BorderBeamPanel
                            beams={2}
                            thickness={2}
                            radius={20}
                            glow
                            seed={2}
                            colors={["#2563eb", "#38bdf8"]}
                            className="group relative overflow-hidden bg-[#0a1128] dark:bg-[#090e24] border border-blue-500/20 p-6 hover:bg-[#0f1938] transition-all duration-300 h-full flex flex-col justify-between"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div>
                                <div className="mb-4 p-3 bg-blue-500/20 rounded-lg w-fit group-hover:bg-blue-500/30 transition-colors">
                                    <Film className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Cinematic Trailers</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                    Directing and producing Hollywood-style movie trailers entirely generated by AI video models.
                                </p>
                            </div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] w-fit mt-2">
                                Watch Trailers <ExternalLink className="ml-2 w-4 h-4" />
                            </div>
                        </BorderBeamPanel>
                    </a>

                    {/* AI Shorts & Reels Card */}
                    <a
                        href="https://drive.google.com/drive/folders/1AZGic0Jr3JMrl-si0ffJamCKHgkqz3Cp?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full cursor-pointer"
                    >
                        <BorderBeamPanel
                            beams={2}
                            thickness={2}
                            radius={20}
                            glow
                            seed={3}
                            colors={["#1d4ed8", "#60a5fa"]}
                            className="group relative overflow-hidden bg-[#0a1128] dark:bg-[#090e24] border border-blue-500/20 p-6 hover:bg-[#0f1938] transition-all duration-300 h-full flex flex-col justify-between"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div>
                                <div className="mb-4 p-3 bg-blue-500/20 rounded-lg w-fit group-hover:bg-blue-500/30 transition-colors">
                                    <Youtube className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">AI Shorts & Reels</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                    Creating engaging, viral-ready short-form content for Instagram and YouTube using AI tools.
                                </p>
                            </div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] w-fit mt-2">
                                Watch Reels <ExternalLink className="ml-2 w-4 h-4" />
                            </div>
                        </BorderBeamPanel>
                    </a>

                    {/* Generative Video Card */}
                    <a
                        href="https://drive.google.com/drive/folders/1XjGdYknaFRIJvYCjUG0-SETF9tPtxEp4?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full cursor-pointer"
                    >
                        <BorderBeamPanel
                            beams={2}
                            thickness={2}
                            radius={20}
                            glow
                            seed={4}
                            colors={["#3b82f6", "#93c5fd"]}
                            className="group relative overflow-hidden bg-[#0a1128] dark:bg-[#090e24] border border-blue-500/20 p-6 hover:bg-[#0f1938] transition-all duration-300 h-full flex flex-col justify-between"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div>
                                <div className="mb-4 p-3 bg-blue-500/20 rounded-lg w-fit group-hover:bg-blue-500/30 transition-colors">
                                    <Video className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Generative Video</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                    Transforming text prompts into fluid, dynamic video sequences for storytelling and marketing.
                                </p>
                            </div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] w-fit mt-2">
                                Watch Videos <ExternalLink className="ml-2 w-4 h-4" />
                            </div>
                        </BorderBeamPanel>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AIShowcase;
