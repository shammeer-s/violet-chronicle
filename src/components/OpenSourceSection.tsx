import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Star, GitFork, Download, ExternalLink, Users } from "lucide-react";

interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  githubUrl: string;
  npmUrl?: string;
  docsUrl?: string;
  features: string[];
  stats: {
    stars: number;
    forks: number;
    downloads?: number;
    contributors: number;
  };
  type: "library" | "tool" | "framework" | "application";
  status: "active" | "maintenance" | "archived";
  logo: string;
}

const OpenSourceSection = () => {
  const projects: OpenSourceProject[] = [
    {
      id: "1",
      name: "react-modern-datepicker",
      description: "A beautiful, accessible React datepicker component",
      detailedDescription: "A highly customizable and accessible React datepicker with TypeScript support, multiple calendar views, date ranges, and internationalization. Zero dependencies, full keyboard navigation, and ARIA compliance.",
      technologies: ["React", "TypeScript", "CSS-in-JS", "Jest", "Storybook"],
      githubUrl: "https://github.com/username/react-modern-datepicker",
      npmUrl: "https://npmjs.com/package/react-modern-datepicker",
      docsUrl: "https://react-modern-datepicker.dev",
      features: [
        "Zero dependencies",
        "Full accessibility support",
        "TypeScript definitions",
        "Multiple calendar views",
        "Date range selection",
        "Internationalization",
        "Custom styling API",
        "Keyboard navigation"
      ],
      stats: {
        stars: 2847,
        forks: 156,
        downloads: 125000,
        contributors: 23
      },
      type: "library",
      status: "active",
      logo: "📅"
    },
    {
      id: "2",
      name: "dev-portfolio-cli",
      description: "CLI tool for generating developer portfolios",
      detailedDescription: "A command-line interface tool that generates beautiful, responsive developer portfolios with customizable themes, sections, and deployment options. Supports multiple frameworks and hosting platforms.",
      technologies: ["Node.js", "TypeScript", "Commander.js", "Inquirer", "Chalk"],
      githubUrl: "https://github.com/username/dev-portfolio-cli",
      npmUrl: "https://npmjs.com/package/dev-portfolio-cli",
      docsUrl: "https://dev-portfolio-cli.dev",
      features: [
        "Interactive CLI wizard",
        "Multiple themes",
        "Framework agnostic",
        "Auto deployment",
        "SEO optimization",
        "Responsive design",
        "Dark/light modes",
        "Social integrations"
      ],
      stats: {
        stars: 1523,
        forks: 89,
        downloads: 45000,
        contributors: 12
      },
      type: "tool",
      status: "active",
      logo: "🛠️"
    },
    {
      id: "3",
      name: "microservice-patterns",
      description: "Microservices design patterns implementation",
      detailedDescription: "A comprehensive collection of microservices design patterns implemented in Node.js and Docker. Includes examples of API Gateway, Circuit Breaker, Event Sourcing, CQRS, and more.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL", "RabbitMQ"],
      githubUrl: "https://github.com/username/microservice-patterns",
      docsUrl: "https://microservice-patterns.dev",
      features: [
        "12+ Design patterns",
        "Docker compose setup",
        "Kubernetes manifests",
        "Monitoring stack",
        "Load testing scripts",
        "Documentation site",
        "CI/CD examples",
        "Production ready"
      ],
      stats: {
        stars: 3421,
        forks: 567,
        contributors: 45
      },
      type: "framework",
      status: "active",
      logo: "🏗️"
    },
    {
      id: "4",
      name: "json-validator-pro",
      description: "Advanced JSON schema validation library",
      detailedDescription: "A high-performance JSON schema validation library with custom rules, async validation, and detailed error reporting. Supports JSON Schema Draft 7 and custom extensions.",
      technologies: ["JavaScript", "TypeScript", "JSON Schema", "Benchmark.js"],
      githubUrl: "https://github.com/username/json-validator-pro",
      npmUrl: "https://npmjs.com/package/json-validator-pro",
      features: [
        "High performance",
        "Custom validators",
        "Async validation",
        "Detailed errors",
        "TypeScript support",
        "Browser compatible",
        "Zero dependencies",
        "Extensive tests"
      ],
      stats: {
        stars: 892,
        forks: 67,
        downloads: 78000,
        contributors: 8
      },
      type: "library",
      status: "maintenance",
      logo: "✅"
    },
    {
      id: "5",
      name: "api-mocker",
      description: "REST API mocking server for development",
      detailedDescription: "A flexible API mocking server for rapid development and testing. Features dynamic responses, request validation, data persistence, and OpenAPI integration.",
      technologies: ["Express", "OpenAPI", "SQLite", "Docker", "Swagger"],
      githubUrl: "https://github.com/username/api-mocker",
      npmUrl: "https://npmjs.com/package/api-mocker",
      features: [
        "OpenAPI integration",
        "Dynamic responses",
        "Data persistence",
        "Request validation",
        "CORS support",
        "Docker support",
        "Web interface",
        "Hot reloading"
      ],
      stats: {
        stars: 1245,
        forks: 134,
        downloads: 32000,
        contributors: 15
      },
      type: "tool",
      status: "active",
      logo: "🎭"
    },
    {
      id: "6",
      name: "react-form-wizard",
      description: "Multi-step form wizard for React applications",
      detailedDescription: "A powerful React component for building multi-step forms with validation, progress tracking, and custom styling. Supports conditional steps and async validation.",
      technologies: ["React", "TypeScript", "Formik", "Yup", "Styled Components"],
      githubUrl: "https://github.com/username/react-form-wizard",
      npmUrl: "https://npmjs.com/package/react-form-wizard",
      features: [
        "Multi-step forms",
        "Validation support",
        "Progress tracking",
        "Conditional steps",
        "Custom styling",
        "Async validation",
        "TypeScript ready",
        "Accessibility"
      ],
      stats: {
        stars: 756,
        forks: 45,
        downloads: 28000,
        contributors: 6
      },
      type: "library",
      status: "maintenance",
      logo: "📝"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-success/20 text-success border-success/30';
      case 'maintenance':
        return 'bg-warning/20 text-warning border-warning/30';
      case 'archived':
        return 'bg-muted/20 text-muted-foreground border-muted/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'library':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'tool':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'framework':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'application':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const totalStats = projects.reduce((acc, project) => ({
    stars: acc.stars + project.stats.stars,
    forks: acc.forks + project.stats.forks,
    downloads: acc.downloads + (project.stats.downloads || 0),
    contributors: acc.contributors + project.stats.contributors
  }), { stars: 0, forks: 0, downloads: 0, contributors: 0 });

  return (
    <section id="opensource" className="section-padding gradient-secondary">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Open Source <span className="text-transparent bg-gradient-primary bg-clip-text">Contributions</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Contributing to the developer community through open source libraries, tools, and frameworks
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{totalStats.stars.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Star className="w-3 h-3" />
              Total Stars
            </div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{totalStats.forks.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <GitFork className="w-3 h-3" />
              Total Forks
            </div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{Math.round(totalStats.downloads / 1000)}k+</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Download className="w-3 h-3" />
              Downloads
            </div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{totalStats.contributors}</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Users className="w-3 h-3" />
              Contributors
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth hover:border-primary/30 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{project.logo}</div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <Badge className={getTypeColor(project.type)}>
                    {project.type}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    {project.stats.stars.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.stats.forks}
                  </div>
                  {project.stats.downloads && (
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {Math.round(project.stats.downloads / 1000)}k
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-card-foreground text-sm leading-relaxed">
                  {project.detailedDescription}
                </p>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-foreground mb-2">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {project.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-1 text-muted-foreground">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 shadow-primary transition-smooth"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  {project.npmUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/30 hover:bg-primary/10 transition-smooth"
                      asChild
                    >
                      <a href={project.npmUrl} target="_blank" rel="noopener noreferrer">
                        NPM
                      </a>
                    </Button>
                  )}
                  {project.docsUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 transition-smooth"
                      asChild
                    >
                      <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
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

export default OpenSourceSection;