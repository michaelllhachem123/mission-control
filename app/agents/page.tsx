import { SectionHeader } from "@/components/SectionHeader";
import { agents } from "@/data/missionData";

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Agents"
        title="Jarvis + Alfred status"
        description="Dedicated view of both bots with their load, focus, and checkpoints."
      />
      <div className="space-y-4">
        {agents.map((agent) => (
          <div key={agent.id} className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">{agent.status}</p>
                <h2 className="mt-2 text-3xl font-semibold">{agent.name}</h2>
                <p className="text-sm text-white/70">{agent.title}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Load</p>
                <p className="text-4xl font-semibold text-white">{agent.load}%</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">Focus: {agent.focus}</p>
            <p className="mt-2 text-sm text-white/70">{agent.summary}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {agent.checkpoints.map((cp) => (
                <div key={cp.label} className="rounded-2xl border border-white/10 p-4 text-sm">
                  <p className="font-semibold text-white">{cp.label}</p>
                  <p className="text-white/60">Due {cp.due}</p>
                  <p className="text-white/60">Owner: {cp.owner}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
