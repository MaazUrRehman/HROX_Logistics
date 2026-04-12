"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, PackageCheck, Map, Anchor, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const quickServices = [
  {
    icon: Ship,
    title: "Ocean Freight Solutions",
    subtitle: "Navigate the global waters with confidence.",
    bullets: ["FCL & LCL Management", "Temperature-Controlled Containers", "Port Drayage & Handling", "Marine Insurance"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Plane,
    title: "Air Freight Forwarding",
    subtitle: "Speed, security, and global reach for time-critical cargo.",
    bullets: ["Next Flight Out (NFO)", "Charter Services", "Consolidation Facilities", "Door-to-Airport Transit"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Truck,
    title: "Road & Rail Transport",
    subtitle: "Connecting the dots across continents.",
    bullets: ["FTL & LTL Shipping", "Cross-Border Trucking", "Intermodal Rail Options", "Specialized Heavy Haul"],
    color: "from-blue-600 to-blue-500"
  },
  {
    icon: PackageCheck,
    title: "Warehousing & Fulfillment",
    subtitle: "Smart storage powering modern commerce.",
    bullets: ["Cross-Docking", "Pick & Pack Services", "Inventory Optimization", "Reverse Logistics"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Map,
    title: "Supply Chain Consulting",
    subtitle: "Data-driven strategies to lower costs and boost speed.",
    bullets: ["Network Optimization", "Risk Mitigation", "Supplier Audits", "Technology Integration"],
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Anchor,
    title: "Customs Brokerage",
    subtitle: "Clearing hurdles, preventing delays.",
    bullets: ["Tariff Classification", "Import/Export Filing", "Duty Drawback", "Compliance Training"],
    color: "from-sky-500 to-blue-500"
  }
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-200/50 via-blue-100/80 to-blue-200/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-3xl"
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
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-4"
          >
            End-to-End{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Logistics Solutions
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Comprehensive supply chain solutions tailored to your business needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px' }}>
                <div className="absolute inset-[2px] bg-white rounded-2xl" />
              </div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon Container with Animation */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">
                  {service.subtitle}
                </p>

                {/* Bullet Points with Staggered Animation */}
                <div className="space-y-2.5 mb-6">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <motion.div 
                      key={bulletIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + bulletIdx * 0.05 }}
                      className="flex items-center gap-2.5 group/bullet"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shrink-0"
                      >
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-slate-600 group-hover/bullet:text-slate-900 transition-colors duration-300 text-sm">
                        {bullet}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>

              {/* Decorative Corner Element */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        

      </div>
    </section>
  );
}