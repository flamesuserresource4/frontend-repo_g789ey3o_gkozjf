export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.08),transparent_60%)]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Survive. Thrive. Conquer.
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A modern, curated knowledge base for World of Warcraft Classic Hardcore. Learn the safest classes and races, master leveling routes, and adopt habits that keep your character alive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#survival" className="px-5 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">Start with Survival</a>
              <a href="#classes" className="px-5 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white hover:bg-slate-800 transition-colors">Explore Classes</a>
            </div>
            <p className="mt-4 text-sm text-slate-400">No spoilers, no fluff — just practical Hardcore wisdom.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop" alt="Dark fantasy landscape" className="w-full h-full object-cover opacity-70"/>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-900/80 border border-white/10 rounded-xl p-4 backdrop-blur shadow-xl">
              <p className="text-xs text-slate-300">Tip: Disable risky addons, bind a panic macro, and always have a hearthstone plan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
