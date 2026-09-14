import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  Wrench,
  FolderKanban,
  Image as ImageIcon,
  Video,
  FileText,
  Bot,
  Workflow,
  BarChart3,
  Settings,
  Sparkles,
  ArrowLeft,
  Plus,
  Search,
  Bell,
  Activity,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Wrench, label: "AI Tools" },
  { icon: FolderKanban, label: "Projects" },
  { icon: ImageIcon, label: "AI Image Generator" },
  { icon: Video, label: "AI Video Generator" },
  { icon: FileText, label: "AI Content Generator" },
  { icon: Bot, label: "AI Agents" },
  { icon: Workflow, label: "Automation" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const quickActions = [
  { icon: ImageIcon, label: "Generate Image" },
  { icon: Video, label: "Generate Video" },
  { icon: FileText, label: "Generate Content" },
  { icon: Bot, label: "Build AI Agent" },
  { icon: Workflow, label: "Create Automation" },
  { icon: Plus, label: "Start Project" },
];

const recentProjects = [
  { name: "AI Platform", type: "Web App", status: "In Progress", updated: "2h ago" },
  { name: "Study Assistant", type: "AI App", status: "Completed", updated: "1d ago" },
  { name: "Marketing System", type: "Automation", status: "Draft", updated: "3d ago" },
  { name: "Brand Identity", type: "Design", status: "In Progress", updated: "5d ago" },
];

const aiTools = [
  { name: "Image Generator", icon: ImageIcon, status: "Ready" },
  { name: "Video Generator", icon: Video, status: "Ready" },
  { name: "Content Writer", icon: FileText, status: "Ready" },
  { name: "AI Agent Builder", icon: Bot, status: "Beta" },
];

const activityData = [
  { day: "Mon", value: 40 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 35 },
  { day: "Sun", value: 50 },
];

export function Dashboard({ onBack }: { onBack: () => void }) {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <div className="flex min-h-screen bg-[#050810]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/5 bg-[#030510] lg:block">
        <div className="flex h-16 items-center gap-2 border-b border-white/5 px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold">
            SCY<span className="text-blue-400"> Intelligence</span>
          </span>
        </div>
        <nav className="space-y-1 p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                activeItem === item.label
                  ? "bg-blue-600/20 text-blue-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/5 bg-[#050810]/80 px-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white"
              onClick={onBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Site
            </Button>
            <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 sm:flex">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                placeholder="Search..."
                className="bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg border border-white/10 p-2 text-slate-400 transition hover:text-white">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-500" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-sm font-bold">
              IA
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="font-serif text-2xl font-bold sm:text-3xl">
              Welcome to SCY Intelligence
            </h1>
            <p className="mt-2 text-slate-400">
              Your intelligent workspace for building, creating, and automating with AI.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "AI Tools", value: "12", icon: Wrench, color: "text-blue-400" },
              { label: "Active Projects", value: "5", icon: FolderKanban, color: "text-emerald-400" },
              { label: "Automations", value: "8", icon: Workflow, color: "text-amber-400" },
              { label: "Generated Content", value: "47", icon: FileText, color: "text-purple-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-blue-500/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4 text-sm text-slate-300 transition hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white"
                >
                  <action.icon className="h-5 w-5 text-blue-400" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Projects & Activity */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-lg font-semibold">Recent Projects</h2>
              <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/[0.03]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5 text-left text-slate-500">
                      <th className="px-6 py-4 font-medium">Project</th>
                      <th className="px-6 py-4 font-medium">Type</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Updated</th>
                      <th className="px-6 py-4 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProjects.map((project) => (
                      <tr key={project.name} className="border-b border-white/5 transition hover:bg-white/[0.02]">
                        <td className="px-6 py-4 font-medium text-white">{project.name}</td>
                        <td className="px-6 py-4 text-slate-400">{project.type}</td>
                        <td className="px-6 py-4">
                          <Badge
                            className={
                              project.status === "Completed"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : project.status === "In Progress"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-slate-500/20 text-slate-400"
                            }
                          >
                            {project.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-slate-500">{project.updated}</td>
                        <td className="px-6 py-4">
                          <button className="text-blue-400 transition hover:text-blue-300">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AI Activity */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">AI Activity</h2>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Activity className="h-4 w-4 text-blue-400" />
                  Last 7 days
                </div>
                <div className="mt-6 flex h-40 items-end justify-between gap-2">
                  {activityData.map((item) => (
                    <div key={item.day} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-blue-600/40 to-blue-400/60 transition hover:from-blue-600/60 hover:to-blue-400/80"
                        style={{ height: `${item.value}%` }}
                      />
                      <span className="text-xs text-slate-500">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Tools */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold">AI Tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aiTools.map((tool) => (
                <div
                  key={tool.name}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition hover:border-blue-500/30 hover:bg-blue-500/5"
                >
                  <div className="flex items-center justify-between">
                    <tool.icon className="h-8 w-8 text-blue-400" />
                    <Badge
                      className={
                        tool.status === "Ready"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }
                    >
                      {tool.status}
                    </Badge>
                  </div>
                  <h3 className="mt-4 font-semibold">{tool.name}</h3>
                  <button className="mt-2 text-sm text-blue-400 transition hover:text-blue-300">
                    Launch Tool
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}