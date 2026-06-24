"use client";

import { motion } from "framer-motion";

export default function CoreValues() {
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#049468]/5 rounded-full blur-3xl"
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
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a] font-bold tracking-wider uppercase text-sm"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
              Core Values
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            The principles that guide our dispatch support and carrier relationships
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
              title: "Precision", 
              desc: "Careful load review, appointment awareness, and paperwork attention on every dispatch.",
              gradient: "from-[#049468] to-[#06b57a]",
              delay: 0
            },
            { 
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
              title: "Innovation", 
              desc: "Using practical tools and market awareness to support better route and load decisions.",
              gradient: "from-[#049468] to-[#06b57a]",
              delay: 0.1
            },
            { 
              image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
              title: "Partnership", 
              desc: "We work as an extension of your carrier operation, not just another vendor.",
              gradient: "from-[#049468] to-[#06b57a]",
              delay: 0.2
            },
            { 
              image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
              title: "Excellence", 
              desc: "Committed to professional communication, clean records, and dependable follow-through.",
              gradient: "from-[#049468] to-[#06b57a]",
              delay: 0.3
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: value.delay }}
              className="group relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#049468]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#049468]/10"
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Image - Full width on top */}
              <div className="relative w-full h-56 overflow-hidden">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Bottom Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#049468] group-hover:to-[#06b57a] transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
              
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
          className="h-px bg-gradient-to-r from-transparent via-[#049468]/50 to-transparent mt-16"
        />
      </div>
    </section>
  );
}