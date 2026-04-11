"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-2xl z-0" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full z-0" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Logistics Operations" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
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
              <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">About HROX Logistics</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6 leading-tight">
                Delivering Excellence <br className="hidden lg:block"/> Across Borders.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                With decades of inherited operational experience, HROX Logistics transcends traditional freight forwarding. We are architects of global trade, bridging continents with efficiency, speed, and uncompromising reliability.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "Global Network & Local Expertise",
                "Advanced Cargo Tracking & Routing",
                "Sustainable Shipping Practices",
                "Dedicated Account Management"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-500 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg hover:shadow-orange-500/30"
              >
                Discover Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
