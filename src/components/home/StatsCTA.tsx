"use client";

import { Truck } from "lucide-react";

export default function StatsCTA() {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-orange-500 rounded-full blur-[120px] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to streamline your supply chain?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Join thousands of businesses that trust HROX Logistics for their shipping needs. Let us handle the heavy lifting while you scale.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-105 shadow-xl inline-flex items-center gap-3">
            Request a Free Quote <Truck className="w-5 h-5" />
          </button>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
          {[
            { number: "99.9%", label: "On-Time Rating" },
            { number: "150+", label: "Countries Served" },
            { number: "5M+", label: "Packages Delivered" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-orange-400 mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
