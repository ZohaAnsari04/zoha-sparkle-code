import { Card } from "@/components/ui/card";
import { DisplayCard } from "@/components/ui/display-cards";
import { Award, Calendar, ExternalLink, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Import certificate images
import cert1 from "@/assets/certificates/cert1.jpg";
import cert2 from "@/assets/certificates/cert2.jpg";
import cert3 from "@/assets/certificates/cert3.jpg";
import cert4 from "@/assets/certificates/cert4.jpg";
import cert5 from "@/assets/certificates/cert5.jpg";
import cert6 from "@/assets/certificates/cert6.jpg";
import cert7 from "@/assets/certificates/cert7.jpg";
import cert8 from "@/assets/certificates/cert8.jpg";
import cert9 from "@/assets/certificates/cert9.jpg";
import cert10 from "@/assets/certificates/cert10.jpg";
import cert11 from "@/assets/certificates/cert11.jpg";
import cert12 from "@/assets/certificates/cert12.jpg";
import cert13 from "@/assets/certificates/cert13.jpg";
import cert14 from "@/assets/certificates/cert14.jpg";
import cert15 from "@/assets/certificates/cert15.jpg";
import cert16 from "@/assets/certificates/cert16.jpg";
import cert17 from "@/assets/certificates/cert17.jpg";
import cert18 from "@/assets/certificates/cert18.jpg";
import cert19 from "@/assets/certificates/cert19_fixed.png";
import cert20 from "@/assets/certificates/cert20.jpg";
import cert21 from "@/assets/certificates/cert21.jpg";
import cert22 from "@/assets/certificates/cert22_fixed.jpg";

const achievements = [

    // M.H. Saboo Siddik College Certificates (5 total)
    {
        title: "Path to Research Mastery Lecture Series",
        issuer: "M.H. Saboo Siddik College of Engineering (CSI Chapter)",
        date: "February 5, 2025",
        credentialId: "PRM-2025",
        description: "Successfully attended the Path to Research Mastery lecture series organized by Computer Engineering Department with CSI MHSSCE Chapter, held from December 21, 2024 to January 25, 2025",
        link: "#",
        skills: ["Research", "Academic Development", "Computer Science"],
        image: cert17
    },
    {
        title: "ERR_404 6.0 Hackathon",
        issuer: "M.H. Saboo Siddik College of Engineering",
        date: "February 15-16, 2025",
        credentialId: "ERR404-2025",
        description: "Participated in 36 hours of International Hackathon organized by the Programmers' Club, Department of Computer Engineering on 15th & 16th February, 2025",
        link: "#",
        skills: ["Hackathon", "Problem Solving", "Team Collaboration"],
        image: cert13
    },
    {
        title: "3-Day MERN Stack Bootcamp",
        issuer: "M.H. Saboo Siddik College of Engineering (Programmers' Club)",
        date: "2025",
        credentialId: "MERN-BOOTCAMP-2025",
        description: "Successfully completed the 3-Day MERN Stack Bootcamp, demonstrating professionalism, dedication, and excellence in full-stack development",
        link: "#",
        skills: ["MERN Stack", "MongoDB", "Express", "React", "Node.js"],
        image: cert16
    },
    {
        title: "Codefeast 4.0 2025",
        issuer: "Programmer's Club, MHSSCE",
        date: "August 15-17, 2025",
        credentialId: "CODEFEAST-2025",
        description: "Successfully showcased skills and active participation in Codefeast 4.0 2025, organized by Programmer's Club.",
        link: "#",
        skills: ["Coding", "Problem Solving", "Technical Skills"],
        image: cert21
    },
    {
        title: "Digital Poster Competition - IEEE MHSSCOE",
        issuer: "IEEE MHSSCOE Student Branch",
        date: "2025",
        credentialId: "IEEE-POSTER-2025",
        description: "Participated in Digital Poster Competition on World Environment Day under the theme 'Planet in Beta Mode: Can AI Save Earth?' organized by IEEE MHSSCOE Student Branch",
        link: "#",
        skills: ["Design", "AI & Environment", "Creative Thinking"],
        image: cert18
    },
    {
        title: "Android Development Workshop using Flutter",
        issuer: "GDSC MHSSCE Chapter",
        date: "January 13-14, 2024",
        credentialId: "GDSC-FLUTTER-2024",
        description: "Completed Android development Workshop using Flutter organized by Google Developer Student Club MHSSCE Chapter on 13th & 14th January 2024.",
        link: "#",
        skills: ["Android Development", "Flutter", "Mobile App Development"],
        image: cert20
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
    },
    // Deloitte
    {
        title: "Deloitte Cyber Job Simulation",
        issuer: "Deloitte (via Forage)",
        date: "November 14, 2025",
        credentialId: "FxcuxqwGepTMRi67K",
        description: "Completed practical tasks in Cyber security during November 2025, demonstrating hands-on experience in cybersecurity practices and methodologies",
        link: "#",
        skills: ["Cybersecurity", "Job Simulation", "Practical Skills"],
        image: cert12
    },
    // Oracle Certificates (2 total)
    {
        title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
        issuer: "Oracle University",
        date: "October 26, 2025",
        credentialId: "322738038OCI25GAIOCP",
        description: "Oracle Certified Professional demonstrating expertise in Oracle Cloud Infrastructure and Generative AI technologies. Valid until October 26, 2027",
        link: "#",
        skills: ["Oracle Cloud", "Generative AI", "Cloud Infrastructure"],
        image: cert9
    },
    {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        date: "October 1, 2025",
        credentialId: "322738038OCI25AICFA",
        description: "Oracle Certified Foundations Associate demonstrating foundational knowledge in Oracle Cloud Infrastructure and AI. Valid until October 1, 2027",
        link: "#",
        skills: ["Oracle Cloud", "AI Foundations", "Cloud Computing"],
        image: cert10
    },
    // OneRoadmap Certificates (5 total)
    {
        title: "React.JS Developer",
        issuer: "OneRoadmap",
        date: "October 23, 2025",
        credentialId: "CERT-BDEA561E",
        description: "Successfully passed the One Roadmap Skill Certification Test in React.JS Development, demonstrating proficiency in React framework and modern JavaScript",
        link: "https://oneroadmap.info/skillvalidate/roadId/CERT-BDEA561E",
        skills: ["React", "JavaScript", "Frontend"],
        image: cert11
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
    // Microsoft Learn Student Ambassador
    {
        title: "Microsoft Build and Ambassador Challenge - Azure",
        issuer: "Microsoft Learn Student Ambassador",
        date: "2025",
        credentialId: "MLSA-AZURE-2025",
        description: "In recognition of your attendance and completion of the Microsoft Learn Student Ambassadors Virtual Event on Microsoft Build and Ambassador Challenge - Azure.",
        link: cert22,
        skills: ["Microsoft Azure", "Cloud Computing", "Student Ambassador"],
        image: cert22
    },
    // Mendeley
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
    // Terna College (Mumbai University) (2 total)
    {
        title: "Clash Of Codes 2.0 - Ace Track",
        issuer: "Mumbai University",
        date: "2025",
        credentialId: "COC-ACE-2025",
        description: "Participated in Clash Of Codes 2.0 Ace Track in recognition of outstanding performance, skill, and dedication in the field of programming and problem-solving",
        link: "#",
        skills: ["Competitive Programming", "Problem Solving", "Coding"],
        image: cert14
    },
    {
        title: "Clash Of Codes 2.0 - Rookie Track",
        issuer: "Mumbai University",
        date: "2025",
        credentialId: "COC-ROOKIE-2025",
        description: "Participated in Clash Of Codes 2.0 Rookie Track in recognition of outstanding performance, skill, and dedication in the field of programming and problem-solving",
        link: "#",
        skills: ["Competitive Programming", "Problem Solving", "Coding"],
        image: cert15
    },
    // edQuest Certificates (2 total)
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
    // Hierroshield
    {
        title: "Hierro CTF: The CTF Hackathon",
        issuer: "Hierroshield Pvt Ltd",
        date: "November 30, 2025",
        credentialId: "HIERRO-CTF-2025",
        description: "Successfully participated in the Hierro CTF: The CTF HackAthon, held on 30th November 2025. Awarded in recognition of enthusiasm, skill, and active involvement in solving live cybersecurity CTF challenges.",
        link: cert19,
        skills: ["Cybersecurity", "CTF", "Hackathon", "Problem Solving"],
        image: cert19
    }
];

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState<{ image: string; title: string } | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedCertificate(null);
            }
        };

        if (selectedCertificate) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedCertificate]);

    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
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
                        <DisplayCard
                            key={index}
                            className="group relative overflow-hidden h-auto w-full flex-col justify-start gap-0 p-0 bg-gray-900/40 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.2)] [&>*]:flex-col [&>*]:items-stretch [&>*]:gap-0"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Animated Background */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary animate-gradient bg-[length:200%_200%]"></div>
                            </div>

                            {/* Glow Effects */}
                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/30 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/30 rounded-full blur-2xl"></div>

                            {/* Floating Particle */}
                            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse"></div>
                            {/* Certificate Image */}
                            {achievement.image && (
                                <div
                                    className="relative overflow-hidden h-48 bg-muted cursor-pointer"
                                    onClick={() => setSelectedCertificate({ image: achievement.image, title: achievement.title })}
                                >
                                    <img
                                        src={achievement.image}
                                        alt={`${achievement.title} Certificate`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                                </div>
                            )}

                            <div className="p-6 relative z-20">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-sm text-foreground/80">
                                            {achievement.issuer}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-3 text-sm text-foreground/70">
                                    <Calendar className="w-4 h-4" />
                                    <span>{achievement.date}</span>
                                </div>

                                <p className="text-sm text-foreground/80 mb-4 leading-relaxed line-clamp-3">
                                    {achievement.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {achievement.skills.slice(0, 3).map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {achievement.image && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full rounded-full border-primary/50 hover:bg-primary/10 text-xs"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setSelectedCertificate({ image: achievement.image, title: achievement.title });
                                        }}
                                    >
                                        <ExternalLink className="mr-2 h-3 w-3" />
                                        View Credential
                                    </Button>
                                )}
                            </div>
                        </DisplayCard>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <button
                        onClick={() => setSelectedCertificate(null)}
                        className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
                        aria-label="Close certificate view"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedCertificate.image}
                            alt={`${selectedCertificate.title} Certificate - Full View`}
                            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
