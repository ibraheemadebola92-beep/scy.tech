import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA({ onNavigate }: { onNavigate: (v: "home" | "dashboard") => void }) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold sm:text-5xl">
          Your Next Big Idea Could Be Powered By AI.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          From intelligent automation to AI applications, websites, creative content, and digital experiences — SCY Intelligence turns ambitious ideas into practical technology.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
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
            onClick={() => onNavigate("dashboard")}
          >
            Explore the Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
}