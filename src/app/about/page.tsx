import AboutHeader from "@/components/about/AboutHeader";
import CompanyIntro from "@/components/about/CompanyIntro";
import DispatcherGuidance from "@/components/about/DispatcherGuidance";
import CarrierTruckInsight from "@/components/about/CarrierTruckInsight";
import BusinessValues from "@/components/about/BusinessValues";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import ExperienceExpertise from "@/components/about/ExperienceExpertise";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AboutHeader />
      <CompanyIntro />
      <DispatcherGuidance />
      <CoreValues />
      <CarrierTruckInsight />
      <OurStory />
      <BusinessValues />
      <ExperienceExpertise />
      {/* <AboutCTA /> */}
    </div>
  );
}
