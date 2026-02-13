import { SectionHeader } from "@/components/SectionHeader";
import { devices } from "@/data/missionData";

const stateColors: Record<string, string> = {
  online: "text-emerald-200",
  idle: "text-amber-200",
  maintenance: "text-rose-200",
};

export default function DevicesPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Devices"
        title="Runtime + tunnels"
        description="Jarvis + Alfred hosts with uptime, owners, and current state."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {devices.map((device) => (
          <div key={device.name} className="glass-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{device.owner}</p>
                <p className="mt-1 text-2xl font-semibold text-white">{device.name}</p>
                <p className="text-sm text-white/60">{device.location}</p>
              </div>
              <div className={`text-sm font-semibold ${stateColors[device.state]}`}>{device.state}</div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-white/70">
              <span>Uptime {device.uptime}</span>
              <button className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:bg-white/10">
                Open console
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
