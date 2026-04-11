"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded with a vision to simplify complex global trade networks, HROX Logistics has grown from a regional transporter to an international powerhouse. We recognized early on that conventional shipping wasn't enough; modern businesses needed transparency, speed, and agility.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">The Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide secure, efficient, and technologically advanced logistics operations that empower businesses to scale locally and globally seamlessly. Your growth is our core objective.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Logistics team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
