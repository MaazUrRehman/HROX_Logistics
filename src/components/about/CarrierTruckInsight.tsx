"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Clock, DollarSign } from "lucide-react";

export default function CarrierTruckInsight() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(4,148,104,0.12),_transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Truck Carrier Insights That Match Your Operation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            Our dispatch philosophy is built around the realities of trucking: safe lanes, balanced miles, and solid pay for your equipment.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            {
              icon: Truck,
              value: "48-State",
              label: "Truck Lane Coverage"
            },
            {
              icon: MapPin,
              value: "Broker",
              label: "Freight Partner Visibility"
            },
            {
              icon: Clock,
              value: "On-Time",
              label: "Pickup & Delivery Focus"
            },
            {
              icon: DollarSign,
              value: "Load $",
              label: "Revenue-Minded Dispatch"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="rounded-3xl border border-gray-800 bg-black/40 p-6 text-center shadow-lg hover:shadow-2xl hover:border-[#049468]/30 transition-all duration-500"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#049468] to-[#06b57a] mb-4 shadow-lg">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
