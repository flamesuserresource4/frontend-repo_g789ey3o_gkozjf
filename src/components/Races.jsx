const races = [
  { name: "Human", perks: ["Perception for stealth detection", "Spirit bonus for regen"] },
  { name: "Dwarf", perks: ["Stoneform cleanse + armor", "Gun specialization"] },
  { name: "Night Elf", perks: ["Shadowmeld for AFK safety", "Base dodge"] },
  { name: "Gnome", perks: ["Escape Artist to break roots", "Engineering synergy"] },
  { name: "Orc", perks: ["Hardiness stun resist", "Pet damage for Hunter/Warlock"] },
  { name: "Tauren", perks: ["War Stomp emergency stun", "Bonus health"] },
  { name: "Undead", perks: ["Will of the Forsaken fear break", "Cannibalize sustain"] },
  { name: "Troll", perks: ["Berserking casting speed", "Beast slaying niche"] },
];

export default function Races() {
  return (
    <section id="races" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Races</h2>
        <p className="text-slate-300 mt-2 mb-6">Racial abilities can save your run. Pick one that complements your class toolkit.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {races.map((r) => (
            <div key={r.name} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <h3 className="text-lg font-semibold text-white">{r.name}</h3>
              <ul className="mt-2 space-y-1">
                {r.perks.map((p) => (
                  <li key={p} className="text-sm text-slate-300">• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
