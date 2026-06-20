"use client";

import { motion } from "framer-motion";
import { Target, Globe, Shield } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Animated Background Elements with green glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-80 h-80 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-6 mb-4"
          >
            More Than Just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
              Dispatching
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            A carrier-focused approach to communication, planning, and paperwork
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Journey & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Journey Card */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-[#049468]/10 transition-all duration-300 border border-gray-800 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Our Journey</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#049468] to-[#06b57a] rounded-full group-hover:w-28 transition-all duration-300" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                HROX Dispatchers was built to support carriers who need more than basic load searches.
                We focus on dependable communication, practical lane planning, broker follow-up, and
                paperwork organization so owner-operators and small fleets can run with more clarity.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-[#049468]/10 transition-all duration-300 border border-gray-800 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Mission</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#049468] to-[#06b57a] rounded-full group-hover:w-28 transition-all duration-300" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                To provide professional dispatch support that helps carriers reduce confusion, protect
                time, improve documentation, and make smarter decisions in a changing freight market.
              </p>
            </div>
          </motion.div>
          
          {/* Right Content - Image with Overlay Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Truck dispatch team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Floating Badge on Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-[#049468]/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-full flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">Trusted Carrier Support</p>
                    <p className="text-gray-400 text-xs">Dispatch, paperwork, and load coordination</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#049468]/20 to-[#06b57a]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-[#049468]/20 to-[#06b57a]/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}