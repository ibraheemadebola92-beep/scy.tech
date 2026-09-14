import { Search, Lightbulb, Hammer, RefreshCw, Rocket } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Discover", desc: "Understand the problem, business, audience, and objectives." },
  { icon: Lightbulb, num: "02", title: "Strategize", desc: "Design the appropriate AI, automation, creative, or software solution." },
  { icon: Hammer, num: "03", title: "Build", desc: "Develop the solution using modern AI and software technologies." },
  { icon: RefreshCw, num: "04", title: "Refine", desc: "Test, improve, optimize, and ensure the solution meets the objective." },
  { icon: Rocket, num: "05", title: "Launch", desc: "Deliver the final product and provide support for future improvements." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
            How We Work
          </div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            A Proven Path From Idea To Launch
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/30 bg-[#050810] shadow-lg shadow-blue-500/10">
                  <step.icon className="h-7 w-7 text-blue-400" />
                </div>
                <div className="mt-4 text-sm font-bold text-blue-400">{step.num}</div>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}