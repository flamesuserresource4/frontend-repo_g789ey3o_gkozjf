export default function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Resources</h2>
        <p className="text-slate-300 mt-2 mb-8">Trusted tools and communities for Hardcore players.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.classicwow.live/" target="_blank" className="rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900 transition-colors">
            <h3 className="text-white font-semibold">ClassicWoW.live</h3>
            <p className="text-sm text-slate-300">Leveling routes, class guides, and tools.</p>
          </a>
          <a href="https://www.wowhead.com/classic" target="_blank" className="rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900 transition-colors">
            <h3 className="text-white font-semibold">Wowhead Classic</h3>
            <p className="text-sm text-slate-300">Database, quests, items, and community tips.</p>
          </a>
          <a href="https://discord.gg/wowclassic" target="_blank" className="rounded-xl border border-white/10 bg-slate-900/60 p-5 hover:bg-slate-900 transition-colors">
            <h3 className="text-white font-semibold">Community Discords</h3>
            <p className="text-sm text-slate-300">Find Hardcore groups, mentors, and duo partners.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
