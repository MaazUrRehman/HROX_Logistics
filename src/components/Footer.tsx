import Link from "next/link";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                HROX <span className="text-orange-500">Logistics</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Delivering excellence across the globe. Reliable, fast, and secure logistics solutions tailored to your business needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-semibold">FB</a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-semibold">TW</a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-semibold">IN</a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition-colors font-semibold">IG</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Track Shipment", "Contact", "FAQ"].map((item, idx) => (
                <li key={idx}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {["Road Freight", "Ocean Freight", "Air Transport", "Warehousing", "Supply Chain", "Last Mile Delivery"].map((item, idx) => (
                <li key={idx}>
                  <Link href="/services" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                <span>123 Logistics Ave, Business Bay,<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-orange-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-orange-500 shrink-0" />
                <span>info@hroxlogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} HROX Logistics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
