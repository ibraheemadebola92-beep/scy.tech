import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, Cpu, Rocket, Palette, ArrowRight } from "lucide-react";

const stats = [
  { icon: Brain, label: "AI Solutions", value: "10+" },
  { icon: Cpu, label: "Automation", value: "5+" },
  { icon: Rocket, label: "Digital Products", value: "8+" },
  { icon: Palette, label: "Creative Technology", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              About SCY Intelligence
            </div>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Intelligence That Turns Ideas Into Reality.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              SCY Intelligence combines artificial intelligence, software engineering, automation, creative technology, digital marketing, and modern web development to help clients solve real problems.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              We build practical AI-powered solutions that help businesses and individuals work smarter, create faster, and transform ideas into useful digital products.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-4 transition hover:border-blue-500/20 hover:bg-blue-500/5"
                >
                  <stat.icon className="h-6 w-6 text-blue-400" />
                  <div className="mt-3 text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/10 to-transparent p-8">
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-2 border-blue-500/30">
                  <AvatarImage src="" alt="Ibrahim Adebola" />
                  <AvatarFallback className="bg-blue-600 text-2xl font-bold">
                    IA
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold">Ibrahim Adebola</h3>
                  <p className="mt-1 text-blue-400">Founder & AI Engineer</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-slate-400">
                Ibrahim Adebola is an AI-focused engineering student and technology builder passionate about artificial intelligence, automation, software development, and creative technology. Through SCY Intelligence, he is building practical AI-powered solutions that help businesses and individuals work smarter, create faster, and transform ideas into useful digital products.
              </p>
              <Button
                variant="ghost"
                className="mt-6 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}