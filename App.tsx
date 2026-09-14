import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Solutions } from "@/components/Solutions";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Dashboard } from "@/components/Dashboard";

export default function App() {
  const [view, setView] = useState<"home" | "dashboard">("home");

  return (
    <div className="min-h-screen bg-[#050810] text-white">
      {view === "home" ? (
        <>
          <Navbar onNavigate={setView} />
          <main>
            <Hero onNavigate={setView} />
            <About />
            <Services />
            <Solutions />
            <Projects />
            <Process />
            <Pricing />
            <Contact />
            <CTA onNavigate={setView} />
          </main>
          <Footer onNavigate={setView} />
        </>
      ) : (
        <Dashboard onBack={() => setView("home")} />
      )}
    </div>
  );
}