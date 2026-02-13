import { SectionHeader } from "@/components/SectionHeader";
import { clientPipeline } from "@/data/missionData";

export default function ClientsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Clients"
        title="Sales + install pipeline"
        description="Track health, owner, and next action for every active client."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {clientPipeline.map((client) => (
          <div key={client.name} className="glass-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{client.stage}</p>
                <p className="mt-1 text-2xl font-semibold text-white">{client.name}</p>
              </div>
              <span className={`text-xs font-semibold ${client.health === 'on-track' ? 'text-emerald-200' : 'text-amber-200'}`}>
                {client.health}
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">Owner: {client.owner}</p>
            <p className="text-sm text-white/70">Next: {client.nextAction}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
