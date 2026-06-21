"use client";

import { motion } from "framer-motion";
import { FileText, CalendarDays, Command, ShieldCheck } from "lucide-react";

export default function DispatcherGuidance() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(4,148,104,0.15),_transparent_40%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#06b57a] uppercase tracking-[0.35em] text-xs font-semibold"
          >
            Dispatcher Guidance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white mt-4"
          >
            Truckload Dispatch Support for Carrier Teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed"
          >
            We provide dispatcher insight that helps owner-operators and fleet managers align truck availability,
            paperwork, and delivery windows with broker expectations.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Command,
              title: "Load Acceptance Coaching",
              text: "Use practical truck dispatch criteria to decide which loads improve revenue without adding risk."
            },
            {
              icon: CalendarDays,
              title: "Appointment Planning",
              text: "Schedule pickups and deliveries so drivers have clear windows and enough time for safe operations."
            },
            {
              icon: ShieldCheck,
              title: "Carrier Compliance",
              text: "Keep dispatcher records aligned with DOT and FMCSA requirements, including accessorial notes and BOL clarity."
            },
            {
              icon: FileText,
              title: "Documentation Transparency",
              text: "Share rate confirmations, invoice-ready notes, and brokerage details so every handoff is smooth."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.1 }}
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
