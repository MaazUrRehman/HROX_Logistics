"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Ship, Plane, Truck } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Animated Background Elements with green glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          See What We Can Do{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
            For You
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with a dispatch team that understands carriers, brokers, appointments,
          paperwork, and the urgency of keeping trucks loaded.
        </motion.p>

        {/* Features Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {[
            { text: "Free Consultation", icon: CheckCircle2 },
            { text: "Custom Solutions", icon: CheckCircle2 },
            { text: "No Obligation Quote", icon: TrendingUp }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 border border-[#049468]/30 shadow-sm"
            >
              <feature.icon className="w-4 h-4 text-[#049468]" />
              <span className="text-white text-sm font-medium">{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/services/rail-road-transport" 
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#049468] to-[#06b57a] hover:from-[#038a5a] hover:to-[#049468] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#049468]/30"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicator with Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-[#049468]/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-[#049468]" />
              <span className="text-sm">Port Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#049468]" />
              <span className="text-sm">Expedited Freight</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#049468]" />
              <span className="text-sm">Road Dispatch</span>
            </div>
            <div className="text-sm font-semibold text-white ml-0 sm:ml-4">
              Trusted dispatch support for American carriers
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}