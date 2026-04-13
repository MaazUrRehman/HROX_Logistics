// "use client";

// import { motion } from "framer-motion";

// export default function OurStory() {
//   return (
//     <section className="py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
//               <p className="text-slate-600 leading-relaxed text-lg">
//                 Founded with a vision to simplify complex global trade networks, HROX Logistics has grown from a regional transporter to an international powerhouse. We recognized early on that conventional shipping wasn't enough; modern businesses needed transparency, speed, and agility.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">The Mission</h2>
//               <p className="text-slate-600 leading-relaxed text-lg">
//                 To provide secure, efficient, and technologically advanced logistics operations that empower businesses to scale locally and globally seamlessly. Your growth is our core objective.
//               </p>
//             </div>
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
//               alt="Logistics team" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-blue-900/10" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { Compass, Target, Globe, Award, ArrowRight, Clock, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-200/50 via-blue-100/80 to-blue-200/50 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-4"
          >
            More Than Just{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Logistics
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            A story of innovation, dedication, and global connectivity
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content - Journey & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Journey Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Journey</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-28 transition-all duration-300" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded with a vision to simplify complex global trade networks, HROX Logistics has grown 
                from a regional transporter to an international powerhouse. We recognized early on that 
                conventional shipping wasn't enough; modern businesses needed transparency, speed, and agility.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">The Mission</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-28 transition-all duration-300" />
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide secure, efficient, and technologically advanced logistics operations that 
                empower businesses to scale locally and globally seamlessly. Your growth is our core objective.
              </p>
            </div>

            
          </motion.div>
          
          {/* Right Content - Image with Overlay Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Logistics team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
              
              {/* Floating Badge on Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 font-semibold text-sm">Trusted by Industry Leaders</p>
                    <p className="text-slate-500 text-xs">ISO Certified & Customs Compliant</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>

       

      </div>
    </section>
  );
}