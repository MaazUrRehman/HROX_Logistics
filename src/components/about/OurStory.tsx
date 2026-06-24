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
              <p className="text-gray-400 leading-relaxed text-md group-hover:text-gray-300 transition-colors">
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
              <p className="text-gray-400 leading-relaxed text-md group-hover:text-gray-300 transition-colors">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] group">
              <img 
                src="data:image/jpeg;base64,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" 
                alt="Truck dispatch team" 
                className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-110"
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