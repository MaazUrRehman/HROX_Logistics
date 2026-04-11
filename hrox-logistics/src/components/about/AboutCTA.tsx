import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-16 bg-white shrink-0">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">See What We Can Do For You</h2>
        <Link href="/services" className="inline-block bg-blue-900 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">
          Explore Our Services
        </Link>
      </div>
    </section>
  );
}
