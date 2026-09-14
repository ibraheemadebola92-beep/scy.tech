import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be connected to a backend here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              Contact
            </div>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">
              Have an Idea? Let's Build It.
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Tell us what you're trying to build, automate, create, or improve. SCY Intelligence will help turn the idea into a practical AI-powered solution.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-slate-500">hello@scyintelligence.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <MessageCircle className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-sm font-medium">WhatsApp</div>
                  <div className="text-sm text-slate-500">+000 000 000 000</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <div className="flex h-5 w-5 items-center justify-center text-blue-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <div className="text-sm text-slate-500">linkedin.com/company/scyintelligence</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                <div className="flex h-5 w-5 items-center justify-center text-blue-400">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">GitHub</div>
                  <div className="text-sm text-slate-500">github.com/scyintelligence</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 bg-white/[0.03] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 border-white/10 bg-white/5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 border-white/10 bg-white/5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  placeholder="Company Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-2 border-white/10 bg-white/5"
                />
              </div>
              <div>
                <Label>Service Needed</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-2 border-white/10 bg-white/5">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-engineering">AI Engineering</SelectItem>
                    <SelectItem value="ai-agents">AI Agents</SelectItem>
                    <SelectItem value="automation">AI Automation</SelectItem>
                    <SelectItem value="web">Website Development</SelectItem>
                    <SelectItem value="video">AI Video</SelectItem>
                    <SelectItem value="image">AI Image</SelectItem>
                    <SelectItem value="content">AI Content</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label>Project Budget</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger className="mt-2 border-white/10 bg-white/5">
                    <SelectValue placeholder="Select a budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000+">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell us about your project..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-2 min-h-[120px] border-white/10 bg-white/5"
                  required
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full bg-blue-600 hover:bg-blue-500">
              Start My Project
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}