import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Zap, Shield } from "lucide-react";

export function Hero({ onNavigate }: { onNavigate: (v: "home" | "dashboard") => void }) {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              <Zap className="h-4 w-4" />
              Next-Generation AI Technology
            </div>
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build Smarter.
              <br />
              Automate Faster.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Create With AI.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">
              SCY Intelligence helps businesses and creators harness artificial intelligence to build digital products, automate workflows, generate content, and turn ideas into intelligent solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-blue-400" /> AI Engineering
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-400" /> Automation
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-blue-400" /> Creative AI
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" /> Digital Solutions
              </span>
            </div>
          </div>

          {/* AI Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto h-[500px] w-[500px]">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20" />
              <div className="absolute inset-8 rounded-full border border-blue-500/30" />
              <div className="absolute inset-16 rounded-full border border-blue-500/40" />
              
              {/* Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-2xl shadow-blue-500/30">
                  <Brain className="h-20 w-20 text-white" />
                  <div className="absolute inset-0 animate-pulse rounded-full bg-blue-400/20" />
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
              <div className="absolute top-1/4 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-gold-400 shadow-lg shadow-gold-400/50" />
              <div className="absolute bottom-1/4 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-300 shadow-lg shadow-blue-300/50" />
              <div className="absolute top-1/2 left-1/4 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
              <div className="absolute top-1/2 right-1/4 h-2 w-2 -translate-y-1/2 rounded-full bg-gold-300 shadow-lg shadow-gold-300/50" />

              {/* Data flow lines */}
              <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-blue-500/20" />
              <div className="absolute inset-16 animate-spin-slower rounded-full border border-dashed border-gold-400/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}