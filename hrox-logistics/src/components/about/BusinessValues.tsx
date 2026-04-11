"use client";

import { motion } from "framer-motion";
import { TreePine, Scale, CheckSquare } from "lucide-react";

export default function BusinessValues() {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-sm block mb-4">Our Business Ethics</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">How We Conduct Business</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              icon: TreePine, 
              title: "Sustainability", 
              desc: "Committed to reducing our carbon footprint through eco-friendly fleet options and highly optimized routing algorithms to minimize empty miles." 
            },
            { 
              icon: Scale, 
              title: "Fair & Transparent", 
              desc: "We believe in honest pricing without hidden fees. Our clients have complete transparency over costs and operational methodologies." 
            },
            { 
              icon: CheckSquare, 
              title: "Strict Compliance", 
              desc: "Adhering strictly to international trade regulations, labor laws, and safety standards to ensure liability-free transportation." 
            }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-slate-800 rounded-3xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <val.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
              <p className="text-slate-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
