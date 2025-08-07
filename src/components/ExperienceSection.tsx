import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  certificateLink: string;
  logo: string;
}

const ExperienceSection = () => {
  const companyExperiences: Experience[] = [
    {
      id: "1",
      company: "Tech Corp",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Led development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines and mentored junior developers.",
      technologies: ["React", "Node.js", "AWS", "Docker", "GraphQL"],
      certificateLink: "#",
      logo: "🏢"
    },
    {
      id: "2",
      company: "Innovation Labs",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: "Built scalable web applications using modern frameworks. Improved performance by 40% through optimization techniques.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
      certificateLink: "#",
      logo: "🚀"
    },
    {
      id: "3",
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: "Developed responsive web applications and collaborated with UX team to implement pixel-perfect designs.",
      technologies: ["React", "TypeScript", "Sass", "Jest"],
      certificateLink: "#",
      logo: "💡"
    },
    {
      id: "4",
      company: "Digital Agency",
      position: "Junior Developer",
      duration: "2018 - 2019",
      location: "Remote",
      description: "Started my journey as a developer, working on client projects and learning industry best practices.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      certificateLink: "#",
      logo: "🎯"
    }
  ];

  const communityExperiences: Experience[] = [
    {
      id: "1",
      company: "Google Developer Groups",
      position: "Community Organizer",
      duration: "2021 - Present",
      location: "Global",
      description: "Organized tech meetups and workshops for 500+ developers. Created educational content on modern web development.",
      technologies: ["Community Building", "Public Speaking", "Content Creation"],
      certificateLink: "#",
      logo: "🌐"
    },
    {
      id: "2",
      company: "Hacktoberfest",
      position: "Open Source Contributor",
      duration: "2020 - Present",
      location: "Global",
      description: "Contributed to 50+ open source projects. Maintained popular npm packages with 10k+ downloads.",
      technologies: ["Open Source", "Git", "Community Support"],
      certificateLink: "#",
      logo: "🎃"
    },
    {
      id: "3",
      company: "TechConf Speaker",
      position: "Conference Speaker",
      duration: "2021 - Present",
      location: "Various",
      description: "Delivered talks on React patterns and best practices at major tech conferences.",
      technologies: ["Public Speaking", "Technical Writing", "Mentoring"],
      certificateLink: "#",
      logo: "🎤"
    },
    {
      id: "4",
      company: "Code for Good",
      position: "Volunteer Developer",
      duration: "2019 - Present",
      location: "Remote",
      description: "Developed applications for non-profit organizations, impacting 1000+ beneficiaries.",
      technologies: ["Social Impact", "Pro Bono", "Team Leadership"],
      certificateLink: "#",
      logo: "❤️"
    }
  ];

  const ExperienceTimeline = ({ experiences, title }: { experiences: Experience[], title: string }) => (
    <div className="space-y-6">
      <h3 className="text-title font-bold text-center mb-8 text-transparent bg-gradient-primary bg-clip-text">
        {title}
      </h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id} 
            className={`timeline-item animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth hover:border-primary/30">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{exp.logo}</div>
                    <div>
                      <CardTitle className="text-foreground">{exp.position}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10"
                    asChild
                  >
                    <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-card-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            My <span className="text-transparent bg-gradient-primary bg-clip-text">Experience</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            A journey through professional growth and community impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ExperienceTimeline experiences={companyExperiences} title="Professional Experience" />
          <ExperienceTimeline experiences={communityExperiences} title="Community Experience" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;