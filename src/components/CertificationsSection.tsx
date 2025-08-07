import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  logo: string;
  type: "professional" | "academic" | "vendor" | "industry";
  status: "valid" | "expired" | "lifetime";
  score?: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      id: "1",
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SAP-123456",
      verificationUrl: "https://aws.amazon.com/verification",
      description: "Advanced certification demonstrating expertise in designing distributed systems on AWS cloud platform.",
      skills: ["AWS", "Cloud Architecture", "Security", "Cost Optimization"],
      logo: "☁️",
      type: "vendor",
      status: "valid",
      score: "850/1000"
    },
    {
      id: "2",
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-789012",
      verificationUrl: "https://cloud.google.com/certification",
      description: "Professional-level certification for designing and building applications on Google Cloud Platform.",
      skills: ["GCP", "Kubernetes", "Microservices", "DevOps"],
      logo: "🌥️",
      type: "vendor",
      status: "valid"
    },
    {
      id: "3",
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-345678",
      verificationUrl: "https://training.linuxfoundation.org/certification/verify",
      description: "Hands-on certification proving ability to manage Kubernetes clusters in production environments.",
      skills: ["Kubernetes", "Container Orchestration", "Linux", "Networking"],
      logo: "⚙️",
      type: "industry",
      status: "valid",
      score: "92%"
    },
    {
      id: "4",
      title: "Meta React Developer Professional Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-RD-901234",
      verificationUrl: "https://coursera.org/verify",
      description: "Comprehensive program covering React development, including hooks, testing, and advanced patterns.",
      skills: ["React", "JavaScript", "Testing", "UI/UX"],
      logo: "⚛️",
      type: "professional",
      status: "lifetime"
    },
    {
      id: "5",
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MONGO-DEV-567890",
      verificationUrl: "https://university.mongodb.com/certification",
      description: "Certification demonstrating proficiency in MongoDB database design, development, and administration.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Aggregation"],
      logo: "🍃",
      type: "vendor",
      status: "valid"
    },
    {
      id: "6",
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2021",
      credentialId: "DOCKER-CA-234567",
      verificationUrl: "https://docker.com/certification",
      description: "Industry-recognized certification proving expertise in containerization and Docker ecosystem.",
      skills: ["Docker", "Containerization", "DevOps", "CI/CD"],
      logo: "🐳",
      type: "vendor",
      status: "valid"
    },
    {
      id: "7",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2021",
      credentialId: "CEH-678901",
      verificationUrl: "https://aspen.eccouncil.org/Verify",
      description: "Advanced certification in ethical hacking and penetration testing methodologies.",
      skills: ["Cybersecurity", "Penetration Testing", "Network Security", "Ethical Hacking"],
      logo: "🔒",
      type: "industry",
      status: "valid",
      score: "85%"
    },
    {
      id: "8",
      title: "Master of Science in Computer Science",
      issuer: "Stanford University",
      date: "2020",
      credentialId: "MS-CS-2020",
      verificationUrl: "https://stanford.edu/verification",
      description: "Advanced degree specializing in Machine Learning and Distributed Systems with thesis on scalable algorithms.",
      skills: ["Computer Science", "Machine Learning", "Algorithms", "Distributed Systems"],
      logo: "🎓",
      type: "academic",
      status: "lifetime"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid':
        return 'bg-success/20 text-success border-success/30';
      case 'expired':
        return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'lifetime':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vendor':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'industry':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'academic':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'professional':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Notable <span className="text-transparent bg-gradient-primary bg-clip-text">Certifications</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and academic achievements that validate my expertise
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-success">{certifications.filter(c => c.status === 'valid').length}</div>
            <div className="text-sm text-muted-foreground">Currently Valid</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{certifications.filter(c => c.type === 'vendor').length}</div>
            <div className="text-sm text-muted-foreground">Vendor Certs</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{certifications.filter(c => c.type === 'industry').length}</div>
            <div className="text-sm text-muted-foreground">Industry Certs</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.id}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth hover:border-primary/30 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{cert.logo}</div>
                    <div className="flex-1">
                      <CardTitle className="text-foreground text-sm leading-tight group-hover:text-primary transition-smooth">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium text-sm">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all"
                    asChild
                  >
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={getStatusColor(cert.status)}>
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert.status}
                  </Badge>
                  <Badge className={getTypeColor(cert.type)}>
                    {cert.type}
                  </Badge>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                  {cert.score && (
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {cert.score}
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-card-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 border-t border-primary/10">
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>ID: {cert.credentialId}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-1 text-xs hover:text-primary transition-smooth"
                      asChild
                    >
                      <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                        Verify →
                      </a>
                    </Button>
                  </div>
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
          >
            <Award className="w-5 h-5 mr-2" />
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;