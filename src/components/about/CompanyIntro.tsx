"use client";

import { motion } from "framer-motion";

export default function CompanyIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-[80px] z-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Company Introduction</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Building the Infrastructure of Tomorrow's Trade
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            At HROX Logistics, we operate at the intersection of technology and transport. Our vast infrastructure is designed not just to move cargo, but to optimize global supply chains from the ground up. We leverage data analytics, strategic hub placements, and an unwavering dedication to customer satisfaction to stand out as industry leaders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
