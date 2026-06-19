import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, PhoneCall } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServicePageTemplate({ service }: { service: Service }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/85 to-blue-950/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 font-bold uppercase tracking-wider text-sm mb-4">
            HROX Dispatchers Service
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Overview
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {service.overview}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Built For Carriers</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                We support owner-operators and small fleets with dispatch communication,
                load coordination, paperwork organization, and professional follow-up.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-bold text-white hover:from-blue-700 hover:to-blue-600 transition-colors"
              >
                Talk to Dispatch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.sections.map((section) => (
              <div
                key={section.heading}
                className="bg-white rounded-2xl border border-blue-100 p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {section.heading}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Questions
              </span>
            </h2>
          </div>
          <div className="space-y-5">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PhoneCall className="w-12 h-12 text-blue-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready for better dispatch support?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
            Contact HROX Dispatchers to discuss your equipment, lanes, paperwork needs,
            and weekly dispatch goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white hover:from-blue-700 hover:to-blue-600 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
