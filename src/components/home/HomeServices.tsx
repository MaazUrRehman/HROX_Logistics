"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, ArrowRight } from "lucide-react";
import Link from "next/link";

const quickServices = [
  { icon: Ship, title: "Ocean Freight", desc: "Cost-effective, large-volume international shipping across all major sea routes." },
  { icon: Plane, title: "Air Freight", desc: "Rapid aerial logistics ensuring your time-critical cargo arrives on schedule." },
  { icon: Truck, title: "Road Transport", desc: "Comprehensive domestic network offering fast, secure, and flexible deliveries." }
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Our Primary Operations</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3">Tailored Logistics Solutions</h2>
          </div>
          <Link href="/services" className="shrink-0 group flex items-center gap-2 text-slate-900 font-bold hover:text-orange-500 transition-colors">
            View All Services
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-orange-100 transition-colors border border-slate-200 group-hover:border-transparent">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href="/services" className="text-orange-500 font-semibold group-hover:text-orange-600 flex items-center gap-2">
                Learn more <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
