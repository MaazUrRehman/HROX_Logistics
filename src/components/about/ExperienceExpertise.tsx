"use client";

import { motion } from "framer-motion";
import { Award, Shield, CheckCircle2, ArrowRight, Star, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function ExperienceExpertise() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      
      {/* Animated Background Elements with green glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-20 w-80 h-80 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#049468]/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content - Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm text-[#049468] px-4 py-2 rounded-full text-sm font-semibold border border-[#049468]/30"
            >
              <Award className="w-4 h-4" />
              Why Trust Us
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Your Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#049468] to-[#06b57a]">
                Dispatch Partner
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              We support trucking carriers with reliable communication, practical load coordination,
              and organized paperwork follow-up. Our role is to help drivers and fleet owners stay
              focused while dispatch details are handled professionally.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 pt-4"
            >
              {[
                { icon: Shield, text: "Carrier Documentation Support", color: "from-[#049468] to-[#06b57a]" },
                { icon: ThumbsUp, text: "Responsive Dispatch Communication", color: "from-[#049468] to-[#06b57a]" },
                { icon: CheckCircle2, text: "Broker and Appointment Coordination", color: "from-[#049468] to-[#06b57a]" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-6"
            >
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#049468] to-[#06b57a] hover:from-[#038a5a] hover:to-[#049468] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#049468]/30"
              >
                Start Trusted Partnership
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid for Trust */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <motion.div 
                className="col-span-2 rounded-2xl overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Professional truck dispatch team"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">Dispatch Team at Work</p>
                  <p className="text-gray-400 text-xs">Carrier support and load coordination</p>
                </div>
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div 
                className="rounded-2xl overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern warehouse facility"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-xs">Warehouse Freight</p>
                  <p className="text-gray-400 text-xs">Appointment coordination</p>
                </div>
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div 
                className="rounded-2xl overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Dispatch operations"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-semibold text-xs">48-State Coverage</p>
                  <p className="text-gray-400 text-xs">Carrier dispatch support</p>
                </div>
              </motion.div>
            </div>

            {/* Trust Score Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-gradient-to-r from-[#049468]/20 to-[#06b57a]/20 backdrop-blur-sm rounded-2xl p-4 border border-[#049468]/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-[#049468] text-[#049468]" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.9/5 Rating</span>
                </div>
                <div className="text-gray-400 text-sm">
                  Carrier-focused service standards
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}