import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary text-white">
      <Navigation />
      <HeroSection />
      <FeaturedProjects />
      <Skills />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
