"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award, Zap, Shield, Heart, Star } from "lucide-react";

export default function CoreValues() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold tracking-wider uppercase text-sm"
          >
            What Drives Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-3"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Core Values
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            The principles that guide our everyday operations and strategic decisions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: Target, 
              title: "Precision", 
              desc: "Meticulous planning ensuring every detail is executed flawlessly.",
              gradient: "from-blue-500 to-cyan-500",
              delay: 0
            },
            { 
              icon: Lightbulb, 
              title: "Innovation", 
              desc: "Leveraging the latest tech to optimize routes and tracking.",
              gradient: "from-indigo-500 to-blue-500",
              delay: 0.1
            },
            { 
              icon: Users, 
              title: "Partnership", 
              desc: "We act as an extension of your team, not just a service provider.",
              gradient: "from-blue-500 to-blue-600",
              delay: 0.2
            },
            { 
              icon: Award, 
              title: "Excellence", 
              desc: "Committed to delivering the highest standards in the industry.",
              gradient: "from-cyan-500 to-blue-500",
              delay: 0.3
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: value.delay }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 text-center"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon Container - Matching HomeProcess Style */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                {/* Decorative Number Badge - Like HomeProcess */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-700 text-blue-300 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-slate-800 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                {value.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {value.desc}
              </p>
              
              {/* Decorative Corner Elements */}
              <div className={`absolute -top-px -right-px w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 rounded-tr-2xl transition-opacity duration-500 blur-xl`} />
              <div className={`absolute -bottom-px -left-px w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 rounded-bl-2xl transition-opacity duration-500 blur-xl`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-16"
        />
      </div>
    </section>
  );
}