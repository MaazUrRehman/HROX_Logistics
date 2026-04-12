"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you offer real-time tracking for international shipments?",
    answer: "Yes, our advanced digital tracking system provides 24/7 visibility for all freight types. You can monitor your cargo's progress, temperature conditions (for cold chain), and estimated arrival times through your dedicated client dashboard."
  },
  {
    question: "How do you handle customs clearance for complex regions?",
    answer: "We have certified customs brokers embedded globally. They pre-clear cargo, handle accurate tariff classification, and navigate localized compliance laws to prevent costly delays at borders or ports."
  },
  {
    question: "What is your policy on cargo insurance?",
    answer: "We offer comprehensive marine and freight insurance tailored to the value and risk profile of your goods. From localized damage to total loss prevention, your cargo is fully secured."
  },
  {
    question: "Can you accommodate scalable warehousing during peak seasons?",
    answer: "Absolutely. Our flexible warehousing agreements allow you to dynamically scale up storage space and fulfillment operations during your peak retail or manufacturing seasons without locking you into rigid long-term contracts."
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we operate globally across all sectors, we maintain specialized supply chain architectures for Retail & E-Commerce, Healthcare & Pharma, Automotive, Tech & Electronics, and Food & Beverage."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-200/50 via-white to-blue-100/30 relative overflow-hidden">
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
