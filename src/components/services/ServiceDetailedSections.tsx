"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, PackageCheck, Anchor, Map, ArrowRight } from "lucide-react";

export const detailedServices = [
  {
    icon: Ship,
    title: "Ocean Freight Solutions",
    subtitle: "Navigate the global waters with confidence.",
    description: "Our Ocean Freight operations handle every aspect of mass shipping. Through extensive partnerships with major vessel operators, we secure optimal routing and pricing for Full Container Loads (FCL) and Less-than-Container Loads (LCL). Whether you're moving heavy industrial equipment or consumer goods, we provide port-to-port and door-to-door services complete with real-time digital tracking.",
    bullets: ["FCL & LCL Management", "Temperature-Controlled Containers", "Port Drayage & Handling", "Marine Insurance"],
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    icon: Plane,
    title: "Air Freight Forwarding",
    subtitle: "Speed, security, and global reach for time-critical cargo.",
    description: "When time is your most valuable asset, our air freight division steps in. We provide expedited, standard, and deferred air transit depending on urgency. We own established block-space agreements with top-tier airlines guaranteeing capacity even during peak seasons. Perfect for high-value tech, perishables, or urgent automotive parts.",
    bullets: ["Next Flight Out (NFO)", "Charter Services", "Consolidation Facilities", "Door-to-Airport Transit"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    icon: Truck,
    title: "Road & Rail Transport",
    subtitle: "Connecting the dots across continents.",
    description: "A robust intermodal and domestic transport network ensures that once your cargo hits land, it keeps moving. We deploy a modern fleet of eco-friendly trucks tailored for varying load requirements—from standard dry vans to flatbeds meant for oversized machinery. Together with our rail partners, we build resilient inland pipelines tailored to your distribution map.",
    bullets: ["FTL & LTL Shipping", "Cross-Border Trucking", "Intermodal Rail Options", "Specialized Heavy Haul"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    icon: PackageCheck,
    title: "Warehousing & Fulfillment",
    subtitle: "Smart storage powering modern commerce.",
    description: "Strategically located fulfillment centers optimize inventory proximity to your end consumers. Our warehouses are integrated with top-tier WMS (Warehouse Management Systems) giving you granular visibility over stock levels, order processing, and returns. From simple storage to complex pick-pack-ship operations, we adapt to your scalability.",
    bullets: ["Cross-Docking", "Pick & Pack Services", "Inventory Optimization", "Reverse Logistics"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    icon: Map,
    title: "Supply Chain Consulting",
    subtitle: "Data-driven strategies to lower costs and boost speed.",
    description: "We don't just execute operations; we engineer them. Our consulting wing meticulously audits your existing supply chain to identify bottlenecks and cost-leakages. We reconstruct pathways using predictive modeling, risk assessment, and network optimization to build a leaner, vastly more resilient infrastructure for your business.",
    bullets: ["Network Optimization", "Risk Mitigation", "Supplier Audits", "Technology Integration"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    icon: Anchor,
    title: "Customs Brokerage",
    subtitle: "Clearing hurdles, preventing delays.",
    description: "Navigating international tariffs, compliance laws, and border security requirements is notoriously painful. Our dedicated teams of certified customs brokers handle the red tape. We ensure accurate classification, valuation, and pre-clearance logic so your goods move across borders seamlessly, avoiding costly penalties or demurrage.",
    bullets: ["Tariff Classification", "Import/Export Filing", "Duty Drawback", "Compliance Training"],
    image: "https://images.unsplash.com/photo-1541887309903-a17afce86e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
];

export default function ServiceDetailedSections() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {detailedServices.map((service, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div 
              key={idx} 
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 relative group"
              >
                <div className={`absolute ${isReversed ? '-top-6 -right-6' : '-top-6 -left-6'} w-32 h-32 bg-orange-100 rounded-2xl z-0 transition-transform group-hover:scale-110`} />
                <div className={`absolute ${isReversed ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} w-48 h-48 bg-blue-50 rounded-full z-0`} />
                
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 h-[400px] lg:h-[500px]">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-orange-500 shadow-xl">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <button className="flex items-center gap-2 text-slate-900 hover:text-orange-500 font-bold transition-colors group/btn">
                    Discuss this service <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
