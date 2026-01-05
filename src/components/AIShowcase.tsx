import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Palette, X, Image, Film, Youtube, Video } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

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

import { Carousel as Carousel3D } from "@/components/ui/carousel-3d";

const AIArtGallery = () => {
    const slides = aiImages.map((img) => ({
        title: "",
        button: "",
        src: img
    }));

    return (
        <div className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
            <Carousel3D slides={slides} />

            <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors border border-white/10">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
            </DialogClose>
        </div>
    );
};

const AIShowcase = () => {
    return (
        <section id="ai-showcase" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-black/95 -z-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Creative Studio</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Redefining creativity with Artificial Intelligence. From stunning visuals to cinematic storytelling, I bring imagination to life through prompt engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* AI Image Art Card */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card
                                className="group relative overflow-hidden bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer h-full"
                                style={{
                                    background: `radial-gradient(circle at top left, rgba(168, 85, 247, 0.15), transparent 40%),
                                                radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.15), transparent 40%),
                                                rgba(255, 255, 255, 0.05)`
                                }}
                            >
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                <div className="mb-4 p-3 bg-purple-500/20 rounded-lg w-fit group-hover:bg-purple-500/30 transition-colors">
                                    <Image className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">AI Image Art</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Crafting hyper-realistic and abstract visuals using advanced prompt engineering on Midjourney & Stable Diffusion.
                                </p>
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:border-purple-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                    View Gallery <ExternalLink className="ml-2 w-4 h-4" />
                                </div>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] bg-black/90 border-purple-500/20 backdrop-blur-xl p-0 overflow-hidden">
                            <DialogTitle className="sr-only">AI Art Gallery</DialogTitle>
                            <AIArtGallery />
                        </DialogContent>
                    </Dialog>

                    {/* Cinematic Trailers Card */}
                    {/* Cinematic Trailers Card */}
                    <a
                        href="https://drive.google.com/drive/folders/10soQVRW2IkmwkCHID2yyjE9eIzqKoo9V?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                    >
                        <Card
                            className="group relative overflow-hidden bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 h-full cursor-pointer"
                            style={{
                                background: `radial-gradient(circle at top left, rgba(59, 130, 246, 0.15), transparent 40%),
                                            radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.15), transparent 40%),
                                            rgba(255, 255, 255, 0.05)`
                            }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="mb-4 p-3 bg-blue-500/20 rounded-lg w-fit group-hover:bg-blue-500/30 transition-colors">
                                <Film className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Cinematic Trailers</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Directing and producing Hollywood-style movie trailers entirely generated by AI video models.
                            </p>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium group-hover:bg-blue-500/20 group-hover:text-blue-300 group-hover:border-blue-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                Watch Trailers <ExternalLink className="ml-2 w-4 h-4" />
                            </div>
                        </Card>
                    </a>

                    {/* AI Shorts & Reels Card */}
                    <a
                        href="https://drive.google.com/drive/folders/1AZGic0Jr3JMrl-si0ffJamCKHgkqz3Cp?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                    >
                        <Card
                            className="group relative overflow-hidden bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 h-full cursor-pointer"
                            style={{
                                background: `radial-gradient(circle at top left, rgba(239, 68, 68, 0.15), transparent 40%),
                                            radial-gradient(circle at bottom right, rgba(249, 115, 22, 0.15), transparent 40%),
                                            rgba(255, 255, 255, 0.05)`
                            }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="mb-4 p-3 bg-red-500/20 rounded-lg w-fit group-hover:bg-red-500/30 transition-colors">
                                <Youtube className="w-6 h-6 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">AI Shorts & Reels</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Creating engaging, viral-ready short-form content for Instagram and YouTube using AI tools.
                            </p>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium group-hover:bg-red-500/20 group-hover:text-red-300 group-hover:border-red-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(239,68,68,0.1)] group-hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                Watch Reels <ExternalLink className="ml-2 w-4 h-4" />
                            </div>
                        </Card>
                    </a>

                    {/* Generative Video Card */}
                    <a
                        href="https://drive.google.com/drive/folders/1XjGdYknaFRIJvYCjUG0-SETF9tPtxEp4?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                    >
                        <Card
                            className="group relative overflow-hidden bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300 h-full cursor-pointer"
                            style={{
                                background: `radial-gradient(circle at top left, rgba(34, 197, 94, 0.15), transparent 40%),
                                            radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.15), transparent 40%),
                                            rgba(255, 255, 255, 0.05)`
                            }}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="mb-4 p-3 bg-green-500/20 rounded-lg w-fit group-hover:bg-green-500/30 transition-colors">
                                <Video className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Generative Video</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Transforming text prompts into fluid, dynamic video sequences for storytelling and marketing.
                            </p>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-medium group-hover:bg-green-500/20 group-hover:text-green-300 group-hover:border-green-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                Watch Videos <ExternalLink className="ml-2 w-4 h-4" />
                            </div>
                        </Card>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AIShowcase;
