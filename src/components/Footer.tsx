

"use client";

import Link from "next/link";
import { Truck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/#faq-section" },
  ];

  const services = [
    "Road Freight",
    "Ocean Freight",
    "Air Transport",
    "Warehousing",
    "Supply Chain",
    "Last Mile Delivery",
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link href="/" className="flex items-center gap-2 group inline-block">

              <span className="font-bold text-3xl text-white tracking-tight">
                HROX <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Logistics</span>
              </span>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Delivering excellence across the globe with precision and care. As a trusted leader in logistics and supply chain management, we provide reliable, fast, and secure solutions tailored to meet your unique business needs. </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-25 h-0.5 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
              Our Services
              <div className="absolute -bottom-2 left-0 w-28 h-0.5 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-blue-500 rounded-full" />
            </h3>
            <ul className="space-y-4 ">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 transition-colors group-hover:text-blue-400" />
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                  1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <Phone className="h-5 w-5 text-blue-500 shrink-0 transition-colors group-hover:text-blue-400" />
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                  +1 (555) 123-4567
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <Mail className="h-5 w-5 text-blue-500 shrink-0 transition-colors group-hover:text-blue-400" />
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
                  hroxlogistics@gmail.com
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-800/50 justify-center mt-16 pt-8 text-center text-slate-300 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>&copy; {new Date().getFullYear()} HROX Logistics. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}