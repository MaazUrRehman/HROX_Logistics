"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Truck, Globe, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-24 bg-gradient-to-r from-white via-blue-100/80 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      
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
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-2xl z-0 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/20 rounded-full blur-2xl" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Logistics Operations" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
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
                className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight"
              >
                Delivering Excellence{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  Across Borders.
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-slate-600 leading-relaxed font-semibold"
              >
                With decades of inherited operational experience, HROX Logistics transcends traditional freight forwarding. We are architects of global trade, bridging continents with efficiency, speed, and uncompromising reliability.
              </motion.p>
            </div>
            
            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4 "
            >
              {[
                { icon: Globe, text: "Global Network & Local Expertise" },
                { icon: Clock, text: "Advanced Cargo Tracking & Routing" },
                { icon: Shield, text: "Sustainable Shipping Practices" },
                { icon: Truck, text: "Dedicated Account Management" }
              ].map((item, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.4 }}
                  className="flex items-center gap-3 text-slate-700 font-semibold group"
                >
                  <div className="bg-blue-50 rounded-lg p-1 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  </div>
                  <span className="group-hover:text-blue-600 transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="pt-4"
            >
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
              >
                Discover Our Story 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}