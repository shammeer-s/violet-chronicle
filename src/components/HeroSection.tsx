import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, FileText, Code, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: FileText, href: "#", label: "Medium" },
    { icon: Code, href: "#", label: "LeetCode" },
  ];

  const skills = [
    "Full Stack Developer",
    "React Expert",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB"
  ];

  return (
    <section className="min-h-screen gradient-hero section-padding flex items-center">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20 animate-glow"></div>
              <img
                src={heroImage}
                alt="Developer workspace"
                className="relative rounded-3xl shadow-card hover-lift transition-smooth w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-right">
            <div className="space-y-4">
              <h1 className="text-hero font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-gradient-primary bg-clip-text">
                  Your Name
                </span>
              </h1>
              <p className="text-subtitle text-muted-foreground leading-relaxed">
                Passionate full-stack developer crafting digital experiences with modern 
                technologies. I transform ideas into robust, scalable applications that 
                make a difference.
              </p>
            </div>

            {/* Skills badges */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 bg-card border-primary/20 text-foreground hover-glow transition-smooth"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Story */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
              <p className="text-card-foreground leading-relaxed">
                With over 5+ years in software development, I specialize in building 
                end-to-end solutions using React, Node.js, and cloud technologies. 
                I'm passionate about open source, clean code, and creating meaningful 
                digital experiences.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  className="bg-card/30 border-primary/20 hover:bg-primary hover:border-primary transition-smooth hover-lift"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-primary hover-lift transition-smooth"
              >
                View My Work
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:bg-primary/10 transition-smooth"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;