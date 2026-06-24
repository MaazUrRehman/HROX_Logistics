"use client";

import { motion } from "framer-motion";
import { ClipboardList, PackageSearch, Truck, Box, FileCheck, TrendingUp, Shield } from "lucide-react";

const processSteps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Submit Your Information",
    desc: "Provide your basic details, truck information, and operating preferences so we can match you with the best freight opportunities."
  },
  {
    num: "02",
    icon: PackageSearch,
    title: "Sign Dispatch Agreement",
    desc: "Review and sign a simple agreement that allows our team to represent you and start finding profitable loads on your behalf."
  },
  {
    num: "03",
    icon: Box,
    title: "Complete Carrier Packet",
    desc: "Fill out the required carrier setup documents so we can onboard your business with brokers and load boards seamlessly."
  },
  {
    num: "04",
    icon: Truck,
    title: "Start Receiving Loads",
    desc: "Once everything is set up, our dispatch team begins booking loads for you so you can stay on the road and maximize your earnings."
  }
];

export default function HomeProcess() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-800 hidden lg:block -translate-y-1/2 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a] font-bold tracking-wider uppercase text-sm">Our Dispatch Process</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3">From Onboarding to Payment</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">We handle every step of your dispatch journey so you can focus on driving</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative text-center lg:text-left group"
            >
              <div className="w-20 h-20 mx-auto lg:mx-0 bg-black border-4 border-gray-900 rounded-full flex items-center justify-center text-[#049468] relative z-10 group-hover:bg-gradient-to-r group-hover:from-[#049468] group-hover:to-[#06b57a] group-hover:text-white transition-all duration-500 shadow-2xl shadow-black mb-8 transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(4,148,104,0.4)]">
                <step.icon className="w-8 h-8" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-800 text-[#049468] rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-black group-hover:bg-white group-hover:text-[#049468] transition-colors duration-500">
                  {step.num}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

     
      </div>
    </section>
  );
}