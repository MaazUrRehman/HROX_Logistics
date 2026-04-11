"use client";

import { motion } from "framer-motion";
import { Ship, Plane, Truck, PackageCheck, Anchor, Map, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "Cost-effective international shipping for large volumes. We handle FCL and LCL shipments globally with complete visibility.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Plane,
    title: "Air Freight",
    desc: "When speed is paramount, our air freight solutions ensure your cargo reaches its destination exactly when needed.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Truck,
    title: "Road Transport",
    desc: "Reliable domestic and cross-border road freight services powered by a modern, fuel-efficient fleet.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: PackageCheck,
    title: "Warehousing & Storage",
    desc: "State-of-the-art secure facilities equipped with smart inventory systems to optimize your supply chain.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Map,
    title: "Supply Chain Consulting",
    desc: "Expert analysis and optimization of your logistics network to reduce costs and improve delivery times.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    icon: Anchor,
    title: "Customs Brokerage",
    desc: "Seamless border crossing with our dedicated team of customs experts handling all documentation and clearance.",
    image: "https://images.unsplash.com/photo-1541887309903-a17afce86e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {service.desc}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group/link"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
