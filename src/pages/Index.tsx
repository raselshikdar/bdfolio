import Navbar from "@/components/Navbar";
import AlponaDivider from "@/components/AlponaDivider";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <AlponaDivider />
      <AboutSection />
      <AlponaDivider />
      <TimelineSection />
      <AlponaDivider />
      <SkillsSection />
      <AlponaDivider />
      <ProjectsSection />
      <AlponaDivider />
      <StatsSection />
      <AlponaDivider />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
);

export default Index;
