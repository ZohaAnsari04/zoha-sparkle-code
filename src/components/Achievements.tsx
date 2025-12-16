import { Card } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
    {
        title: "Blockchain Fundamentals",
        issuer: "Coursera",
        date: "2024",
        credentialId: "ABC123XYZ",
        description: "Comprehensive understanding of blockchain technology, smart contracts, and decentralized applications",
        link: "#",
        skills: ["Blockchain", "Smart Contracts", "Web3"]
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-CCP-2023",
        description: "Foundational understanding of AWS Cloud, services, and architecture",
        link: "#",
        skills: ["AWS", "Cloud Computing", "DevOps"]
    },
    {
        title: "React Advanced Patterns",
        issuer: "Udemy",
        date: "2023",
        credentialId: "UC-REACT-2023",
        description: "Advanced React patterns, hooks, performance optimization, and state management",
        link: "#",
        skills: ["React", "JavaScript", "Frontend"]
    },
    {
        title: "Cybersecurity Essentials",
        issuer: "Cisco",
        date: "2023",
        credentialId: "CISCO-SEC-2023",
        description: "Understanding of cybersecurity principles, network security, and threat detection",
        link: "#",
        skills: ["Security", "Networking", "OSINT"]
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Achievements</span>
                        <Sparkles className="inline-block ml-2 text-accent animate-sparkle" />
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Certifications and accomplishments that showcase my expertise 🏆
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <Card
                            key={index}
                            className="group p-6 bg-card rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {achievement.issuer}
                                    </p>

                                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{achievement.date}</span>
                                        <span className="mx-2">•</span>
                                        <span className="font-mono text-xs">ID: {achievement.credentialId}</span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {achievement.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {achievement.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {achievement.link !== "#" && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="rounded-full border-primary/50 hover:bg-primary/10"
                                            onClick={() => window.open(achievement.link, '_blank')}
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Credential
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
