import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const SocialSidebar = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/ZohaAnsari04",
            color: "hover:text-[#333] dark:hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/zoha-ansari-a8a5a7259/",
            color: "hover:text-[#0077B5]"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:zohaansari2004@gmail.com",
            color: "hover:text-primary"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/zoha_ansari04/",
            color: "hover:text-[#E4405F]"
        }
    ];

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block animate-fade-in">
            <div className="flex flex-col gap-4 p-4 bg-card/80 backdrop-blur-md rounded-2xl border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300">
                {socialLinks.map((social, index) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl bg-muted hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:rotate-6 group ${social.color} animate-fade-in`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        title={social.name}
                    >
                        <social.icon className="w-6 h-6 text-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    </a>
                ))}

                {/* Animated Decorative line */}
                <div className="h-16 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary mx-auto animate-pulse"></div>
            </div>
        </div>
    );
};

export default SocialSidebar;
