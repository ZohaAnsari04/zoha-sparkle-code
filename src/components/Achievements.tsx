import { Card } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import certificate images
import cert1 from "@/assets/certificates/cert1.jpg";
import cert2 from "@/assets/certificates/cert2.jpg";
import cert3 from "@/assets/certificates/cert3.jpg";
import cert4 from "@/assets/certificates/cert4.jpg";
import cert5 from "@/assets/certificates/cert5.jpg";
import cert6 from "@/assets/certificates/cert6.jpg";
import cert7 from "@/assets/certificates/cert7.jpg";
import cert8 from "@/assets/certificates/cert8.jpg";

const achievements = [
    {
        title: "Mendeley Training",
        issuer: "Mendeley (Elsevier)",
        date: "January 25, 2025",
        credentialId: "MENDELEY-2025",
        description: "Completed Mendeley training course with a certified Mendeley Advisor, demonstrating good reference management skills and effective use of Mendeley",
        link: "#",
        skills: ["Research", "Reference Management", "Academic Writing"],
        image: cert6
    },
    {
        title: "AI Engineer",
        issuer: "OneRoadmap",
        date: "October 23, 2025",
        credentialId: "CERT-2517DC67",
        description: "Successfully passed the One Roadmap Skill Certification Test in AI Engineer, demonstrating expertise in artificial intelligence and machine learning concepts",
        link: "https://oneroadmap.info/skillvalidate/roadId/CERT-2517DC67",
        skills: ["AI", "Machine Learning", "Engineering"],
        image: cert1
    },
    {
        title: "Introduction of Machine Learning",
        issuer: "edQuest (edba-academy)",
        date: "November 6, 2025",
        credentialId: "EDQ-coding-IHHXJZVB",
        description: "Successfully completed Introduction of Machine Learning, an online non-credit course covering ML fundamentals, algorithms, and practical applications",
        link: "#",
        skills: ["Machine Learning", "Python", "Data Science"],
        image: cert3
    },
    {
        title: "Design Systems 101",
        issuer: "edQuest (edba-academy)",
        date: "September 13, 2025",
        credentialId: "EDQ-design-ZDYRCYCN",
        description: "Successfully completed Design Systems 101, an online non-credit course covering design system fundamentals, component libraries, and design principles",
        link: "#",
        skills: ["Design Systems", "UI/UX", "Component Design"],
        image: cert2
    },
    {
        title: "Full Stack Developer",
        issuer: "OneRoadmap",
        date: "August 2, 2025",
        credentialId: "CERT-1458B7F5",
        description: "Successfully passed the One Roadmap Skill Certification Test in Full Stack Development, demonstrating proficiency in both frontend and backend technologies",
        link: "https://oneroadmap.info/skillvalidate/roadId/CERT-1458B7F5",
        skills: ["Full Stack", "Frontend", "Backend"],
        image: cert8
    },
    {
        title: "Frontend Development",
        issuer: "OneRoadmap",
        date: "August 1, 2025",
        credentialId: "CERT-5AFB4443",
        description: "Successfully passed the One Roadmap Skill Certification Test in Frontend Development, demonstrating expertise in modern frontend technologies and frameworks",
        link: "https://oneroadmap.info/skillvalidate/roadId/CERT-5AFB4443",
        skills: ["Frontend", "React", "JavaScript"],
        image: cert5
    },
    {
        title: "DevOps Engineer",
        issuer: "OneRoadmap",
        date: "July 29, 2025",
        credentialId: "CERT-8D259A64",
        description: "Successfully passed the One Roadmap Skill Certification Test in DevOps Engineering, demonstrating expertise in CI/CD, automation, and infrastructure management",
        link: "https://oneroadmap.info/skillvalidate/roadId/CERT-8D259A64",
        skills: ["DevOps", "CI/CD", "Cloud"],
        image: cert4
    },
    {
        title: "Machine Learning Workshop",
        issuer: "Google Developer Student Clubs (GDSC MHSSCE)",
        date: "January 20-21, 2024",
        credentialId: "GDSC-ML-2024",
        description: "Successfully completed the Machine Learning Workshop organized by Google Developer Student Club MHSSCE Chapter on January 20th and 21st, 2024",
        link: "#",
        skills: ["Machine Learning", "Google Cloud", "Workshops"],
        image: cert7
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden bg-card rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(236,72,153,0.2)] animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Certificate Image */}
                            {achievement.image && (
                                <div className="relative overflow-hidden h-48 bg-muted">
                                    <img
                                        src={achievement.image}
                                        alt={`${achievement.title} Certificate`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {achievement.issuer}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>{achievement.date}</span>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
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
                                        className="w-full rounded-full border-primary/50 hover:bg-primary/10"
                                        onClick={() => window.open(achievement.link, '_blank')}
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        View Credential
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
