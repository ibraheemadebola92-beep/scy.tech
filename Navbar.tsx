import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Solutions", id: "solutions" },
  { label: "Projects", id: "projects" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export function Navbar({ onNavigate }: { onNavigate: (v: "home" | "dashboard") => void }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050810]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            SCY<span className="text-blue-400"> Intelligence</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:text-blue-200"
            onClick={() => onNavigate("dashboard")}
          >
            Dashboard
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-500"
            onClick={() => scrollTo("contact")}
          >
            Start a Project
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-slate-300 hover:bg-white/5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#050810]/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 pt-3">
              <Button
                variant="outline"
                className="flex-1 border-blue-500/30 text-blue-300"
                onClick={() => onNavigate("dashboard")}
              >
                Dashboard
              </Button>
              <Button
                className="flex-1 bg-blue-600 hover:bg-blue-500"
                onClick={() => scrollTo("contact")}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}