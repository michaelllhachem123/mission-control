import { SectionHeader } from "@/components/SectionHeader";
import { agents, projects, prompts, reviews } from "@/data/missionData";

const toneColors: Record<string, string> = {
  ok: "bg-emerald-500/15 text-emerald-200",
  warning: "bg-amber-500/15 text-amber-200",
  alert: "bg-rose-500/15 text-rose-200",
};

export default function DashboardPage() {
  const missionLoad = Math.round(
    agents.reduce((acc, agent) => acc + agent.load, 0) / agents.length
  );

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Dashboard"
        title="Unified command board"
        description="Snapshot of every Jarvis + Alfred stream so you can copy prompts and deploy fixes fast."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Metric label="Mission load" value={`${missionLoad}%`} detail="Avg agent utilization" />
        <Metric label="Active projects" value={projects.length} detail="Across Court Vision + AutomiQ" />
        <Metric label="Reviews today" value={reviews.length} detail="Escalate before deadlines" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {agents.map((agent) => (
          <div key={agent.id} className="glass-card p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">{agent.status}</p>
                <h2 className="mt-2 text-2xl font-semibold">{agent.name}</h2>
                <p className="text-sm text-white/70">{agent.title}</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Load</p>
                <p className="text-3xl font-semibold text-white">{agent.load}%</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">{agent.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              {agent.responsibilities.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {agent.checkpoints.map((checkpoint) => (
                <div key={checkpoint.label} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-sm">
                  <div>
                    <p className="font-medium text-white">{checkpoint.label}</p>
                    <p className="text-white/60">Owner: {checkpoint.owner}</p>
                  </div>
                  <p className="text-white/70">{checkpoint.due}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {agent.signals.map((signal) => (
                <div key={signal.label} className={`rounded-2xl px-3 py-2 text-center text-xs font-semibold ${toneColors[signal.tone]}`}>
                  <p>{signal.label}</p>
                  <p className="text-white/80">{signal.state}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Active projects</h3>
            <p className="text-sm text-white/60">Jarvis + Alfred scope</p>
          </div>
          <div className="mt-4 space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="rounded-2xl border border-white/10 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">{project.owner}</p>
                    <p className="text-lg font-semibold text-white">{project.name}</p>
                  </div>
                  <span className="text-xs uppercase text-white/60">{project.health}</span>
                </div>
                <p className="mt-2 text-white/70">Stage: {project.stage}</p>
                <p className="text-white/60">Next: {project.nextStep}</p>
                <p className="mt-1 text-xs text-white/40">ETA {project.eta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Prompt library</h3>
            <p className="text-sm text-white/60">Copy + ship</p>
          </div>
          <div className="mt-4 space-y-4">
            {prompts.map((prompt) => (
              <div key={prompt.title} className="rounded-2xl border border-white/10 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{prompt.title}</p>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">{prompt.target}</span>
                </div>
                <p className="mt-1 text-white/70">{prompt.description}</p>
                <code className="mt-3 block rounded-xl bg-white/5 p-3 text-xs text-white">
                  {prompt.payload}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Upcoming reviews</h3>
          <p className="text-sm text-white/60"> {new Date().toLocaleDateString()} </p>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <div key={review.title} className="rounded-2xl border border-white/10 p-4 text-sm">
              <p className="font-semibold text-white">{review.title}</p>
              <p className="text-white/60">Agent: {review.agent}</p>
              <p className="text-white/60">Due: {review.due}</p>
              <p className="text-white/60">Channel: {review.channel}</p>
              <p className="text-white/60">Owner: {review.owner}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, detail }: { label: string; value: string | number; detail: string }) {
  return (
    <div className="glass-card p-5">
      <p className="text-xs uppercase tracking-[0.35em] text-white/50">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
      <p className="text-sm text-white/70">{detail}</p>
    </div>
  );
}
