import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For individuals and small businesses.",
    features: [
      "AI content creation",
      "Basic automation setup",
      "Website development",
      "Email support",
      "1 revision round",
    ],
  },
  {
    name: "Growth",
    desc: "For businesses needing multiple AI-powered services.",
    features: [
      "Everything in Starter",
      "AI agents & automation",
      "Custom AI applications",
      "AI image & video generation",
      "Digital marketing support",
      "Priority support",
      "3 revision rounds",
    ],
    popular: true,
  },
  {
    name: "Custom",
    desc: "For companies requiring custom AI engineering, automation, software, or AI agents.",
    features: [
      "Everything in Growth",
      "Custom AI engineering",
      "Dedicated AI agent development",
      "Full automation systems",
      "SaaS & web applications",
      "Ongoing optimization",
      "Unlimited revisions",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Pricing
          </div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Flexible Packages For Every Stage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Every project is unique. Request a quote and we'll build a package around your specific needs.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition ${
                plan.popular
                  ? "border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent shadow-xl shadow-blue-500/10"
                  : "border-white/5 bg-white/[0.03] hover:border-blue-500/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check className="h-4 w-4 shrink-0 text-blue-400" />
                    {feature}
                  </div>
                ))}
              </div>
              <Button
                className={`mt-8 w-full ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "border border-blue-500/30 bg-transparent text-blue-300 hover:bg-blue-500/10"
                }`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}