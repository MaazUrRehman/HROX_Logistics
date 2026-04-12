"use client";

import { Truck } from "lucide-react";

export default function StatsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Ready to streamline your supply chain?
          </h2>
          <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
            Join thousands of businesses that trust HROX Logistics for their shipping needs. Let us handle the heavy lifting while you scale.
          </p>
          {/* <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 inline-flex items-center gap-3">
            Request a Free Quote <Truck className="w-5 h-5" />
          </button> */}
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
          {[
            { number: "99.9%", label: "On-Time Rating" },
            { number: "150+", label: "Countries Served" },
            { number: "5M+", label: "Packages Delivered" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors text-center group">
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-slate-300 font-medium group-hover:text-white transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
