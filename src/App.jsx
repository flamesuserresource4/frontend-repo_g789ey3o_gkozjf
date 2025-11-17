import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import Races from "./components/Races";
import Survival from "./components/Survival";
import Resources from "./components/Resources";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.06),transparent_60%)]"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.05),transparent_60%)]"/>
      </div>

      <Navbar />
      <Hero />
      <main>
        <Classes />
        <Races />
        <Survival />
        <Resources />
      </main>
      <Footer />
    </div>
  );
}

export default App;
