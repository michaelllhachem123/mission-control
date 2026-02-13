import { SectionHeader } from "@/components/SectionHeader";
import { journalEntries } from "@/data/missionData";

export default function JournalPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Journal"
        title="Live activity log"
        description="High-level entries from Jarvis + Alfred so you can scan what changed."
      />
      <div className="space-y-4">
        {journalEntries.map((entry) => (
          <div key={entry.timestamp + entry.summary} className="glass-card p-5">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>{entry.timestamp}</span>
              <span>{entry.author}</span>
            </div>
            <p className="mt-2 text-lg font-semibold text-white">{entry.summary}</p>
            <p className="text-sm text-white/70">{entry.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
