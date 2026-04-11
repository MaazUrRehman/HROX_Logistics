"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "25+", label: "Years in Business" },
  { num: "1,200+", label: "Certified Logistics Professionals" },
  { num: "300+", label: "Global Warehouses" },
  { num: "50", label: "Countries with Direct Operations" }
];

export default function ExperienceExpertise() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Experience & Expertise</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight block mb-4">
              A Legacy of Reliable Operations
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our team consists of industry veterans, certified customs brokers, and specialized freight handlers. Over the decades, we have aggregated deep domain expertise across automotive, electronics, pharmaceuticals, and retail logistics. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that expertise isn't just about moving boxes; it's about navigating international regulations, anticipating market bottlenecks, and solving problems before they impact your supply chain.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full grid grid-cols-2 gap-6"
          >
            {stats.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                <span className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">{item.num}</span>
                <span className="text-slate-500 font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
