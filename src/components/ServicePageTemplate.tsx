import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  PhoneCall, 
  Shield, 
  Clock, 
  Truck,
  FileCheck,
  Users,
  Star,
  Award,
  ThumbsUp
} from "lucide-react";
import type { Service } from "@/data/services";

const heroImages: Record<Service["slug"], string> = {
  "ocean-freight-solutions":
    "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?auto=format&fit=crop&w=2070&q=80",
  "air-freight-forwarding":
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2070&q=80",
  "rail-road-transport":
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=2070&q=80",
  "warehousing-fulfillment":
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2070&q=80",
  "supply-chain-consulting":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80",
  "customs-brokerage":
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2070&q=80",
};

export default function ServicePageTemplate({ service }: { service: Service }) {
  const heroImageUrl = heroImages[service.slug] ??
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Enhanced with better image visibility */}
      <section className="relative overflow-hidden bg-black py-24 md:py-32">
        {/* Background Image - More visible */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
        </div>
        
        {/* Animated green glow accents */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#049468]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <p className="text-[#049468] font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
            HROX Dispatchers Service
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            {service.subtitle}
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <Shield className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm font-medium">Trusted Dispatch</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <Clock className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <Truck className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm font-medium">Nationwide Coverage</span>
            </div>
          </div>
        </div>
        
        {/* Bottom wave with green tint */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
            <path fill="#000000" fillOpacity="1" d="M0,40L80,42.7C160,45,320,51,480,48C640,45,800,32,960,32C1120,32,1280,43,1360,48.7L1440,53L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* Overview Section - Enhanced */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#049468]/5 rounded-full blur-3xl -top-20 -right-20 w-96 h-96" />
        <div className="absolute inset-0 bg-[#049468]/5 rounded-full blur-3xl -bottom-20 -left-20 w-96 h-96" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#049468]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#049468] font-semibold uppercase tracking-wider text-sm">Overview</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                What We Offer With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                  {service.title}
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-medium">
                {service.overview}
              </p>
              
              {/* Key benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-gray-800 hover:border-[#049468]/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#049468]/20 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#049468]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Professional Service</p>
                    <p className="text-gray-400 text-xs">Industry expertise</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-gray-800 hover:border-[#049468]/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-[#049468]/20 rounded-lg flex items-center justify-center shrink-0">
                    <ThumbsUp className="w-5 h-5 text-[#049468]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Carrier Focused</p>
                    <p className="text-gray-400 text-xs">Your success matters</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm p-8 shadow-2xl border border-[#049468]/30 hover:border-[#049468]/60 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-[#049468]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#049468]/20 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Built For Carriers</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We support owner-operators and small fleets with dispatch communication,
                  load coordination, paperwork organization, and professional follow-up.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#049468] shrink-0" />
                    <span className="text-sm">Dedicated Account Manager</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#049468] shrink-0" />
                    <span className="text-sm">Real-time Load Updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#049468] shrink-0" />
                    <span className="text-sm">Paperwork Organization</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#049468] to-[#06b57a] px-6 py-3 font-bold text-white hover:from-[#038a5a] hover:to-[#049468] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#049468]/30 group-hover:scale-105 w-full justify-center"
                >
                  Talk to Dispatch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Sections Grid - Enhanced */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#049468]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#049468] font-semibold uppercase tracking-wider text-sm">Key Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Everything You Need For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                Success
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.sections.map((section, idx) => (
              <div
                key={section.heading}
                className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-[#049468]/40 p-8 shadow-lg hover:shadow-xl hover:shadow-[#049468]/10 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#049468]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#049468]/20 group-hover:scale-110 transition-transform duration-300">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-[#049468] transition-colors">
                    {section.heading}
                  </h2>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300 font-medium group/item">
                        <CheckCircle2 className="w-5 h-5 text-[#049468] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#049468]/5 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#049468]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#049468] font-semibold uppercase tracking-wider text-sm">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                Questions
              </span>
            </h2>
            <p className="text-gray-400 mt-4">Find answers to common questions about our dispatch services</p>
          </div>
          
          <div className="space-y-5">
            {service.faqs.map((faq, index) => (
              <div 
                key={faq.question} 
                className="rounded-2xl border border-gray-800 hover:border-[#049468]/30 bg-black/40 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#049468]/5 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#049468]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#049468]/20 transition-colors">
                    <HelpCircle className="w-5 h-5 text-[#049468]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#049468] font-bold text-sm">0{index + 1}</span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#049468] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed pl-6 border-l-2 border-[#049468]/30 pl-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#049468]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <Star className="w-4 h-4 text-[#049468] fill-[#049468]" />
              <span className="text-white text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <Award className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm">Professional Dispatch</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <ThumbsUp className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm">Carrier Focused</span>
            </div>
          </div>
          
          <div className="w-24 h-24 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#049468]/30 group-hover:scale-110 transition-transform duration-300">
            <PhoneCall className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready for better{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
              dispatch support?
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact HROX Dispatchers to discuss your equipment, lanes, paperwork needs,
            and weekly dispatch goals. Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#049468] to-[#06b57a] px-8 py-4 font-bold text-white hover:from-[#038a5a] hover:to-[#049468] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#049468]/30 hover:scale-105 text-lg"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 font-bold text-white hover:bg-white/20 transition-all duration-300 border border-gray-800 hover:border-[#049468]/30"
            >
              Learn More About Us
            </Link>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            No obligation. Free consultation. Expert dispatch support.
          </p>
        </div>
      </section>
    </div>
  );
}