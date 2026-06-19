"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What types of carriers do you dispatch?",
    answer: "We support owner-operators and small fleets across common equipment types including dry van, reefer, flatbed, box truck, hotshot, power-only, and eligible specialized lanes."
  },
  {
    question: "Do you negotiate rates with brokers?",
    answer: "Yes. We communicate with brokers on load details, rate expectations, appointments, and required paperwork while keeping the carrier involved in final load decisions."
  },
  {
    question: "Do you guarantee weekly revenue?",
    answer: "No dispatch company can responsibly guarantee revenue because freight markets change. We focus on strong load search, clear communication, and smart lane planning."
  },
  {
    question: "Can you help with paperwork?",
    answer: "Yes. We help organize rate confirmations, bills of lading, proof of delivery, accessorial notes, and other dispatch-related documents."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We support trucking work across retail, manufacturing, healthcare, automotive, food and beverage, warehouse distribution, and port or intermodal-adjacent operations."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq-section"  className="py-24 bg-gradient-to-br from-blue-200/50 via-white to-blue-100/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl z-0" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Questions
            </span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-900 pr-8">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${openIndex === idx ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'bg-blue-50 text-blue-600'}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed font-medium border-t border-slate-50 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
