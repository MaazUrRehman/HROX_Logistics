import type { policies } from "@/data/policies";
import Link from "next/link";
import { 
  ArrowRight, 
  Shield, 
  CheckCircle2, 
  Mail, 
  Phone,
  FileText,
  Scale,
  Lock
} from "lucide-react";

type Policy = (typeof policies)[keyof typeof policies];

export default function PolicyPageTemplate({ policy }: { policy: Policy }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        {/* Background Image - More visible */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
        </div>
        
        {/* Animated green glow accents */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#049468]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-xl flex items-center justify-center shadow-lg shadow-[#049468]/20">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-[#049468] font-bold uppercase tracking-wider text-sm">
                HROX Dispatchers Policy
              </p>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {policy.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            {policy.description}
          </p>
          
          {/* Quick info badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30">
              <Scale className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm font-medium">Legal & Compliance</span>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
            <path fill="#000000" fillOpacity="1" d="M0,40L80,42.7C160,45,320,51,480,48C640,45,800,32,960,32C1120,32,1280,43,1360,48.7L1440,53L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[#049468] font-semibold uppercase tracking-wider text-sm">Policy Details</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Understanding Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                Commitment
              </span>
            </h2>
          </div>
          
          {/* Policy Sections */}
          <div className="space-y-6">
            {policy.sections.map((section, index) => (
              <article
                key={index}
                className="rounded-2xl border border-gray-800 hover:border-[#049468]/40 bg-black/40 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-[#049468]/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#049468]/20 to-[#06b57a]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Lock className="w-6 h-6 text-[#049468]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#049468] font-bold text-sm">0{index + 1}</span>
                      <h2 className="text-2xl font-bold text-white group-hover:text-[#049468] transition-colors">
                        {section.heading}
                      </h2>
                    </div>
                    <div className="pl-6 border-l-2 border-[#049468]/30 pl-4">
                      <p className="text-gray-300 leading-relaxed font-medium">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black relative overflow-hidden border-t border-b border-gray-800">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">Need More Information?</h3>
              <p className="text-gray-400">We're here to help clarify our policies and procedures</p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#049468] to-[#06b57a] px-6 py-3 font-bold text-white hover:from-[#038a5a] hover:to-[#049468] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#049468]/30"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}