import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Mail, MapPin, Github, Linkedin, Twitter, Instagram, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon! 💖", {
      description: "Thank you for reaching out!"
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-foreground" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0077b5]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1da1f2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#e4405f]" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create <span className="gradient-text">Magic</span> Together
            <Sparkles className="inline-block ml-2 text-accent animate-sparkle" />
          </h2>
          <p className="text-xl text-muted-foreground">
            I'd love to hear from you! Drop me a message 💌
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 bg-card rounded-3xl shadow-[0_4px_20px_rgba(236,72,153,0.15)] border-2 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Your Name
                </label>
                <Input 
                  type="text"
                  placeholder="Enter your lovely name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-2xl border-2 border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Your Email
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-2xl border-2 border-border focus:border-primary transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Your Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project or just say hi! 👋"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-2xl border-2 border-border focus:border-primary transition-colors min-h-[150px] resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg font-semibold shadow-[0_10px_40px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:zoha@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      zoha@zohaaiverse.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Mumbai, India 🇮🇳</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in">
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">
                Connect with me
                <Heart className="inline-block ml-2 text-primary" fill="currentColor" size={20} />
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center text-muted-foreground ${social.color} hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_20px_rgba(236,72,153,0.3)]`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-3xl border-2 border-secondary/30 text-center animate-fade-in">
              <p className="text-sm font-semibold mb-3 text-foreground">Digital Business Card</p>
              <div className="w-32 h-32 bg-card mx-auto rounded-2xl flex items-center justify-center border-2 border-primary/20">
                <Sparkles className="text-primary animate-sparkle" size={40} />
              </div>
              <p className="text-xs text-muted-foreground mt-3">Scan to save my contact!</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;