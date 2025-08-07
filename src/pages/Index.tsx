import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import BlogsSection from "@/components/BlogsSection";
import ServicesSection from "@/components/ServicesSection";
import ProfilesSection from "@/components/ProfilesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <OpenSourceSection />
        <BlogsSection />
        <ServicesSection />
        <ProfilesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
