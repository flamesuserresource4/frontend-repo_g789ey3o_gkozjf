import { Flame, BookOpen, Map, Shield, Skull, Info } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Flame className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold leading-tight">Hardcore Guide</p>
              <p className="text-xs text-amber-200/80 -mt-0.5">WoW Classic</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#classes" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><Shield className="h-4 w-4"/>Classes</a>
            <a href="#races" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><Map className="h-4 w-4"/>Races</a>
            <a href="#survival" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><Skull className="h-4 w-4"/>Survival</a>
            <a href="#resources" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><BookOpen className="h-4 w-4"/>Resources</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors flex items-center gap-2"><Info className="h-4 w-4"/>About</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
