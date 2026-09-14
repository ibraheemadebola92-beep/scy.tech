import { Button } from "@/components/ui/button";
import { Briefcase, PenTool, GraduationCap, Workflow, Cpu, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Briefcase,
    title: "AI Business Assistant",
    problem: "Businesses struggle with repetitive tasks and slow customer support.",
    solution: "An intelligent assistant for business operations, customer support, and information management.",
    features: ["24/7 customer support", "Automated scheduling", "Data retrieval", "Workflow assistance"],
  },
  {
    icon: PenTool,
    title: "AI Content Engine",
    problem: "Creating consistent, high-quality content takes too much time.",
    solution: "Generate marketing content, social posts, campaign concepts, scripts, and creative ideas.",
    features: ["Social media posts", "Campaign concepts", "Script writing", "Creative ideation"],
  },
  {
    icon: GraduationCap,
    title: "AI Study Assistant",
    problem: "Students need personalized learning support and exam preparation.",
    solution: "AI-powered learning, tutoring, quizzes, practice questions, and performance analysis.",
    features: ["Personalized tutoring", "Practice questions", "Performance tracking", "Exam preparation"],
  },
  {
    icon: Workflow,
    title: "AI Automation Systems",
    problem: "Manual processes slow down business operations.",
    solution: "Connect business processes and automate repetitive tasks.",
    features: ["Workflow automation", "Tool integration", "Process optimization", "Error reduction"],
  },
  {
    icon: Cpu,
    title: "Custom AI Applications",
    problem: "Off-the-shelf tools don't fit unique business needs.",
    solution: "Build specialized AI applications around a client's unique requirements.",
    features: ["Custom development", "Tailored features", "Scalable architecture", "Integration ready"],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
            AI Solutions
          </div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            AI Solutions Built For Real-World Problems
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            We identify the challenge, then engineer the intelligent solution.
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group grid gap-6 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-blue-500/30 hover:bg-blue-500/5 lg:grid-cols-3"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    <span className="font-medium text-slate-400">Problem: </span>
                    {solution.problem}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <p className="text-slate-400">
                  <span className="font-medium text-blue-400">Solution: </span>
                  {solution.solution}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="self-start text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get This Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}