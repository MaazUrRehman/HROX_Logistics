import type { policies } from "@/data/policies";

type Policy = (typeof policies)[keyof typeof policies];

export default function PolicyPageTemplate({ policy }: { policy: Policy }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-300 font-bold uppercase tracking-wider text-sm mb-4">
            HROX Dispatchers
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {policy.title}
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-3xl">
            {policy.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {policy.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-2xl border border-blue-100 bg-white p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                <p className="text-slate-600 leading-relaxed font-medium">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-blue-100">
            <p className="leading-relaxed">
              For questions about this policy, contact HROX Dispatchers at
              {" "}hroxdispatchers@gmail.com or +1 (555) 123-4567.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
