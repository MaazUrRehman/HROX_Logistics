"use client";

import { motion } from "framer-motion";

export default function ServicesHeader() {
  return (
    <section className="bg-blue-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-white mb-6"
        >
          Our <span className="text-orange-500">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-100 max-w-3xl mx-auto"
        >
          Comprehensive logistics solutions designed to scale with your business. From local transport to global shipping, we've got you covered.
        </motion.p>
      </div>
    </section>
  );
}
