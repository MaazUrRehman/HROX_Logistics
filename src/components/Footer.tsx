

// "use client";

// import Link from "next/link";
// import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { services } from "@/data/services";

// export default function Footer() {
//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name: "FAQs", href: "/#faq-section" },
//   ];

//   const policyLinks = [
//     { name: "Privacy Policy", href: "/privacy-policy" },
//     { name: "Refund Policy", href: "/refund-policy" },
//     { name: "Return Policy", href: "/return-policy" },
//     { name: "Cancellation Policy", href: "/cancellation-policy" },
//     { name: "Terms & Conditions", href: "/terms-and-conditions" },
//     { name: "Shipping & Delivery Policy", href: "/shipping-and-delivery-policy" },
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 relative overflow-hidden">
//       {/* Decorative background element */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-16 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="space-y-6"
//           >
//             <Link href="/" className="flex items-center gap-2 group inline-block">

//               <span className="font-bold text-3xl text-white tracking-tight">
//                 HROX <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Dispatchers</span>
//               </span>
//             </Link>
//             <p className="text-slate-300 leading-relaxed">
//               Professional truck dispatching support for owner-operators and small fleets.
//               We help carriers coordinate loads, communicate with brokers, organize paperwork,
//               and keep daily operations moving with confidence.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
//               Quick Links
//               <div className="absolute -bottom-2 left-0 w-25 h-0.5 bg-blue-500 rounded-full" />
//             </h3>
//             <ul className="space-y-3">
//               {quickLinks.map((item, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={item.href}
//                     className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300"
//                   >
//                     <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
//                     <span className="group-hover:translate-x-1 transition-transform duration-300">
//                       {item.name}
//                     </span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
//               Our Services
//               <div className="absolute -bottom-2 left-0 w-28 h-0.5 bg-blue-500 rounded-full" />
//             </h3>
//             <ul className="space-y-3">
//               {services.map((item, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={`/services/${item.slug}`}
//                     className="group flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-all duration-300"
//                   >
//                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
//               Contact Us
//               <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-blue-500 rounded-full" />
//             </h3>
//             <ul className="space-y-4 ">
//               <motion.li
//                 whileHover={{ x: 5 }}
//                 className="flex items-start gap-4 group"
//               >
//                 <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5 transition-colors group-hover:text-blue-400" />
//                 <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
//                   1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
//                 </span>
//               </motion.li>
//               <motion.li
//                 whileHover={{ x: 5 }}
//                 className="flex items-center gap-4 group"
//               >
//                 <Phone className="h-5 w-5 text-blue-500 shrink-0 transition-colors group-hover:text-blue-400" />
//                 <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
//                   +1 (555) 123-4567
//                 </span>
//               </motion.li>
//               <motion.li
//                 whileHover={{ x: 5 }}
//                 className="flex items-center gap-4 group"
//               >
//                 <Mail className="h-5 w-5 text-blue-500 shrink-0 transition-colors group-hover:text-blue-400" />
//                 <span className="text-slate-300 group-hover:text-blue-400 transition-colors">
//                   hroxdispatchers@gmail.com
//                 </span>
//               </motion.li>
//             </ul>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.35 }}
//           className="mt-6 border-t border-slate-800/50 pt-6"
//         >
//           <h3 className="text-white font-bold text-xl mb-4">Policies</h3>
//           <div className="flex flex-wrap gap-x-10 gap-y-4">
//             {policyLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="text-slate-300 hover:text-blue-400 transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </motion.div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="border-t border-slate-800/50 justify-center mt-8 pt-8 text-center text-slate-300 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
//         >
//           <p>&copy; {new Date().getFullYear()} HROX Dispatchers. All rights reserved.</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }









"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/#faq-section" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Return Policy", href: "/return-policy" },
    { name: "Cancellation Policy", href: "/cancellation-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Shipping & Delivery Policy", href: "/shipping-and-delivery-policy" },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative background element with green glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#049468]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#049468]/5 rounded-full blur-3xl pointer-events-none" />

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
                HROX <span className="bg-gradient-to-r from-[#049468] to-[#06b57a] bg-clip-text text-transparent">Dispatchers</span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Professional truck dispatching support for owner-operators and small fleets.
              We help carriers coordinate loads, communicate with brokers, organize paperwork,
              and keep daily operations moving with confidence.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-2xl mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-25 h-0.5 bg-[#049468] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-[#049468] transition-all duration-300"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#049468]" />
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
              <div className="absolute -bottom-2 left-0 w-28 h-0.5 bg-[#049468] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group flex items-center gap-2 text-gray-300 hover:text-[#049468] transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#049468] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span>{item.title}</span>
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
              <div className="absolute -bottom-2 left-0 w-24 h-0.5 bg-[#049468] rounded-full" />
            </h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group"
              >
                <MapPin className="h-5 w-5 text-[#049468] shrink-0 mt-0.5 transition-colors group-hover:text-[#06b57a]" />
                <span className="text-gray-300 group-hover:text-[#049468] transition-colors">
                  1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <Phone className="h-5 w-5 text-[#049468] shrink-0 transition-colors group-hover:text-[#06b57a]" />
                <span className="text-gray-300 group-hover:text-[#049468] transition-colors">
                  516 500 0175
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <Mail className="h-5 w-5 text-[#049468] shrink-0 transition-colors group-hover:text-[#06b57a]" />
                <span className="text-gray-300 group-hover:text-[#049468] transition-colors">
                  hroxlogistics@gmail.com
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <Clock className="h-5 w-5 text-[#049468] shrink-0 transition-colors group-hover:text-[#06b57a]" />
                <span className="text-gray-300 group-hover:text-[#049468] transition-colors">
                  Business Hours: 24/7
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Policies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 border-t border-gray-800/50 pt-6"
        >
          <h3 className="text-white font-bold text-xl mb-4">Policies</h3>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {policyLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-[#049468] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800/50 justify-center mt-8 pt-8 text-center text-gray-300 text-sm flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>&copy; {new Date().getFullYear()} HROX Logistics LLC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}