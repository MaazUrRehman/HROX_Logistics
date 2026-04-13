import AboutHeader from "@/components/about/AboutHeader";
import CompanyIntro from "@/components/about/CompanyIntro";
import BusinessValues from "@/components/about/BusinessValues";
import AboutCTA from "@/components/about/AboutCTA";
import CoreValues from "@/components/about/CoreValues";
import OurStory from "@/components/about/OurStory";
import ExperienceExpertise from "@/components/about/ExperienceExpertise";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AboutHeader />
      <CompanyIntro />
      <BusinessValues />
      <OurStory />
      <CoreValues />
      <ExperienceExpertise />
      <AboutCTA />
    </div>
  );
}
