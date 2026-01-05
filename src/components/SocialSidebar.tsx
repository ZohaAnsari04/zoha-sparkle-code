import { Github, Linkedin, Mail, Instagram } from "lucide-react";

import "./SocialSidebar.css";

const SocialSidebar = () => {
    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/ZohaAnsari04",
            color: "text-black dark:text-white",
            hex: "#333333"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/er-ansari-zoha-najmul-kalam-819610238/",
            color: "text-[#0077B5]",
            hex: "#0077B5"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:zoha101204@gmail.com",
            color: "text-[#EA4335]",
            hex: "#EA4335"
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/btwitzoyu._?igsh=NnRnanM3eGtiOGQy",
            color: "text-[#E4405F]",
            hex: "#E4405F"
        }
    ];

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
            <div className="card-social">
                <ul>
                    {socialLinks.map((social) => (
                        <li key={social.name} className="iso-pro" style={{ "--social-color": social.hex } as React.CSSProperties}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <div className={`svg-social flex items-center justify-center ${social.color}`}>
                                    <social.icon size={24} />
                                </div>
                            </a>
                            <div className="text-social">{social.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SocialSidebar;
