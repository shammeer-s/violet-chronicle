import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Globe, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  demoUrl?: string;
  image: string;
  status: "completed" | "in-progress" | "planning";
  featured: boolean;
  stats?: {
    stars?: number;
    forks?: number;
    downloads?: number;
  };
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UX",
      longDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment integration, real-time inventory management, and admin dashboard. Supports multi-vendor marketplace functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker"],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
      demoUrl: "https://demo-ecommerce.com/demo",
      image: "🛒",
      status: "completed",
      featured: true,
      stats: { stars: 245, forks: 67, downloads: 1200 }
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Collaborative project management tool",
      longDescription: "A Trello-like project management application with real-time collaboration, drag-and-drop functionality, file attachments, and team workspaces. Built with React, Express, and Socket.io for real-time updates.",
      technologies: ["React", "Express", "Socket.io", "PostgreSQL", "Redis"],
      liveUrl: "https://taskflow-app.com",
      githubUrl: "https://github.com/username/taskflow",
      image: "📋",
      status: "completed",
      featured: true,
      stats: { stars: 156, forks: 34 }
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts",
      longDescription: "A beautiful weather dashboard that provides current conditions, 7-day forecasts, and interactive maps. Features location-based weather, favorite locations, and weather alerts. Built with React and integrated with multiple weather APIs.",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js", "PWA"],
      liveUrl: "https://weather-dash.com",
      githubUrl: "https://github.com/username/weather-dashboard",
      image: "🌤️",
      status: "completed",
      featured: false,
      stats: { stars: 89, forks: 23 }
    },
    {
      id: "4",
      title: "AI Content Generator",
      description: "AI-powered content creation platform",
      longDescription: "An AI-driven platform for generating blog posts, social media content, and marketing copy. Integrates with OpenAI API and features custom prompts, content templates, and team collaboration tools.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Supabase", "Tailwind CSS"],
      liveUrl: "https://ai-content.com",
      githubUrl: "https://github.com/username/ai-content",
      image: "🤖",
      status: "in-progress",
      featured: true,
      stats: { stars: 312, forks: 89 }
    },
    {
      id: "5",
      title: "Portfolio Website",
      description: "Personal portfolio with blog and CMS",
      longDescription: "A personal portfolio website with integrated blog, project showcase, and content management system. Features dark/light mode, SEO optimization, and headless CMS integration.",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
      liveUrl: "https://myportfolio.com",
      githubUrl: "https://github.com/username/portfolio",
      image: "💼",
      status: "completed",
      featured: false,
      stats: { stars: 67, forks: 12 }
    },
    {
      id: "6",
      title: "Blockchain Voting System",
      description: "Decentralized voting platform using blockchain",
      longDescription: "A secure, transparent voting system built on Ethereum blockchain. Features voter authentication, real-time results, and immutable vote recording. Includes web3 integration and smart contract development.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      liveUrl: "https://blockchain-vote.com",
      githubUrl: "https://github.com/username/blockchain-voting",
      image: "🗳️",
      status: "planning",
      featured: true,
      stats: { stars: 423, forks: 156 }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }: { project: Project, featured?: boolean }) => (
    <Card 
      className={`
        bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth
        hover:border-primary/30 group overflow-hidden
        ${featured ? 'lg:col-span-2' : ''}
      `}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={`text-4xl ${featured ? 'text-5xl' : ''}`}>{project.image}</div>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <Badge 
                  variant={project.status === 'completed' ? 'default' : project.status === 'in-progress' ? 'secondary' : 'outline'}
                  className={`
                    ${project.status === 'completed' ? 'bg-success/20 text-success border-success/30' : ''}
                    ${project.status === 'in-progress' ? 'bg-warning/20 text-warning border-warning/30' : ''}
                    ${project.status === 'planning' ? 'bg-muted/20 text-muted-foreground border-muted/30' : ''}
                  `}
                >
                  {project.status.replace('-', ' ')}
                </Badge>
              </div>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="hover:bg-primary/10" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {project.stats && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {project.stats.stars && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                {project.stats.stars}
              </div>
            )}
            {project.stats.forks && (
              <div className="flex items-center gap-1">
                <Github className="w-4 h-4" />
                {project.stats.forks} forks
              </div>
            )}
            {project.stats.downloads && (
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {project.stats.downloads} downloads
              </div>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-card-foreground leading-relaxed">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            className="bg-primary hover:bg-primary/90 shadow-primary transition-smooth"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10 transition-smooth"
            asChild
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </Button>
          {project.demoUrl && (
            <Button 
              variant="ghost" 
              className="hover:bg-primary/10 transition-smooth"
              asChild
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo Video
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="section-padding gradient-secondary">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Featured <span className="text-transparent bg-gradient-primary bg-clip-text">Projects</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`animate-fade-in-up ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} featured={true} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-semibold text-center text-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/10 transition-smooth"
            asChild
          >
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
