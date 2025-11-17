const tips = [
  {
    title: "The Golden Rules",
    items: [
      "Never pull what you can't see. Skip risky caves and tightly packed camps.",
      "Plan an exit. Keep cooldowns ready and always know your hearth location.",
      "Overlevel zones and quests. Safety > speed.",
      "Group for elites and dungeons — or skip them entirely.",
    ],
  },
  {
    title: "Combat Discipline",
    items: [
      "Open with control: slows, stuns, or pet taunts.",
      "Use line-of-sight to force casters to you.",
      "Keep a wand and bandages. Downtime is safer than dying.",
      "Eat and drink early; don't gamble at low HP.",
    ],
  },
  {
    title: "World Awareness",
    items: [
      "Beware patrols and linked packs. Mark paths with waypoints.",
      "Respect environmental hazards: drowning, fall damage, elevators.",
      "Watch for PvP flags and enemy territory if on open servers.",
      "Always carry potions, swiftness, and a free hearthstone cooldown.",
    ],
  },
];

export default function Survival() {
  return (
    <section id="survival" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Survival Playbook</h2>
            <p className="text-slate-300 mt-2">Habits that keep you alive from level 1 to 60.</p>
          </div>
          <a href="#resources" className="text-amber-400 hover:text-amber-300 text-sm">Jump to resources →</a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {tips.map((t) => (
            <div key={t.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold text-white">{t.title}</h3>
              <ul className="mt-4 space-y-2">
                {t.items.map((i) => (
                  <li key={i} className="text-slate-300 text-sm">• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
          <p className="text-amber-200 text-sm">
            Pro tip: Bind a panic macro that pops every defensive and a Swiftness Potion, then uses Hearthstone.
          </p>
        </div>
      </div>
    </section>
  );
}
