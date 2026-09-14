import { Sparkles, Mail, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Solutions", id: "solutions" },
  { label: "Projects", id: "projects" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const serviceLinks = [
  "AI Engineering",
  "AI Agents",
  "Automation",
  "Website Development",
  "AI Video",
  "AI Image",
  "AI Content",
];

export function Footer({ onNavigate }: { onNavigate: (v: "home" | "dashboard") => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#030510]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">
                SCY<span className="text-blue-400"> Intelligence</span>
              </span>
            </button>
            <p className="mt-4 text-sm text-slate-500">
              AI engineering, automation, creative technology, and digital solutions for the next generation of businesses.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate("dashboard")}
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Get Started</h3>
            <p className="mt-4 text-sm text-slate-500">
              Ready to build something intelligent? Let's turn your idea into reality.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Start a Project
            </button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-slate-600">
          © 2026 SCY Intelligence AI Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}