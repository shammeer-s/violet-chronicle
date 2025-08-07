import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Trophy, Star, Code, BarChart3, Users, BookOpen } from "lucide-react";

interface ProfilePlatform {
  id: string;
  name: string;
  username: string;
  profileUrl: string;
  description: string;
  icon: string;
  stats: {
    primary: { label: string; value: string; icon: any };
    secondary: { label: string; value: string; icon: any };
    tertiary: { label: string; value: string; icon: any };
    quaternary?: { label: string; value: string; icon: any };
  };
  achievements: string[];
  ranking: string;
  joinDate: string;
  category: "coding" | "data-science" | "professional" | "qa";
}

const ProfilesSection = () => {
  const profiles: ProfilePlatform[] = [
    {
      id: "1",
      name: "LeetCode",
      username: "@yourhandle",
      profileUrl: "https://leetcode.com/yourhandle",
      description: "Algorithmic problem solving and competitive programming",
      icon: "⚡",
      stats: {
        primary: { label: "Problems Solved", value: "850+", icon: Code },
        secondary: { label: "Contest Rating", value: "2145", icon: Trophy },
        tertiary: { label: "Global Ranking", value: "Top 5%", icon: BarChart3 },
        quaternary: { label: "Max Streak", value: "127 days", icon: Star }
      },
      achievements: [
        "Knight Badge (1000+ problems)",
        "Contest Rating 2100+",
        "50 Day Streak Badge",
        "Binary Search Master"
      ],
      ranking: "Knight",
      joinDate: "2020",
      category: "coding"
    },
    {
      id: "2",
      name: "Kaggle",
      username: "@yourhandle",
      profileUrl: "https://kaggle.com/yourhandle",
      description: "Data science competitions and machine learning projects",
      icon: "📊",
      stats: {
        primary: { label: "Notebooks", value: "45", icon: BookOpen },
        secondary: { label: "Datasets", value: "12", icon: BarChart3 },
        tertiary: { label: "Competitions", value: "8", icon: Trophy },
        quaternary: { label: "Discussions", value: "156", icon: Users }
      },
      achievements: [
        "Notebooks Expert",
        "Bronze Medal Winner",
        "Top 10% in Titanic Competition",
        "Community Contributor"
      ],
      ranking: "Expert",
      joinDate: "2021",
      category: "data-science"
    },
    {
      id: "3",
      name: "HackerRank",
      username: "@yourhandle",
      profileUrl: "https://hackerrank.com/yourhandle",
      description: "Programming challenges and skill assessments",
      icon: "🎯",
      stats: {
        primary: { label: "Problems Solved", value: "320+", icon: Code },
        secondary: { label: "Certificates", value: "15", icon: Trophy },
        tertiary: { label: "Global Rank", value: "12,456", icon: BarChart3 },
        quaternary: { label: "Skills Verified", value: "8", icon: Star }
      },
      achievements: [
        "5-star in Problem Solving",
        "JavaScript Gold Badge",
        "SQL 5-star Rating",
        "Algorithm Expert"
      ],
      ranking: "5-Star",
      joinDate: "2019",
      category: "coding"
    },
    {
      id: "4",
      name: "Stack Overflow",
      username: "@yourhandle",
      profileUrl: "https://stackoverflow.com/users/yourhandle",
      description: "Q&A community for developers",
      icon: "🤝",
      stats: {
        primary: { label: "Reputation", value: "15.2k", icon: Star },
        secondary: { label: "Answers", value: "342", icon: Users },
        tertiary: { label: "Questions", value: "87", icon: BookOpen },
        quaternary: { label: "Badges", value: "23", icon: Trophy }
      },
      achievements: [
        "Gold Badge in JavaScript",
        "Silver Badge in React",
        "Bronze Badge in Node.js",
        "Helpful Community Member"
      ],
      ranking: "Trusted User",
      joinDate: "2018",
      category: "qa"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'coding':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'data-science':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'professional':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'qa':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getRankingColor = (ranking: string) => {
    if (ranking.includes('Expert') || ranking.includes('Knight') || ranking.includes('5-Star')) {
      return 'text-yellow-400';
    }
    if (ranking.includes('Trusted') || ranking.includes('Gold')) {
      return 'text-purple-400';
    }
    return 'text-primary';
  };

  return (
    <section id="profiles" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-title font-bold mb-4">
            Developer <span className="text-transparent bg-gradient-primary bg-clip-text">Profiles</span>
          </h2>
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            My presence across various developer platforms and communities
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">1200+</div>
            <div className="text-sm text-muted-foreground">Problems Solved</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">15.2k</div>
            <div className="text-sm text-muted-foreground">SO Reputation</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">45</div>
            <div className="text-sm text-muted-foreground">Kaggle Notebooks</div>
          </div>
          <div className="text-center bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-2xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Active Platforms</div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <Card 
              key={profile.id}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover-lift transition-smooth hover:border-primary/30 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{profile.icon}</div>
                    <div>
                      <CardTitle className="text-foreground group-hover:text-primary transition-smooth">
                        {profile.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {profile.username}
                      </CardDescription>
                      <CardDescription className="text-muted-foreground text-sm">
                        {profile.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-primary/10 opacity-0 group-hover:opacity-100 transition-all"
                    asChild
                  >
                    <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={getCategoryColor(profile.category)}>
                    {profile.category.replace('-', ' ')}
                  </Badge>
                  <Badge className={`bg-primary/20 text-primary border-primary/30`}>
                    {profile.ranking}
                  </Badge>
                  <span className="text-xs text-muted-foreground">Since {profile.joinDate}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <profile.stats.primary.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{profile.stats.primary.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{profile.stats.primary.value}</div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <profile.stats.secondary.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{profile.stats.secondary.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{profile.stats.secondary.value}</div>
                  </div>
                  
                  <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <profile.stats.tertiary.icon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">{profile.stats.tertiary.label}</span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{profile.stats.tertiary.value}</div>
                  </div>
                  
                  {profile.stats.quaternary && (
                    <div className="bg-primary/5 rounded-xl p-3 border border-primary/10">
                      <div className="flex items-center gap-2 mb-1">
                        <profile.stats.quaternary.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{profile.stats.quaternary.label}</span>
                      </div>
                      <div className="text-lg font-bold text-foreground">{profile.stats.quaternary.value}</div>
                    </div>
                  )}
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    Notable Achievements
                  </h5>
                  <div className="space-y-2">
                    {profile.achievements.slice(0, 3).map((achievement) => (
                      <div key={achievement} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {achievement}
                      </div>
                    ))}
                    {profile.achievements.length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{profile.achievements.length - 3} more achievements
                      </div>
                    )}
                  </div>
                </div>

                {/* Visit Profile Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 shadow-primary transition-smooth"
                  asChild
                >
                  <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
                    Visit {profile.name} Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platform Activity Summary */}
        <div className="mt-12 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-xl font-semibold text-center mb-6 text-foreground">
            Platform Activity Summary
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm text-muted-foreground mb-1">Most Active On</div>
              <div className="font-semibold text-foreground">LeetCode</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm text-muted-foreground mb-1">Highest Ranking</div>
              <div className="font-semibold text-foreground">Top 5% Global</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-sm text-muted-foreground mb-1">Best Category</div>
              <div className="font-semibold text-foreground">Algorithm Design</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm text-muted-foreground mb-1">Total Contributions</div>
              <div className="font-semibold text-foreground">1500+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;