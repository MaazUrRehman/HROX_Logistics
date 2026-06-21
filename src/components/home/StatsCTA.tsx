"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Users, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function StatsCTA() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#049468] rounded-full blur-[120px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[#049468] rounded-full blur-[100px] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Ready to improve your dispatch operation?
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Work with HROX Dispatchers for professional load coordination, broker communication, and paperwork support built around carrier success.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#049468] to-[#06b57a] hover:from-[#038a5a] hover:to-[#049468] text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#049468]/30"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
          {[
            { number: "99.9%", label: "On-Time Rating", icon: CheckCircle, detail: "Industry-leading punctuality" },
            { number: "48", label: "States Covered", icon: MapPin, detail: "Full continental US coverage" },
            { number: "200+", label: "Carriers Supported", icon: Users, detail: "Growing partner network" },
            { number: "15-25%", label: "Revenue Increase", icon: TrendingUp, detail: "Average carrier improvement" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-gray-800 hover:border-[#049468]/30 transition-colors text-center group"
            >
              <stat.icon className="w-5 h-5 text-[#049468] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a] mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">{stat.label}</div>
              <div className="text-[10px] text-gray-600 mt-1">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}