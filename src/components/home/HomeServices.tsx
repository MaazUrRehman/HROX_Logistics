"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, PackageCheck, Map, Anchor, CheckCircle2 } from "lucide-react";

const quickServices = [
  {
    icon: Ship,
    title: "Ocean Freight Solutions",
    subtitle: "Port, container, and drayage dispatch coordination.",
    bullets: ["Container Load Support", "Port Appointment Tracking", "Drayage Coordination", "Detention Documentation"],
    color: "from-[#049468] to-[#06b57a]"
  },
  {
    icon: Plane,
    title: "Air Freight Forwarding",
    subtitle: "Airport and expedited load support for time-critical lanes.",
    bullets: ["Expedited Load Dispatch", "Airport Pickup Updates", "Hotshot Coordination", "Urgent Broker Communication"],
    color: "from-[#049468] to-[#06b57a]"
  },
  {
    icon: Truck,
    title: "Rail & Road Transport",
    subtitle: "Over-the-road and intermodal-adjacent dispatch support.",
    bullets: ["FTL & LTL Dispatch", "Cross-Border Support", "Intermodal Updates", "Flatbed & Reefer Lanes"],
    color: "from-[#049468] to-[#06b57a]"
  },
  {
    icon: PackageCheck,
    title: "Warehousing & Fulfillment",
    subtitle: "Warehouse appointment and delivery coordination.",
    bullets: ["Dock Scheduling", "Receiver Communication", "POD Follow-Up", "Delay Documentation"],
    color: "from-[#049468] to-[#06b57a]"
  },
  {
    icon: Map,
    title: "Supply Chain Consulting",
    subtitle: "Carrier operations guidance to improve dispatch performance.",
    bullets: ["Lane Planning", "Cost Control", "Workflow Setup", "Revenue Visibility"],
    color: "from-[#049468] to-[#06b57a]"
  },
  {
    icon: Anchor,
    title: "Customs Brokerage",
    subtitle: "Cross-border documentation and broker instruction support.",
    bullets: ["Document Checklists", "Border Load Updates", "Compliance Awareness", "Broker Coordination"],
    color: "from-[#049468] to-[#06b57a]"
  }
];

export default function HomeServices() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-6 mb-4"
          >
            End-to-End{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
              Truck Dispatching Services
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Carrier-focused dispatch support tailored to your equipment, lanes, and weekly goals
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#049468]/10 transition-all duration-500 border border-gray-800"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px' }}>
                <div className="absolute inset-[2px] bg-black rounded-2xl" />
              </div>
              
              <div className="relative p-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#049468] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#049468] font-semibold text-sm mb-4">
                  {service.subtitle}
                </p>

                <div className="space-y-2.5 mb-6">
                  {service.bullets.map((bullet, bulletIdx) => (
                    <motion.div 
                      key={bulletIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + bulletIdx * 0.05 }}
                      className="flex items-center gap-2.5 group/bullet"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-[#049468] to-[#06b57a] flex items-center justify-center shrink-0"
                      >
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-gray-400 group-hover/bullet:text-white transition-colors duration-300 text-sm">
                        {bullet}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}