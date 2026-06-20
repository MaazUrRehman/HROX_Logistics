"use client";

import { motion } from "framer-motion";
import { ShoppingCart, HeartPulse, Cpu, Car, Factory, Coffee } from "lucide-react";

export default function HomeIndustries() {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      desc: "Dispatch support for retail freight, appointment windows, and high-volume delivery schedules.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: HeartPulse,
      title: "Healthcare & Pharma",
      desc: "Clear coordination for temperature-sensitive and time-critical healthcare freight.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Cpu,
      title: "Tech & Electronics",
      desc: "Expedited and high-value load communication for sensitive technology freight.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Car,
      title: "Automotive",
      desc: "Practical dispatch support for just-in-time parts and production-sensitive lanes.",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      desc: "Load coordination for industrial lanes, flatbed freight, and plant delivery schedules.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Coffee,
      title: "Food & Beverage",
      desc: "Reefer-friendly dispatch communication for pickup times, delivery windows, and temperature notes.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#049468]/10 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#049468]/10 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#049468]/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-6 mb-4"
            >
              Specialized For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                Your Sector
              </span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#049468]/10 transition-all duration-500"
            >
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>

              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 group-hover:via-black/30 transition-colors duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-auto group-hover:bg-[#049468] group-hover:border-[#049468] transition-all duration-500 transform group-hover:-translate-y-1">
                  <industry.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                
                <div className="transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#049468] transition-colors">{industry.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {industry.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent">
                  <div className="w-0 h-full bg-gradient-to-r from-[#049468] to-[#06b57a] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}