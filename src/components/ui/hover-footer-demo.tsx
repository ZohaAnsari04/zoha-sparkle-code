"use client";
import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function HoverFooter() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation Links
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", id: "hero" },
        { label: "Journey", id: "journey" },
        { label: "Projects", id: "projects" },
        { label: "AI Showcase", id: "ai-showcase" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Achievements", id: "achievements" },
        { label: "Contact", id: "contact" },
        {
          label: "Available for Hire",
          id: "contact",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "zoha101204@gmail.com",
      href: "mailto:zoha101204@gmail.com",
    },
    {
      icon: <Github size={18} className="text-[#3ca2fa]" />,
      text: "ZohaAnsari04",
      href: "https://github.com/ZohaAnsari04",
    },
    {
      icon: <Linkedin size={18} className="text-[#3ca2fa]" />,
      text: "Ansari Zoha Najmul Kalam",
      href: "https://www.linkedin.com/in/er-ansari-zoha-najmul-kalam-819610238/",
    },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 border border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-[#3ca2fa] w-7 h-7 animate-pulse" />
              <span className="text-white text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-[#3ca2fa]">
                BuiltByZoha
              </span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Creating digital magic with code and creativity ✨. Full-stack developer building intuitive, beautiful, and interactive web experiences.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-neutral-400 hover:text-[#3ca2fa] transition-colors text-sm flex items-center gap-1 group text-left"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                    {link.pulse && (
                      <span className="absolute top-1 right-[-12px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Connect With Me
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-[#3ca2fa] transition-colors truncate max-w-[200px]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-neutral-400 hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-neutral-800 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0 text-neutral-400">
          <span>&copy; {new Date().getFullYear()} BuiltByZoha. All rights reserved.</span>
          <span className="flex items-center gap-1 text-[#3ca2fa]">
            Made with <Heart size={14} className="fill-current text-red-500 animate-pulse" /> by Ansari Zoha Najmul Kalam
          </span>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="ZOHA" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
