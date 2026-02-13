import { SectionHeader } from "@/components/SectionHeader";
import { coreJobs } from "@/data/missionData";

const statusTone: Record<string, string> = {
  ready: "text-emerald-200",
  running: "text-blue-200",
  blocked: "text-rose-200",
};

export default function CoreJobsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Core Jobs"
        title="Cron + automation feed"
        description="Jarvis + Alfred recurring jobs, their cadence, and health."
      />
      <div className="space-y-3">
        {coreJobs.map((job) => (
          <div key={job.title} className="glass-card p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">{job.owner}</p>
                <p className="mt-2 text-xl font-semibold text-white">{job.title}</p>
                <p className="text-sm text-white/70">Cadence: {job.cadence}</p>
              </div>
              <span className={`text-sm font-semibold ${statusTone[job.status]}`}>{job.status}</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-white/70">
              <button className="rounded-full border border-white/15 px-4 py-1 hover:bg-white/10">
                Run now
              </button>
              <button className="rounded-full border border-white/15 px-4 py-1 hover:bg-white/10">
                Edit cadence
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
