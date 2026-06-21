"use client";

import { motion } from "framer-motion";
import {
  Globe, 
  LineChart, 
  Users, 
  Shield, 
  Zap,
  Truck,
  Clock,
  Target,
  Sparkles,
} from "lucide-react";

const particles = [
  { x: 40, y: 120, duration: 7, delay: 0.2, left: "8%" },
  { x: 180, y: 420, duration: 9, delay: 1.1, left: "21%" },
  { x: 320, y: 260, duration: 6, delay: 2.4, left: "35%" },
  { x: 90, y: 780, duration: 8, delay: 0.8, left: "48%" },
  { x: 430, y: 560, duration: 10, delay: 3.1, left: "62%" },
  { x: 250, y: 180, duration: 7, delay: 1.7, left: "74%" },
  { x: 480, y: 860, duration: 9, delay: 2.8, left: "86%" },
  { x: 130, y: 640, duration: 6, delay: 4.0, left: "94%" },
];

export default function CompanyIntro() {
  const coreValues = [
    { icon: Globe, text: "Nationwide Lane Support", description: "Dispatch assistance across core U.S. freight markets" },
    { icon: LineChart, text: "Data-Driven Operations", description: "Rate, route, and weekly planning visibility" },
    { icon: Users, text: "Carrier-First Approach", description: "Dedicated support for owner-operators and fleets" },
    { icon: Shield, text: "Documentation Focus", description: "Organized dispatch records and paperwork follow-up" },
    { icon: Zap, text: "Rapid Response", description: "Active-load communication and issue escalation" },
    { icon: Target, text: "Revenue-Minded Planning", description: "Smarter load selection based on carrier goals" }
  ];

  const stats = [
    { value: "99.9%", label: "On-Time Delivery", icon: Clock, delay: 0.2 },
    { value: "24/7", label: "Support", icon: Zap, delay: 0.3 },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Elements with green glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#049468]/40 rounded-full"
            initial={{ 
              x: particle.x,
              y: particle.y,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100, -200],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
            style={{
              left: particle.left,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-6 mb-6 leading-tight"
          >
            Building Better{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a] inline-block"
            >
              Truck Dispatch Operations
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            At HROX Dispatchers, we operate where trucking discipline meets daily execution.
            Our team helps carriers match driver availability, route planning, broker communication,
            and delivery checkpoints with a professional dispatch process.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Detailed Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-2xl hover:border-[#049468]/30 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl"
              >
                <Truck className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To help carriers operate with confidence by combining practical dispatch
                experience, responsive communication, and organized paperwork support that
                keeps trucks moving and records clean.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:shadow-2xl hover:border-[#049468]/30 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-xl flex items-center justify-center mb-4 shadow-lg"
              >
                <LineChart className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To become a trusted dispatch partner for owner-operators and small fleets,
                recognized for honest communication, dependable coordination, and carrier-first
                service.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-800 hover:shadow-2xl hover:border-[#049468]/30 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-xl flex items-center justify-center mb-4 shadow-lg"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
              <p className="text-gray-400 leading-relaxed">
                We bring structure to dispatch work through careful load review, broker follow-up,
                appointment awareness, and documentation support. Every carrier relationship is
                handled with clarity, transparency, and practical trucking know-how.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Core Values Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg border border-gray-800"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay, type: "spring" }}
                    className="w-10 h-10 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-lg flex items-center justify-center mx-auto mb-3"
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay + 0.1 }}
                    className="text-2xl font-bold text-[#049468]"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Values Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-2xl p-8 text-white shadow-2xl"
            >
              <motion.div
                initial={{ rotate: -10, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Our Core Values</h3>
              </motion.div>
              <p className="text-[#e8f5f0] mb-6">
                The principles that guide everything we do, every day.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {coreValues.map((value, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (idx * 0.08), duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <value.icon className="w-5 h-5 text-[#b8e6d8] shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-[#e8f5f0] transition-colors">
                          {value.text}
                        </h4>
                        <p className="text-sm text-[#e8f5f0]">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}