"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Globe, 
  LineChart, 
  Users, 
  Shield, 
  Zap,
  Truck,
  Clock,
  Target,
  Sparkles,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function CompanyIntro() {
  const coreValues = [
    { icon: Globe, text: "Global Network Coverage", description: "Strategic partnerships across 50+ countries" },
    { icon: LineChart, text: "Data-Driven Operations", description: "Real-time analytics & predictive logistics" },
    { icon: Users, text: "Client-First Approach", description: "Dedicated account management teams" },
    { icon: Shield, text: "Secure & Compliant", description: "ISO-certified & fully insured shipments" },
    { icon: Zap, text: "Rapid Response", description: "24/7 emergency handling & support" },
    { icon: Target, text: "Sustainable Solutions", description: "Eco-friendly transport alternatives" }
  ];

  const stats = [
    { value: "99.9%", label: "On-Time Delivery", icon: Clock, delay: 0.2 },
    { value: "24/7", label: "Support", icon: Zap, delay: 0.3 },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements with Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * 1000,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100, -200],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section with Enhanced Animation */}
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
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-6 leading-tight"
          >
            Building the Infrastructure{" "}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 inline-block"
            >
              of Tomorrow's Trade
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            At HROX Logistics, we operate at the intersection of technology and transport. 
            Our vast infrastructure is designed not just to move cargo, but to optimize 
            global supply chains from the ground up.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Detailed Description with Hover Effects */}
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
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl"
              >
                <Truck className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To revolutionize global logistics by combining cutting-edge technology with 
                human expertise, delivering seamless, sustainable, and scalable supply chain 
                solutions that empower businesses to thrive in an interconnected world.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
              >
                <LineChart className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the world's most trusted logistics partner, recognized for our 
                unwavering commitment to innovation, reliability, and customer success, 
                while building a more connected and sustainable future for global trade.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 group"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
              >
                <Shield className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment</h3>
              <p className="text-slate-600 leading-relaxed">
                We leverage data analytics, strategic hub placements, and an unwavering 
                dedication to customer satisfaction to stand out as industry leaders. 
                Every shipment, every route, every solution is crafted with precision, 
                transparency, and a relentless pursuit of excellence.
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
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-blue-100"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay, type: "spring" }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3"
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay + 0.1 }}
                    className="text-2xl font-bold text-blue-600"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
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
              className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-8 text-white shadow-2xl"
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
              <p className="text-blue-100 mb-6">
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
                        <value.icon className="w-5 h-5 text-blue-200 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                          {value.text}
                        </h4>
                        <p className="text-sm text-blue-100">{value.description}</p>
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