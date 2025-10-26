import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-card border-t-2 border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                ZohaAIverse
              </h3>
              <p className="text-sm text-muted-foreground">
                Creating digital magic with code and creativity ✨
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold mb-3 text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block mx-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block mx-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block mx-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block mx-auto text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3 text-foreground">Let's Connect</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Open to collaborations and opportunities
              </p>
              <p className="text-sm text-primary font-medium">
                zoha@zohaaiverse.com
              </p>
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />
          
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} ZohaAIverse. All rights reserved.
            </p>
            <p className="text-sm text-primary font-medium flex items-center justify-center gap-2">
              Made with{" "}
              <Heart className="inline-block animate-sparkle" fill="currentColor" size={16} />
              {" "}and{" "}
              <Sparkles className="inline-block animate-sparkle" size={16} />
              {" "}by Zoha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;