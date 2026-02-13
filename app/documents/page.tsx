import { SectionHeader } from "@/components/SectionHeader";
import { documentShelf } from "@/data/missionData";

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Documents"
        title="Reference shelf"
        description="Pinned Court Vision + AutomiQ docs for fast copy/paste."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {documentShelf.map((doc) => (
          <div key={doc.title} className="glass-card p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">{doc.kind}</p>
            <p className="mt-2 text-xl font-semibold text-white">{doc.title}</p>
            <p className="text-sm text-white/70">Owner: {doc.owner}</p>
            <p className="text-xs text-white/60">Updated {doc.updated}</p>
            <button className="mt-4 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:bg-white/10">
              Copy link
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
