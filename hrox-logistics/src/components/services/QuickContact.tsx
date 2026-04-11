export default function QuickContact() {
  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mb-20 -ml-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Need a custom logistics plan?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
          Our experts are ready to analyze your supply chain and provide tailored solutions to lower costs and improve efficiency.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform transform hover:scale-105 shadow-xl">
          Contact Our Experts
        </button>
      </div>
    </section>
  );
}
