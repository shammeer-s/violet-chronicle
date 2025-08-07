import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight, Code, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react";
import { useState } from "react";

interface Service {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  category: "development" | "consulting" | "maintenance";
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  age: number;
  rating: number;
  review: string;
  service: string;
  avatar: string;
}

const ServicesSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services: Service[] = [
    {
      id: "1",
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web application development using modern frameworks and best practices.",
      features: [
        "React/Next.js Frontend",
        "Node.js/Express Backend",
        "Database Design & Integration",
        "API Development",
        "Testing & Quality Assurance",
        "Performance Optimization"
      ],
      price: "$80-120/hr",
      duration: "2-12 weeks",
      category: "development"
    },
    {
      id: "2",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and modern development practices.",
      features: [
        "React Native Development",
        "iOS & Android Compatible",
        "Native Performance",
        "Push Notifications",
        "Offline Functionality",
        "App Store Deployment"
      ],
      price: "$70-100/hr",
      duration: "4-16 weeks",
      category: "development"
    },
    {
      id: "3",
      icon: Cloud,
      title: "Cloud Architecture & DevOps",
      description: "Scalable cloud infrastructure design and implementation with automated deployment pipelines.",
      features: [
        "AWS/GCP/Azure Setup",
        "Containerization (Docker)",
        "Kubernetes Orchestration",
        "CI/CD Pipelines",
        "Monitoring & Logging",
        "Auto-scaling Configuration"
      ],
      price: "$90-150/hr",
      duration: "1-8 weeks",
      category: "development"
    },
    {
      id: "4",
      icon: Database,
      title: "Database Design & Optimization",
      description: "Database architecture, optimization, and migration services for better performance.",
      features: [
        "Database Schema Design",
        "Query Optimization",
        "Performance Tuning",
        "Data Migration",
        "Backup Strategies",
        "Security Implementation"
      ],
      price: "$85-130/hr",
      duration: "1-6 weeks",
      category: "development"
    },
    {
      id: "5",
      icon: Globe,
      title: "Technical Consulting",
      description: "Strategic technology guidance and code reviews to improve your development processes.",
      features: [
        "Architecture Review",
        "Code Quality Assessment",
        "Technology Stack Planning",
        "Performance Audits",
        "Best Practices Training",
        "Team Mentoring"
      ],
      price: "$120-200/hr",
      duration: "1-4 weeks",
      category: "consulting"
    },
    {
      id: "6",
      icon: Shield,
      title: "Application Maintenance",
      description: "Ongoing support, updates, and maintenance for existing applications.",
      features: [
        "Bug Fixes & Updates",
        "Security Patches",
        "Performance Monitoring",
        "Feature Enhancements",
        "24/7 Support Available",
        "Monthly Reports"
      ],
      price: "$2000-5000/month",
      duration: "Ongoing",
      category: "maintenance"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechStart Inc",
      age: 32,
      rating: 5,
      review: "Exceptional work on our full-stack application. The code quality was outstanding and the project was delivered on time. Great communication throughout the process.",
      service: "Full Stack Development",
      avatar: "👩‍💼"
    },
    {
      id: "2",
      name: "Marcus Johnson",
      role: "Product Manager",
      company: "InnovateCorp",
      age: 29,
      rating: 5,
      review: "Our mobile app exceeded expectations. The performance is excellent and user feedback has been overwhelmingly positive. Highly recommended!",
      service: "Mobile App Development",
      avatar: "👨‍💻"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Engineering Director",
      company: "ScaleUp Solutions",
      age: 35,
      rating: 5,
      review: "The cloud infrastructure setup was flawless. Our deployment time reduced by 80% and system reliability improved significantly.",
      service: "Cloud Architecture & DevOps",
      avatar: "👩‍🔬"
    },
    {
      id: "4",
      name: "David Kim",
      role: "Lead Developer",
      company: "DataFlow Systems",
      age: 31,
      rating: 5,
      review: "Database optimization work was incredible. Query performance improved by 300% and we learned a lot about best practices.",
      service: "Database Design & Optimization",
      avatar: "👨‍🎓"
    },
    {
      id: "5",
      name: "Lisa Thompson",
      role: "Founder",
      company: "StartupXYZ",
      age: 28,
      rating: 5,
      review: "The technical consulting session helped us avoid major architectural mistakes. Saved us months of development time and technical debt.",
      service: "Technical Consulting",
      avatar: "👩‍💼"
    },
    {
      id: "6",
      name: "Alex Rivera",
      role: "Operations Manager",
      company: "Enterprise Solutions",
      age: 34,
      rating: 5,
      review: "Maintenance service has been fantastic. Our application runs smoothly and any issues are resolved quickly. Peace of mind!",
      service: "Application Maintenance",
      avatar: "👨‍💼"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'development':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'consulting':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'maintenance':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="services" className="section-padding gradient-secondary">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Freelance <span className="text-transparent bg-gradient-primary bg-clip-text">Services</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Professional development services to help bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth hover:border-primary/30 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className={getCategoryColor(service.category)}>
                    {service.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-foreground">What's Included:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <div>
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                    <div className="text-xs text-muted-foreground">{service.duration}</div>
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 shadow-primary transition-smooth"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Client Testimonials
          </h3>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Quote className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-lg text-card-foreground leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].review}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonials[currentTestimonial].rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].service}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="hover:bg-primary/10 transition-smooth"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentTestimonial 
                        ? 'bg-primary' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="hover:bg-primary/10 transition-smooth"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-primary hover-lift transition-smooth"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;