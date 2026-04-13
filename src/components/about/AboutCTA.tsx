
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, CheckCircle2, TrendingUp, Ship, Plane, Truck } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-200/50 via-blue-100/80 to-blue-200/50 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-3xl"
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
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
        >
          See What We Can Do{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
            For You
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of satisfied clients who trust us with their logistics needs. 
          Let's discuss how we can help your business grow.
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
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200 shadow-sm"
            >
              <feature.icon className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700 text-sm font-medium">{feature.text}</span>
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
              href="/services" 
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
          </motion.div>
        </motion.div>

        {/* Trust Indicator with Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-blue-200/50"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-500">
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Ocean Freight</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Air Freight</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Road Transport</span>
            </div>
            <div className="text-sm font-semibold text-slate-700 ml-0 sm:ml-4">
              Trusted by 500+ businesses worldwide
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}