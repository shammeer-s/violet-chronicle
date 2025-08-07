import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar, Clock, Eye, Heart, MessageCircle, TrendingUp } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  tags: string[];
  mediumUrl: string;
  views: number;
  claps: number;
  responses: number;
  featured: boolean;
  category: string;
}

const BlogsSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Scalable React Applications: Lessons from Production",
      description: "A comprehensive guide to architecting React apps for scale",
      excerpt: "After building multiple large-scale React applications, I've learned valuable lessons about architecture, state management, and performance optimization that I want to share with the community.",
      publishDate: "2024-01-15",
      readTime: "12 min",
      tags: ["React", "Architecture", "Performance", "Best Practices"],
      mediumUrl: "https://medium.com/@username/building-scalable-react-applications",
      views: 15420,
      claps: 892,
      responses: 47,
      featured: true,
      category: "Frontend Development"
    },
    {
      id: "2",
      title: "Microservices Design Patterns: A Practical Guide",
      description: "Implementing common microservices patterns in Node.js",
      excerpt: "Exploring essential microservices design patterns including API Gateway, Circuit Breaker, and Event Sourcing with real-world implementations and code examples.",
      publishDate: "2023-12-08",
      readTime: "18 min",
      tags: ["Microservices", "Node.js", "Architecture", "Design Patterns"],
      mediumUrl: "https://medium.com/@username/microservices-design-patterns",
      views: 23150,
      claps: 1245,
      responses: 78,
      featured: true,
      category: "Backend Development"
    },
    {
      id: "3",
      title: "The Complete Guide to Modern CSS Grid",
      description: "Master CSS Grid with practical examples and use cases",
      excerpt: "A deep dive into CSS Grid layout system with practical examples, browser support considerations, and advanced techniques for creating responsive layouts.",
      publishDate: "2023-11-22",
      readTime: "15 min",
      tags: ["CSS", "Grid", "Responsive Design", "Frontend"],
      mediumUrl: "https://medium.com/@username/complete-guide-css-grid",
      views: 8920,
      claps: 567,
      responses: 32,
      featured: false,
      category: "Web Design"
    },
    {
      id: "4",
      title: "TypeScript Tips for Better Developer Experience",
      description: "Advanced TypeScript techniques for cleaner code",
      excerpt: "Discover advanced TypeScript features and patterns that will improve your development workflow, catch bugs early, and make your code more maintainable.",
      publishDate: "2023-10-15",
      readTime: "10 min",
      tags: ["TypeScript", "JavaScript", "Development", "Best Practices"],
      mediumUrl: "https://medium.com/@username/typescript-tips-better-dx",
      views: 12340,
      claps: 734,
      responses: 41,
      featured: true,
      category: "Programming"
    },
    {
      id: "5",
      title: "Optimizing Web Performance: A Comprehensive Checklist",
      description: "Proven strategies for faster web applications",
      excerpt: "A detailed checklist covering everything from image optimization to code splitting, helping you achieve better Core Web Vitals and user experience.",
      publishDate: "2023-09-28",
      readTime: "20 min",
      tags: ["Performance", "Web Vitals", "Optimization", "UX"],
      mediumUrl: "https://medium.com/@username/web-performance-checklist",
      views: 18670,
      claps: 1156,
      responses: 65,
      featured: true,
      category: "Performance"
    },
    {
      id: "6",
      title: "Getting Started with Docker for JavaScript Developers",
      description: "Containerizing Node.js applications made simple",
      excerpt: "A beginner-friendly introduction to Docker for JavaScript developers, covering containerization basics, best practices, and deployment strategies.",
      publishDate: "2023-08-12",
      readTime: "14 min",
      tags: ["Docker", "DevOps", "Node.js", "Deployment"],
      mediumUrl: "https://medium.com/@username/docker-for-js-developers",
      views: 9830,
      claps: 445,
      responses: 28,
      featured: false,
      category: "DevOps"
    },
    {
      id: "7",
      title: "State Management in React: Redux vs Zustand vs Context",
      description: "Choosing the right state management solution",
      excerpt: "Comparing popular React state management solutions with real-world examples, performance considerations, and decision criteria.",
      publishDate: "2023-07-25",
      readTime: "16 min",
      tags: ["React", "State Management", "Redux", "Zustand"],
      mediumUrl: "https://medium.com/@username/react-state-management-comparison",
      views: 14250,
      claps: 823,
      responses: 52,
      featured: false,
      category: "Frontend Development"
    },
    {
      id: "8",
      title: "Building RESTful APIs with Express.js: Best Practices",
      description: "Creating robust and maintainable Node.js APIs",
      excerpt: "Learn how to build production-ready RESTful APIs with Express.js, covering authentication, validation, error handling, and documentation.",
      publishDate: "2023-06-18",
      readTime: "22 min",
      tags: ["Express.js", "API", "Node.js", "Backend"],
      mediumUrl: "https://medium.com/@username/express-api-best-practices",
      views: 11890,
      claps: 692,
      responses: 38,
      featured: false,
      category: "Backend Development"
    }
  ];

  // Calculate stats
  const totalViews = blogPosts.reduce((sum, post) => sum + post.views, 0);
  const totalClaps = blogPosts.reduce((sum, post) => sum + post.claps, 0);
  const totalResponses = blogPosts.reduce((sum, post) => sum + post.responses, 0);
  const avgViewsPerPost = Math.round(totalViews / blogPosts.length);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="blogs" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Technical <span className="text-transparent bg-gradient-primary bg-clip-text">Blogs</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights through technical writing on Medium
          </p>
        </div>

        {/* Medium Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{blogPosts.length}</div>
            <div className="text-sm text-muted-foreground">Published Articles</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{formatNumber(totalViews)}</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Eye className="w-3 h-3" />
              Total Views
            </div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{formatNumber(totalClaps)}</div>
            <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              <Heart className="w-3 h-3" />
              Total Claps
            </div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">{formatNumber(avgViewsPerPost)}</div>
            <div className="text-sm text-muted-foreground">Avg. Views/Post</div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Featured Articles
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.slice(0, 4).map((post, index) => (
              <Card 
                key={post.id}
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth hover:border-primary/30 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {post.category}
                        </Badge>
                        <Badge variant="outline" className="border-success/30 text-success">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {post.description}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all"
                      asChild
                    >
                      <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-card-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {formatNumber(post.views)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {formatNumber(post.claps)}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.responses}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 shadow-primary transition-smooth mt-4"
                    asChild
                  >
                    <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                      Read on Medium
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts List */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Recent Articles
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-smooth group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.publishDate)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                        {post.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground">
                        {post.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {formatNumber(post.views)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {formatNumber(post.claps)}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.responses}
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="border-primary/30 hover:bg-primary/10 transition-smooth"
                      asChild
                    >
                      <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
            <a href="https://medium.com/@username" target="_blank" rel="noopener noreferrer">
              <TrendingUp className="w-5 h-5 mr-2" />
              View All Articles on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;