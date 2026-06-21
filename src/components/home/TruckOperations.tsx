"use client";

import { motion } from "framer-motion";
import { Route, Layers, Shield, TrendingUp } from "lucide-react";

export default function TruckOperations() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(4,148,104,0.1),_transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Practical Truck Operations for Dispatch Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            Every dispatch decision is made with truck readiness, driver comfort, and load efficiency in mind.
            We support carriers with clear handoffs from broker to truck.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Route,
              title: "Route and Load Fit",
              text: "Evaluate truck type, drop points, and hours-of-service windows before assigning the load."
            },
            {
              icon: Layers,
              title: "Trailer & Equipment Match",
              text: "Keep trucks moving with the right trailer type, reefer settings, and secure load instructions."
            },
            {
              icon: Shield,
              title: "Safety & Compliance Support",
              text: "Dispatch with confidence using documented load details, DOT deadlines, and carrier safety checks."
            },
            {
              icon: TrendingUp,
              title: "Revenue-Driven Dispatch",
              text: "Prioritize lanes that protect truck miles, maximize payout, and keep carrier cashflow strong."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08 }}
              className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 shadow-xl hover:shadow-2xl hover:border-[#049468]/30 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-3xl bg-gradient-to-br from-[#049468] to-[#06b57a] mb-5 shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
