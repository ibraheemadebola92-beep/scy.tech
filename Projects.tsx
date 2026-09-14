import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SCY Intelligence AI Platform",
    category: "Platform",
    type: "Concept",
    desc: "A central platform for AI-powered business and creative solutions.",
    tech: ["React", "TypeScript", "AI APIs"],
  },
  {
    title: "SCY AI Study Assistant",
    category: "Education",
    type: "Prototype",
    desc: "An AI-powered learning and examination assistant.",
    tech: ["AI", "NLP", "Education"],
  },
  {
    title: "AI Business Automation System",
    category: "Automation",
    type: "Concept",
    desc: "An intelligent workflow automation concept.",
    tech: ["Automation", "Workflow", "AI"],
  },
  {
    title: "AI Marketing Campaign System",
    category: "Marketing",
    type: "Concept",
    desc: "AI-assisted marketing campaign generation.",
    tech: ["AI", "Marketing", "Content"],
  },
  {
    title: "AI Cinematic Advertisement",
    category: "Video",
    type: "Project",
    desc: "A professional AI-generated advertising video.",
    tech: ["AI Video", "Cinematic", "Creative"],
  },
  {
    title: "AI Website & SaaS Projects",
    category: "Web",
    type: "Project",
    desc: "Modern websites and application interfaces created with AI-assisted development.",
    tech: ["React", "SaaS", "Web"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Portfolio
          </div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Built With Intelligence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            A selection of concepts, prototypes, and projects crafted with AI-powered development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-blue-400/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 opacity-50 transition group-hover:scale-110 group-hover:opacity-70" />
                </div>
                <Badge className="absolute top-4 right-4 bg-blue-600/80 text-white">
                  {project.type}
                </Badge>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-400">{project.category}</div>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}