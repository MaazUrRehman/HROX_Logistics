import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import Features from "@/components/home/Features";
import HomeProcess from "@/components/home/HomeProcess";
import HomeIndustries from "@/components/home/HomeIndustries";
import StatsCTA from "@/components/home/StatsCTA";
import HomeFAQ from "@/components/home/HomeFAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HomeAbout />
      <Features />
      <HomeServices />
      <HomeProcess />
      <HomeIndustries />
      <StatsCTA />
      <HomeFAQ />
    </div>
  );
}
