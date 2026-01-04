import { motion } from "framer-motion";
import { Bot, Brain, Sparkles, Cpu, Wand2, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const aiProjects = [
    {
        title: "Neural Art Generator",
        description: "Creating abstract masterpieces using Generative Adversarial Networks (GANs).",
        icon: <Wand2 className="w-8 h-8 text-purple-400" />,
        color: "from-purple-500 to-pink-500",
        delay: 0.1,
    },
    {
        title: "Conversational Agent",
        description: "A context-aware chatbot powered by Large Language Models (LLMs).",
        icon: <Bot className="w-8 h-8 text-blue-400" />,
        color: "from-blue-500 to-cyan-500",
        delay: 0.2,
    },
    {
        title: "Predictive Analytics",
        description: "Forecasting trends with high accuracy using deep learning algorithms.",
        icon: <Brain className="w-8 h-8 text-emerald-400" />,
        color: "from-emerald-500 to-teal-500",
        delay: 0.3,
    },
    {
        title: "Code Assistant",
        description: "Intelligent code completion and refactoring suggestions.",
        icon: <Terminal className="w-8 h-8 text-orange-400" />,
        color: "from-orange-500 to-red-500",
        delay: 0.4,
    },
];

const AIShowcase = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                            AI Innovations
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Exploring the frontiers of artificial intelligence with cutting-edge generative models and intelligent systems.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aiProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: project.delay }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 overflow-hidden group">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="mb-4 p-3 rounded-2xl bg-gray-800/50 w-fit group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Interactive Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20 relative rounded-3xl overflow-hidden border border-gray-800 bg-gray-900/30 backdrop-blur-md"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                    <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-purple-400 font-mono">
                                <Cpu className="w-5 h-5" />
                                <span>AI POWERED</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Next-Gen Intelligence
                            </h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Leveraging state-of-the-art models to solve complex problems. From natural language processing to computer vision, pushing the boundaries of what's possible.
                            </p>
                            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold transition-all hover:scale-105">
                                View Experiments <Sparkles className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="relative h-64 md:h-80 bg-black/50 rounded-2xl border border-gray-800 overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="relative z-10 text-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-32 h-32 rounded-full border-2 border-dashed border-purple-500/50 mx-auto mb-4 flex items-center justify-center"
                                >
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-xl animate-pulse" />
                                </motion.div>
                                <p className="text-sm font-mono text-purple-400">Processing Data...</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AIShowcase;
