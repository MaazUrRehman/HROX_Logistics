import type { Metadata } from "next";
import { Clock, Headphones, Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact HROX Dispatchers | Truck Dispatch Support",
  description:
    "Contact HROX Dispatchers for professional truck dispatching support, carrier communication, paperwork coordination, and dispatch assistance.",
};

export default function ContactPage() {
  const contactDetails = [
    { icon: Mail, label: "Email", value: "hroxdispatchers@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: Clock, label: "Business Hours", value: "Monday to Friday, 8:00 AM - 6:00 PM EST" },
    { icon: MapPin, label: "Location", value: "1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-blue-950/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 font-bold uppercase tracking-wider text-sm mb-4">
            Contact HROX Dispatchers
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Dispatch support for carriers that need clear communication.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl">
            HROX Dispatchers supports owner-operators and small fleets with load
            coordination, broker communication, document follow-up, and active-load support.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-2xl">
              <Truck className="w-12 h-12 text-blue-300 mb-6" />
              <h2 className="text-3xl font-extrabold mb-4">HROX Dispatchers</h2>
              <p className="text-blue-100 leading-relaxed">
                We are a professional truck dispatching service helping carriers stay
                organized, find suitable freight opportunities, communicate with brokers,
                manage load paperwork, and keep dispatch operations moving with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: ShieldCheck,
                title: "Why Contact Us",
                text: "Speak with a dispatch team that understands carrier paperwork, load communication, route planning, and broker expectations.",
              },
              {
                icon: Headphones,
                title: "Customer Support",
                text: "For billing, service questions, onboarding, or documentation concerns, our support team provides clear next steps.",
              },
              {
                icon: Truck,
                title: "Dispatch Support",
                text: "For active carrier support, we help coordinate load details, status updates, appointments, and proof-of-delivery follow-up.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-blue-50/50 p-8">
                <item.icon className="w-9 h-9 text-blue-600 mb-5" />
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
