"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Clock, TrendingUp, Fuel, Award, Users, FileCheck, Truck } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-black relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Why Choose HROX?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Reliable dispatch support with a modern, carrier-focused approach to trucking operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Globe2, 
              title: "Nationwide Lanes", 
              desc: "Support for carriers running regional, long-haul, port, warehouse, and specialized trucking lanes. We cover all 48 continental states with local market knowledge." 
            },
            { 
              icon: ShieldCheck, 
              title: "Professional Paperwork", 
              desc: "Organized rate confirmations, POD follow-up, accessorial notes, and dispatch documentation. We handle all paperwork so you stay compliant with DOT regulations." 
            },
            { 
              icon: Clock, 
              title: "Responsive Updates", 
              desc: "Clear communication for pickup windows, delivery appointments, check calls, and active-load changes. Real-time tracking ensures you're never left wondering." 
            },
          ].map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              key={idx} 
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#049468]/20 hover:-translate-y-2 transition-all duration-500 border border-gray-800/50 hover:border-[#049468]/30 group"
            >
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 border border-gray-800 group-hover:bg-gradient-to-br group-hover:from-[#049468] group-hover:to-[#06b57a] group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:shadow-[#049468]/40">
                <feature.icon className="w-8 h-8 text-[#049468] group-hover:text-white transition-colors group-hover:scale-110 duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Added: Industry Statistics Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, value: "3.7M+", label: "Truck Drivers Nationwide" },
            { icon: Fuel, value: "$940B", label: "Annual Industry Revenue" },
            { icon: Award, value: "99.9%", label: "On-Time Delivery Rate" },
            { icon: Users, value: "195K", label: "Active Fleet Companies" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="text-center p-4 bg-black/30 rounded-xl border border-gray-800/30"
            >
              <stat.icon className="w-6 h-6 text-[#049468] mx-auto mb-2" />
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}