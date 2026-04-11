"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award } from "lucide-react";

export default function CoreValues() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide our everyday operations and strategic decisions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Target, title: "Precision", desc: "Meticulous planning ensuring every detail is executed flawlessly." },
            { icon: Lightbulb, title: "Innovation", desc: "Leveraging the latest tech to optimize routes and tracking." },
            { icon: Users, title: "Partnership", desc: "We act as an extension of your team, not just a service provider." },
            { icon: Award, title: "Excellence", desc: "Committed to delivering the highest standards in the industry." },
          ].map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-500">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
