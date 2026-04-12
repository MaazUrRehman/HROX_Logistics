"use client";

import { motion } from "framer-motion";
import { ClipboardList, PackageSearch, Truck, Box } from "lucide-react";

const processSteps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Booking & Planning",
    desc: "We analyze your cargo requirements and chart out the most efficient logistical pathway."
  },
  {
    num: "02",
    icon: PackageSearch,
    title: "Processing & Customs",
    desc: "Our experts clear the bureaucratic hurdles, ensuring fully compliant cross-border transit."
  },
  {
    num: "03",
    icon: Truck,
    title: "Multi-modal Transport",
    desc: "Deploying a blend of air, ocean, and road freight to move your goods swiftly."
  },
  {
    num: "04",
    icon: Box,
    title: "Safe Delivery",
    desc: "Last-mile coordination guarantees your cargo reaches its final destination securely."
  }
];

export default function HomeProcess() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800 hidden lg:block -translate-y-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 font-bold tracking-wider uppercase text-sm">How We Operate</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3">A Seamless Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative text-center lg:text-left group"
            >
              {/* Step indicator node */}
              <div className="w-20 h-20 mx-auto lg:mx-0 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-blue-400 relative z-10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 group-hover:text-white transition-all duration-500 shadow-2xl shadow-slate-900 mb-8 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <step.icon className="w-8 h-8" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-700 text-blue-100 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-slate-900 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-500">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
