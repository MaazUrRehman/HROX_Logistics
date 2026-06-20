"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { services } from "@/data/services";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = services.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.title,
}));

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Bar - Email and Phone */}
      <div
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md"
            : "bg-black/80 backdrop-blur-sm"
        } border-b border-[#049468]/30`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2">
            <div className="flex items-center gap-6">
              <a
                href="mailto:hroxdispatchers@gmail.com"
                className="flex items-center gap-2 hover:text-[#049468] transition-colors text-white font-semibold text-sm"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>hroxdispatchers@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-[#049468] transition-colors text-white font-semibold text-sm"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg shadow-[#049468]/10"
            : "bg-black/80 backdrop-blur-sm"
        } border-b border-[#049468]/30`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0 group">
              <motion.div className="relative">
                <div className="relative w-30 h-30">
                  <Image
                    src="/hrox.png"
                    alt="HROX Dispatchers Logo"
                    fill
                    sizes="120px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
                {/* Subtle green glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-[#049468] rounded-xl opacity-0 group-hover:opacity-20"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <span className={`${poppins.className} font-bold text-2xl tracking-tight text-white `}>
                HROX{" "}
                <span className="bg-gradient-to-r from-[#049468] to-[#06b57a] bg-clip-text text-transparent">
                  Dispatchers
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.slice(0, 2).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 mx-1 rounded-lg font-semibold text-base ${poppins.className} transition-all duration-300 ${
                        isActive
                          ? "text-[#049468]"
                          : "text-white hover:text-[#049468]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#049468] to-[#06b57a] rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  </Link>
                );
              })}

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setServicesOpen((open) => !open)}
                  className={`relative px-4 py-2 mx-1 rounded-lg font-semibold text-base ${poppins.className} transition-all duration-300 flex items-center gap-1 ${
                    pathname.startsWith("/services")
                      ? "text-[#049468]"
                      : "text-white hover:text-[#049468]"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  {pathname.startsWith("/services") && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#049468] to-[#06b57a] rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-[#049468]/30 bg-black/95 p-3 shadow-2xl shadow-[#049468]/10 backdrop-blur-md"
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                            pathname === service.href
                              ? "bg-[#049468]/20 text-[#049468]"
                              : "text-white hover:bg-[#049468]/20 hover:text-[#049468]"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 mx-1 rounded-lg font-semibold text-base ${poppins.className} transition-all duration-300 ${
                        isActive
                          ? "text-[#049468]"
                          : "text-white hover:text-[#049468]"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#049468] to-[#06b57a] rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-[#049468] transition-colors focus:outline-none p-2 rounded-lg hover:bg-[#049468]/10"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-black/95 backdrop-blur-md border-b border-[#049468]/30"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.slice(0, 2).map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "text-[#049468] bg-[#049468]/10"
                            : "text-white hover:text-[#049468] hover:bg-[#049468]/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <button
                    onClick={() => setServicesOpen((open) => !open)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      pathname.startsWith("/services")
                        ? "text-[#049468] bg-[#049468]/10"
                        : "text-white hover:text-[#049468] hover:bg-[#049468]/10"
                    }`}
                    aria-expanded={servicesOpen}
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-1 overflow-hidden"
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-lg px-6 py-2.5 text-sm font-medium ${
                              pathname === service.href
                                ? "bg-[#049468]/10 text-[#049468]"
                                : "text-white hover:bg-[#049468]/10 hover:text-[#049468]"
                            }`}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                {navLinks.slice(2).map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "text-[#049468] bg-[#049468]/10"
                            : "text-white hover:text-[#049468] hover:bg-[#049468]/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from hiding under fixed bars */}
      <div className="h-[92px]" />
    </div>
  );
}