"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Clock } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-slate-900 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Why Choose HROX?</h2>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">Industry-leading reliability with a modern, data-driven approach to global shipping and logistics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe2, title: "Global Reach", desc: "Network spanning over 150 countries ensuring your cargo goes wherever it needs to." },
            { icon: ShieldCheck, title: "Secure & Insured", desc: "Top-tier cargo protection and comprehensive tracking for total peace of mind." },
            { icon: Clock, title: "On-Time Delivery", desc: "Optimized routing and precision planning guarantee timely arrivals, every time." },
          ].map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              key={idx} 
              className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-blue-900/40 hover:-translate-y-2 transition-all duration-500 border border-slate-700/50 hover:border-blue-500/30 group"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-400 group-hover:border-transparent transition-all duration-500 shadow-lg group-hover:shadow-blue-500/40">
                <feature.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors group-hover:scale-110 duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
