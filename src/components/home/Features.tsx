"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Clock } from "lucide-react";

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
            { icon: Globe2, title: "Nationwide Lanes", desc: "Support for carriers running regional, long-haul, port, warehouse, and specialized trucking lanes." },
            { icon: ShieldCheck, title: "Professional Paperwork", desc: "Organized rate confirmations, POD follow-up, accessorial notes, and dispatch documentation." },
            { icon: Clock, title: "Responsive Updates", desc: "Clear communication for pickup windows, delivery appointments, check calls, and active-load changes." },
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
      </div>
    </section>
  );
}