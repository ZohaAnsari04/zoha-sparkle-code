import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const SocialSidebar = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/ZohaAnsari04",
            color: "text-black dark:text-white"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/er-ansari-zoha-najmul-kalam-819610238/",
            color: "text-[#0077B5]"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:zoha101204@gmail.com",
            color: "text-[#EA4335]"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/btwitzoyu._?igsh=NnRnanM3eGtiOGQy",
            color: "text-[#E4405F]"
        }
    ];

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block animate-fade-in">
            <div className="flex flex-col gap-4 p-4 bg-card/80 dark:bg-gray-900/30 backdrop-blur-xl rounded-full border-2 border-border dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.2)] transition-all duration-300">
                {socialLinks.map((social, index) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-muted dark:bg-white/5 border border-transparent dark:border-white/5 hover:bg-primary/10 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-300 hover:scale-110 hover:rotate-6 group animate-fade-in relative overflow-hidden`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        title={social.name}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10`} />
                    </a>
                ))}

                {/* Animated Decorative line */}
                <div className="h-16 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary dark:from-transparent dark:via-purple-500 dark:to-transparent mx-auto opacity-50"></div>
            </div>
        </div>
    );
};

export default SocialSidebar;
