const classes = [
  { name: "Warrior", role: "Melee tank/DPS", safety: "Hard", notes: "High risk early, gear dependent. Rewarding with practice." },
  { name: "Paladin", role: "Hybrid tank/healer", safety: "Safer", notes: "Bubble, Lay on Hands, strong leveling sustain." },
  { name: "Hunter", role: "Ranged DPS", safety: "Safest", notes: "Pet tanking, Feign Death, traps — ideal for solo." },
  { name: "Rogue", role: "Melee DPS", safety: "Moderate", notes: "Stealth scouting, vanish saves lives, but squishy if caught." },
  { name: "Priest", role: "Healer", safety: "Safer", notes: "Power Word: Shield, strong wanding, fear safety net." },
  { name: "Mage", role: "Ranged DPS", safety: "Moderate", notes: "Kiting, Frost Nova, Blink — safe if you control the pull." },
  { name: "Warlock", role: "Ranged DPS", safety: "Safer", notes: "Voidwalker tanking, Healthstones, Fear management required." },
  { name: "Druid", role: "Hybrid", safety: "Safest", notes: "Bear form tankiness, Travel Form escape, versatility." },
];

export default function Classes() {
  return (
    <section id="classes" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Classes</h2>
            <p className="text-slate-300 mt-2">Choose a kit that forgives mistakes and fits your playstyle.</p>
          </div>
          <div className="text-xs text-slate-400">Safety tiers are opinionated — adapt to your skill.</div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {classes.map((c) => (
            <div key={c.name} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 hover:translate-y-[-2px] transition-transform">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{c.name}</h3>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10">{c.safety}</span>
              </div>
              <p className="text-sm text-amber-200/90 mt-1">{c.role}</p>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">{c.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
