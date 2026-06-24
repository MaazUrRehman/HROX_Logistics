"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Truck, Globe, Clock, Shield, Fuel, Wrench, DollarSign } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Elements with green glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#049468]/10 rounded-2xl z-0 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#049468]/5 rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#049468]/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#049468]/20">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKvlDq42YRuras8tQvzScqBkFSs85ao8PwQ&s" 
                alt="Truck dispatch operations" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight"
              >
                Dispatching With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                  Carrier Focus.
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-gray-300 leading-relaxed font-semibold"
              >
                HROX Dispatchers gives carriers dependable back-office dispatch support built around load coordination, rate negotiation, paperwork follow-up, and practical trucking operations.
              </motion.p>
            </div>
            
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4"
            >
              {[
                { icon: Globe, text: "Nationwide Carrier Lane Support covering all 48 states" },
                { icon: Clock, text: "Active Load Updates & Scheduling with real-time tracking" },
                { icon: Shield, text: "Paperwork & Compliance Awareness for DOT/FMCSA rules" },
                { icon: Truck, text: "Dedicated Account Management for each carrier" }
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.4 }}
                  className="flex items-center gap-3 text-gray-300 font-semibold group"
                >
                  <div className="bg-[#049468]/10 rounded-lg p-1 group-hover:bg-[#049468]/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#049468] shrink-0" />
                  </div>
                  <span className="group-hover:text-[#049468] transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Quick Industry Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { icon: Fuel, value: "8%", label: "Fuel Cost Savings" },
                { icon: Wrench, value: "12%", label: "Fleet Growth Rate" },
                { icon: DollarSign, value: "$2.85", label: "Avg Dry Van RPM" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-2 bg-black/30 rounded-lg border border-gray-800/30">
                  <stat.icon className="w-4 h-4 text-[#049468] mx-auto mb-1" />
                  <div className="text-sm font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4"
            >
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}