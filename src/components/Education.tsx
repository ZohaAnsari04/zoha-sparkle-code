import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <GraduationCap className="inline-block mr-3 text-primary" size={48} />
                        <span className="gradient-text">Education</span>
                        <Sparkles className="inline-block ml-2 text-accent animate-sparkle" />
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Academic excellence meets cutting-edge technology 🎓
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl shadow-[0_8px_30px_rgba(236,72,153,0.2)] border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_15px_50px_rgba(236,72,153,0.3)] animate-fade-in">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Icon Section */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_10px_40px_rgba(236,72,153,0.4)] animate-float">
                                    <GraduationCap className="text-white" size={56} />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-grow space-y-6">
                                {/* Degree */}
                                <div>
                                    <div className="flex items-start gap-3 mb-3">
                                        <BookOpen className="text-primary mt-1 flex-shrink-0" size={24} />
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                                Bachelor of Engineering
                                            </h3>
                                            <p className="text-lg md:text-xl text-muted-foreground font-semibold">
                                                Computer Science and Engineering
                                            </p>
                                            <p className="text-base md:text-lg text-primary/80 font-medium mt-1">
                                                Specialization: Internet of Things, Cyber Security & Blockchain Technology
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* College */}
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                                    </div>
                                    <div>
                                        <p className="text-lg md:text-xl font-semibold text-foreground">
                                            M.H. Saboo Siddik College of Engineering
                                        </p>
                                        <p className="text-lg text-muted-foreground">
                                            University of Mumbai
                                        </p>
                                    </div>
                                </div>

                                {/* CGPA */}
                                <div className="flex items-center gap-3 pt-4">
                                    <Award className="text-accent" size={28} />
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-3xl md:text-4xl font-bold gradient-text">
                                            8.96
                                        </span>
                                        <span className="text-xl text-muted-foreground font-semibold">
                                            CGPA
                                        </span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="pt-4 border-t-2 border-primary/20">
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "IoT",
                                            "Cyber Security",
                                            "Blockchain",
                                            "Computer Science",
                                            "Engineering"
                                        ].map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 bg-card border-2 border-primary/30 rounded-full text-base font-semibold text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all cursor-default hover:scale-105 shadow-[0_2px_10px_rgba(236,72,153,0.1)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Additional Info Card */}
                <div className="max-w-4xl mx-auto mt-8">
                    <Card className="p-6 bg-card rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-300 animate-fade-in">
                        <div className="text-center">
                            <p className="text-lg text-muted-foreground">
                                <span className="font-semibold text-foreground">Academic Focus:</span> Building expertise in emerging technologies including IoT ecosystems, cybersecurity frameworks, and blockchain development while maintaining strong fundamentals in computer science and software engineering.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Education;
