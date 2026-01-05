import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Mail, MapPin, Github, Linkedin, Instagram, Youtube, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdankpvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon! 💖", {
          description: "Thank you for reaching out!"
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong", {
          description: "Please try again or email me directly."
        });
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ZohaAnsari04", label: "GitHub", color: "text-black dark:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/er-ansari-zoha-najmul-kalam-819610238/", label: "LinkedIn", color: "text-[#0077b5]" },
    { icon: Youtube, href: "https://www.youtube.com/@Indiasupergenius", label: "YouTube", color: "text-[#ff0000]" },
    { icon: Instagram, href: "https://www.instagram.com/btwitzoyu._?igsh=NnRnanM3eGtiOGQy", label: "Instagram", color: "text-[#e4405f]" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 dark:bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Create <span className="gradient-text">Magic</span> Together
            <Sparkles className="inline-block ml-2 text-accent animate-sparkle" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I work best on projects that solve real problems not just look good on paper. If you have a product idea, a technical challenge, or need someone who can actually execute, reach out. Clear goals, clean code, real outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card
            className="p-8 bg-card rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)] border-2 border-border hover:border-primary/50 transition-all duration-300 animate-fade-in hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${contactBg})` }}
          >
            <div className="absolute inset-0 bg-white/75 dark:bg-black/75 transition-colors duration-300" />
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Your Name
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your lovely name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-2xl border-2 border-border focus:border-primary transition-colors bg-white/50 dark:bg-black/20 backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Your Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-2xl border-2 border-border focus:border-primary transition-colors bg-white/50 dark:bg-black/20 backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Your Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi! 👋"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-2xl border-2 border-border focus:border-primary transition-colors min-h-[150px] resize-none bg-white/50 dark:bg-black/20 backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg font-semibold shadow-[0_10px_40px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-transparent dark:to-transparent dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border-2 border-primary/30 dark:border-white/10 hover:border-primary/50 dark:hover:border-purple-500/50 transition-all duration-300 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:zoha101204@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      zoha101204@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">Mumbai - India 🇮🇳</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card dark:bg-gray-900/40 dark:backdrop-blur-md rounded-3xl border-2 border-border dark:border-white/10 hover:border-primary/50 dark:hover:border-purple-500/50 transition-all duration-300 animate-fade-in shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)]">
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
                    className={`w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center ${social.color} hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_5px_20px_rgba(236,72,153,0.3)]`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;