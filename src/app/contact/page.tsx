import type { Metadata } from "next";
import { Clock, Headphones, Mail, MapPin, Phone, ShieldCheck, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact HROX Dispatchers | Truck Dispatch Support",
  description:
    "Contact HROX Dispatchers for professional truck dispatching support, carrier communication, paperwork coordination, and dispatch assistance.",
};

export default function ContactPage() {
  const contactDetails = [
    { icon: Mail, label: "Email", value: "hroxdispatchers@gmail.com", href: "mailto:hroxdispatchers@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: Clock, label: "Business Hours", value: "24/7" },
    { icon: MapPin, label: "Location", value: "1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-28">
        {/* Background Image - More visible */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
        </div>
        
        {/* Animated green glow accents */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#049468]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#049468] font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
            Contact HROX Dispatchers
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Dispatch support for carriers that need{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
              clear communication.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            HROX Dispatchers supports owner-operators and small fleets with load
            coordination, broker communication, document follow-up, and active-load support.
          </p>
          
          
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full h-auto">
            <path fill="#000000" fillOpacity="1" d="M0,40L80,42.7C160,45,320,51,480,48C640,45,800,32,960,32C1120,32,1280,43,1360,48.7L1440,53L1440,60L1360,60C1280,60,1120,60,960,60C800,60,640,60,480,60C320,60,160,60,80,60L0,60Z" />
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            {/* Company Info Card */}
            <div className="rounded-2xl bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm p-8 text-white shadow-2xl border border-[#049468]/30 hover:border-[#049468]/60 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-[#049468]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#049468]/20 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold mb-4">HROX Dispatchers</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We are a professional truck dispatching service helping carriers stay
                  organized, find suitable freight opportunities, communicate with brokers,
                  manage load paperwork, and keep dispatch operations moving with confidence.
                </p>
                
                {/* Trust Indicators */}
                <div className="space-y-3 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#049468] shrink-0" />
                    <span className="text-sm">Professional Dispatch Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#049468] shrink-0" />
                    <span className="text-sm">Carrier-Focused Communication</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-[#049468] shrink-0" />
                    <span className="text-sm">Paperwork & Documentation Help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-2xl border border-gray-800 hover:border-[#049468]/40 bg-black/40 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl hover:shadow-[#049468]/10 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#049468]/20 to-[#06b57a]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-[#049468]" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.label}</h3>
                  {item.href ? (
                    <Link 
                      href={item.href}
                      className="text-gray-300 hover:text-[#049468] transition-colors leading-relaxed inline-block"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Support Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: ShieldCheck,
                title: "Why Contact Us",
                text: "Speak with a dispatch team that understands carrier paperwork, load communication, route planning, and broker expectations.",
              },
              {
                icon: Headphones,
                title: "Customer Support",
                text: "For billing, service questions, onboarding, or documentation concerns, our support team provides clear next steps.",
              },
              {
                icon: Truck,
                title: "Dispatch Support",
                text: "For active carrier support, we help coordinate load details, status updates, appointments, and proof-of-delivery follow-up.",
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-gray-800 hover:border-[#049468]/40 bg-black/40 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl hover:shadow-[#049468]/10 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#049468]/20 to-[#06b57a]/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-[#049468]" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#049468] transition-colors">{item.title}</h2>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#049468]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#049468]/30">
            <Mail className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to get started with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
              professional dispatch?
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Reach out to HROX Dispatchers today and let's discuss how we can support your
            trucking operation with reliable communication and organized dispatch services.
          </p>
          
          <p className="text-gray-500 text-sm mt-6">
            Free consultation. No obligation. Professional dispatch support.
          </p>
        </div>
      </section>
    </div>
  );
}