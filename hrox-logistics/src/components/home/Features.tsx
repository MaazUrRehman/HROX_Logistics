"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Clock } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative z-30 -mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Why Choose HROX?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Industry-leading reliability with a modern, data-driven approach to global shipping and logistics.</p>
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
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-shadow border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
