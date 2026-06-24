"use client";

import { motion } from "framer-motion";
import { Truck, FileText, Clock, MessageSquare } from "lucide-react";

export default function DispatcherKnowledge() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(4,148,104,0.15),_transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#06b57a] uppercase tracking-[0.35em] text-xs font-semibold"
          >
            Dispatch Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-4"
          >
            Smart Dispatching That Keeps Your Fleet Profitable
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            Our experienced dispatch team works around the clock to secure quality loads, 
            negotiate the best rates, and provide reliable support every step of the journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Truck,
              title: "24/7 Load Sourcing",
              text: "We work tirelessly to find profitable freight opportunities while reducing downtime for owner-operators and trucking companies."
            },
            {
              icon: Clock,
              title: "Real-Time Updates",
              text: "Timely pick-up and delivery communication, appointment confirmations, and active load tracking to keep you informed."
            },
            {
              icon: FileText,
              title: "Rate Negotiation & Paperwork",
              text: "Transparent load confirmations, accessorial notes, and dispatch documentation so you know exactly what to expect."
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-xl hover:shadow-2xl hover:border-[#049468]/40 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#049468] to-[#06b57a] rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}