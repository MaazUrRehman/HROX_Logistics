import Hero from "@/components/home/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import Features from "@/components/home/Features";
import HomeProcess from "@/components/home/HomeProcess";
import StatsCTA from "@/components/home/StatsCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Features /> {/* Acting as Why Choose Us */}
      <HomeProcess />
      <StatsCTA />
    </div>
  );
}
