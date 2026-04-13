"use client";

import { motion } from "framer-motion";
import { TreePine, Scale, CheckSquare, Leaf, Shield, BadgeCheck } from "lucide-react";

export default function BusinessValues() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
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
            Our Business Ethics
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-3"
          >
            How We Conduct{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Business
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-2xl mx-auto"
          >
            Guiding principles that define our commitment to excellence and integrity
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: TreePine, 
              title: "Sustainability", 
              desc: "Committed to reducing our carbon footprint through eco-friendly fleet options and highly optimized routing algorithms to minimize empty miles.",
              gradient: "from-blue-500 to-cyan-500"
            },
            { 
              icon: Scale, 
              title: "Fair & Transparent", 
              desc: "We believe in honest pricing without hidden fees. Our clients have complete transparency over costs and operational methodologies.",
              gradient: "from-blue-500 to-cyan-500"
            },
            { 
              icon: BadgeCheck, 
              title: "Strict Compliance", 
              desc: "Adhering strictly to international trade regulations, labor laws, and safety standards to ensure liability-free transportation.",
              gradient: "from-blue-500 to-cyan-500"
            }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${val.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${val.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                <val.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{val.title}</h3>
              <p className="text-slate-400 leading-relaxed text-center group-hover:text-slate-300 transition-colors duration-300">
                {val.desc}
              </p>
              
              {/* Decorative Corner */}
              <div className={`absolute -top-px -right-px w-20 h-20 bg-gradient-to-br ${val.gradient} opacity-0 group-hover:opacity-20 rounded-tr-2xl transition-opacity duration-500 blur-xl`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}