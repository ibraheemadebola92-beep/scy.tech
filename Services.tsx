import { Button } from "@/components/ui/button";
import {
  Brain,
  Bot,
  Workflow,
  Globe,
  MessageSquare,
  Video,
  Image as ImageIcon,
  Palette,
  Megaphone,
  FileText,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: Brain, title: "AI Engineering", desc: "Design and develop intelligent AI-powered applications and systems." },
  { icon: Bot, title: "AI Agents", desc: "Build AI agents capable of reasoning, using tools, handling tasks, and assisting businesses." },
  { icon: Workflow, title: "AI Automation", desc: "Automate repetitive business workflows and connect different digital tools." },
  { icon: Globe, title: "Website Development", desc: "Build modern, responsive websites, dashboards, SaaS interfaces, and web applications." },
  { icon: MessageSquare, title: "Prompt Engineering", desc: "Design structured prompts and AI workflows for reliable and useful AI outputs." },
  { icon: Video, title: "AI Video Generation", desc: "Create cinematic AI-generated videos, advertisements, promotional content, and storytelling experiences." },
  { icon: ImageIcon, title: "AI Image Generation", desc: "Create professional AI-generated visuals, product imagery, advertising creatives, and conceptual artwork." },
  { icon: Palette, title: "Graphic Design & Branding", desc: "Create logos, visual identities, social media designs, marketing graphics, and brand systems." },
  { icon: Megaphone, title: "Digital Marketing & Social Media", desc: "Create AI-assisted marketing strategies, campaigns, social media content, advertisements, and promotional materials." },
  { icon: FileText, title: "AI Content Creation", desc: "Create high-quality written, visual, and multimedia content using AI-assisted workflows." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
            Our Services
          </div>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Premium AI Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            From intelligent engineering to creative AI, we deliver complete solutions that move your business forward.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-blue-500/30 hover:bg-blue-500/5 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-400">{service.desc}</p>
              <button
                className="mt-4 inline-flex items-center text-sm font-medium text-blue-400 transition group-hover:text-blue-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-500"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}