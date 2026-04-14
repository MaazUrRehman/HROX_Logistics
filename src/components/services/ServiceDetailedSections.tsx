"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, PackageCheck, Anchor, Map, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

export const detailedServices = [
  {
    icon: Ship,
    title: "Ocean Freight Solutions",
    subtitle: "Navigate the global waters with confidence.",
    description: "Our Ocean Freight operations handle every aspect of mass shipping. Through extensive partnerships with major vessel operators, we secure optimal routing and pricing for Full Container Loads (FCL) and Less-than-Container Loads (LCL). Whether you're moving heavy industrial equipment or consumer goods, we provide port-to-port and door-to-door services complete with real-time digital tracking.",
    bullets: ["FCL & LCL Management", "Temperature-Controlled Containers", "Port Drayage & Handling", "Marine Insurance"],
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Plane,
    title: "Air Freight Forwarding",
    subtitle: "Speed, security, and global reach for time-critical cargo.",
    description: "When time is your most valuable asset, our air freight division steps in. We provide expedited, standard, and deferred air transit depending on urgency. We own established block-space agreements with top-tier airlines guaranteeing capacity even during peak seasons. Perfect for high-value tech, perishables, or urgent automotive parts.",
    bullets: ["Next Flight Out (NFO)", "Charter Services", "Consolidation Facilities", "Door-to-Airport Transit"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Truck,
    title: "Road & Rail Transport",
    subtitle: "Connecting the dots across continents.",
    description: "A robust intermodal and domestic transport network ensures that once your cargo hits land, it keeps moving. We deploy a modern fleet of eco-friendly trucks tailored for varying load requirements—from standard dry vans to flatbeds meant for oversized machinery. Together with our rail partners, we build resilient inland pipelines tailored to your distribution map.",
    bullets: ["FTL & LTL Shipping", "Cross-Border Trucking", "Intermodal Rail Options", "Specialized Heavy Haul"],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gradient: "from-blue-600 to-blue-500"
  },
  {
    icon: PackageCheck,
    title: "Warehousing & Fulfillment",
    subtitle: "Smart storage powering modern commerce.",
    description: "Strategically located fulfillment centers optimize inventory proximity to your end consumers. Our warehouses are integrated with top-tier WMS (Warehouse Management Systems) giving you granular visibility over stock levels, order processing, and returns. From simple storage to complex pick-pack-ship operations, we adapt to your scalability.",
    bullets: ["Cross-Docking", "Pick & Pack Services", "Inventory Optimization", "Reverse Logistics"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Map,
    title: "Supply Chain Consulting",
    subtitle: "Data-driven strategies to lower costs and boost speed.",
    description: "We don't just execute operations; we engineer them. Our consulting wing meticulously audits your existing supply chain to identify bottlenecks and cost-leakages. We reconstruct pathways using predictive modeling, risk assessment, and network optimization to build a leaner, vastly more resilient infrastructure for your business.",
    bullets: ["Network Optimization", "Risk Mitigation", "Supplier Audits", "Technology Integration"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Anchor,
    title: "Customs Brokerage",
    subtitle: "Clearing hurdles, preventing delays.",
    description: "Navigating international tariffs, compliance laws, and border security requirements is notoriously painful. Our dedicated teams of certified customs brokers handle the red tape. We ensure accurate classification, valuation, and pre-clearance logic so your goods move across borders seamlessly, avoiding costly penalties or demurrage.",
    bullets: ["Tariff Classification", "Import/Export Filing", "Duty Drawback", "Compliance Training"],
    image: "data:image/jpeg;base64,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",
    gradient: "from-sky-500 to-blue-500"
  }
];

export default function ServiceDetailedSections() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30 mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Comprehensive Logistics Solutions
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-6 mb-4"
          >
            End-to-End{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Service Portfolio
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto"
          >
            Comprehensive supply chain solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="space-y-32">
          {detailedServices.map((service, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  {/* Decorative Background Elements */}
                  <div className={`absolute ${isReversed ? '-top-6 -right-6' : '-top-6 -left-6'} w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl blur-2xl group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className={`absolute ${isReversed ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} w-48 h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl`} />
                  
                  {/* Image Container */}
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 h-[400px] lg:h-[500px] group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-6 left-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm group-hover:scale-110 transition-all duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Trust Badge on Image */}
                    <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm font-medium">Trusted Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <svg key={star} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                          <span className="text-white text-xs ml-1">4.9/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  {/* Subtitle Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                    {service.subtitle}
                  </div>
                  
                  {/* Title */}
                  <h2 className={`text-3xl md:text-4xl font-extrabold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.gradient} transition-all duration-300`}>
                    {service.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                    {service.bullets.map((bullet, bIdx) => (
                      <motion.div 
                        key={bIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (bIdx * 0.05) }}
                        className="flex items-center gap-3 group/bullet"
                      >
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shrink-0 group-hover/bullet:scale-110 transition-transform duration-300`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-300 group-hover/bullet:text-white transition-colors duration-300 font-medium">
                          {bullet}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}