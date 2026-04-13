// "use client";

// import { motion } from "framer-motion";
// import { Ship, Plane, Truck, PackageCheck, Anchor, Map, ArrowRight } from "lucide-react";

// export const detailedServices = [
//   {
//     icon: Ship,
//     title: "Ocean Freight Solutions",
//     subtitle: "Navigate the global waters with confidence.",
//     description: "Our Ocean Freight operations handle every aspect of mass shipping. Through extensive partnerships with major vessel operators, we secure optimal routing and pricing for Full Container Loads (FCL) and Less-than-Container Loads (LCL). Whether you're moving heavy industrial equipment or consumer goods, we provide port-to-port and door-to-door services complete with real-time digital tracking.",
//     bullets: ["FCL & LCL Management", "Temperature-Controlled Containers", "Port Drayage & Handling", "Marine Insurance"],
//     image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//   },
//   {
//     icon: Plane,
//     title: "Air Freight Forwarding",
//     subtitle: "Speed, security, and global reach for time-critical cargo.",
//     description: "When time is your most valuable asset, our air freight division steps in. We provide expedited, standard, and deferred air transit depending on urgency. We own established block-space agreements with top-tier airlines guaranteeing capacity even during peak seasons. Perfect for high-value tech, perishables, or urgent automotive parts.",
//     bullets: ["Next Flight Out (NFO)", "Charter Services", "Consolidation Facilities", "Door-to-Airport Transit"],
//     image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//   },
//   {
//     icon: Truck,
//     title: "Road & Rail Transport",
//     subtitle: "Connecting the dots across continents.",
//     description: "A robust intermodal and domestic transport network ensures that once your cargo hits land, it keeps moving. We deploy a modern fleet of eco-friendly trucks tailored for varying load requirements—from standard dry vans to flatbeds meant for oversized machinery. Together with our rail partners, we build resilient inland pipelines tailored to your distribution map.",
//     bullets: ["FTL & LTL Shipping", "Cross-Border Trucking", "Intermodal Rail Options", "Specialized Heavy Haul"],
//     image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//   },
//   {
//     icon: PackageCheck,
//     title: "Warehousing & Fulfillment",
//     subtitle: "Smart storage powering modern commerce.",
//     description: "Strategically located fulfillment centers optimize inventory proximity to your end consumers. Our warehouses are integrated with top-tier WMS (Warehouse Management Systems) giving you granular visibility over stock levels, order processing, and returns. From simple storage to complex pick-pack-ship operations, we adapt to your scalability.",
//     bullets: ["Cross-Docking", "Pick & Pack Services", "Inventory Optimization", "Reverse Logistics"],
//     image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//   },
//   {
//     icon: Map,
//     title: "Supply Chain Consulting",
//     subtitle: "Data-driven strategies to lower costs and boost speed.",
//     description: "We don't just execute operations; we engineer them. Our consulting wing meticulously audits your existing supply chain to identify bottlenecks and cost-leakages. We reconstruct pathways using predictive modeling, risk assessment, and network optimization to build a leaner, vastly more resilient infrastructure for your business.",
//     bullets: ["Network Optimization", "Risk Mitigation", "Supplier Audits", "Technology Integration"],
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//   },
//   {
//     icon: Anchor,
//     title: "Customs Brokerage",
//     subtitle: "Clearing hurdles, preventing delays.",
//     description: "Navigating international tariffs, compliance laws, and border security requirements is notoriously painful. Our dedicated teams of certified customs brokers handle the red tape. We ensure accurate classification, valuation, and pre-clearance logic so your goods move across borders seamlessly, avoiding costly penalties or demurrage.",
//     bullets: ["Tariff Classification", "Import/Export Filing", "Duty Drawback", "Compliance Training"],
//     image: "https://images.unsplash.com/photo-1541887309903-a17afce86e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
//   }
// ];

// export default function ServiceDetailedSections() {
//   return (
//     <section className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
//         {detailedServices.map((service, idx) => {
//           const isReversed = idx % 2 !== 0;
//           return (
//             <div 
//               key={idx} 
//               className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
//             >
//               <motion.div 
//                 initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//                 className="w-full lg:w-1/2 relative group"
//               >
//                 <div className={`absolute ${isReversed ? '-top-6 -right-6' : '-top-6 -left-6'} w-32 h-32 bg-orange-100 rounded-2xl z-0 transition-transform group-hover:scale-110`} />
//                 <div className={`absolute ${isReversed ? '-bottom-6 -left-6' : '-bottom-6 -right-6'} w-48 h-48 bg-blue-50 rounded-full z-0`} />
                
//                 <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 h-[400px] lg:h-[500px]">
//                   <img 
//                     src={service.image} 
//                     alt={service.title} 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   />
//                   <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-orange-500 shadow-xl">
//                     <service.icon className="w-8 h-8" />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div 
//                 initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="w-full lg:w-1/2 space-y-6"
//               >
//                 <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">
//                   {service.subtitle}
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
//                   {service.title}
//                 </h2>
//                 <p className="text-lg text-slate-600 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <ul className="space-y-3 pt-4 border-t border-slate-100">
//                   {service.bullets.map((bullet, bIdx) => (
//                     <li key={bIdx} className="flex items-center gap-3 text-slate-700 font-medium">
//                       <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
//                       {bullet}
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="pt-6">
//                   <button className="flex items-center gap-2 text-slate-900 hover:text-orange-500 font-bold transition-colors group/btn">
//                     Discuss this service <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
























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
    image: "https://images.unsplash.com/photo-1541887309903-a17afce86e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
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
                  
                  {/* CTA Button */}
                  <div className="pt-6">
                    <Link 
                      href="/contact" 
                      className={`group inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center pt-12 border-t border-slate-800"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Logistics Solution?
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a tailored plan for your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}