import { SectionHeader } from "@/components/SectionHeader";
import { apiStats } from "@/data/missionData";

export default function ApiUsagePage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="API Usage"
        title="Token + request burn"
        description="Snapshot of OpenClaw calls so we can keep consumption in check."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {apiStats.map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
            <p className="text-sm text-white/70">Δ {stat.delta}</p>
          </div>
        ))}
      </div>
      <div className="glass-card p-6">
        <p className="text-sm text-white/70">
          To reduce burn: batch updates, avoid duplicate tunnels, and move Mission Control to a hosted target.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3 text-xs text-white/60">
          <div className="rounded-2xl border border-white/10 p-3">
            <p className="font-semibold text-white">Heavy jobs</p>
            <p>Next.js dev logs, LocalTunnel restarts</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-3">
            <p className="font-semibold text-white">Quick wins</p>
            <p>Deploy to Vercel, kill idle shells, short updates</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-3">
            <p className="font-semibold text-white">Alert</p>
            <p>Set budget reminder at 100k tokens/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
