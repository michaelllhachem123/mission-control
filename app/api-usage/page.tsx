import { SectionHeader } from "@/components/SectionHeader";
import { apiStats, premiumRequestsConfig } from "@/data/missionData";

export default function ApiUsagePage() {
  const { totalMonthlyBudget, usedAmount, limitPercent, billingCycleReset } = premiumRequestsConfig;

  // Dollar value at which the hard cap is enforced
  const capThreshold = (totalMonthlyBudget * limitPercent) / 100;
  // Actual usage as a percentage of the cap (can exceed 100 when over cap)
  const rawUsageOfLimit = Math.round((usedAmount / capThreshold) * 100);
  const displayBarWidth = Math.min(rawUsageOfLimit, 100);
  const isAtCap = rawUsageOfLimit >= 100;

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

      {/* Premium paid requests section */}
      <div className="glass-card p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Manage premium paid requests</p>
            <p className="mt-1 text-2xl font-semibold text-white">
              ${usedAmount.toFixed(2)}{" "}
              <span className="text-sm font-normal text-white/60">
                of ${capThreshold.toFixed(2)} limit
              </span>
            </p>
            <p className="text-sm text-white/60">
              Hard cap: {limitPercent}% of ${totalMonthlyBudget} monthly budget
            </p>
          </div>
          <span
            className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold ${
              isAtCap
                ? "bg-rose-500/20 text-rose-200"
                : "bg-emerald-500/20 text-emerald-200"
            }`}
          >
            {isAtCap ? "At cap — requests blocked" : "Within limit"}
          </span>
        </div>

        {/* Usage bar */}
        <div>
          <div className="mb-1 flex justify-between text-xs text-white/50">
            <span>0%</span>
            <span className={`font-semibold ${isAtCap ? "text-rose-300" : "text-white"}`}>
              {rawUsageOfLimit}% of limit{isAtCap && rawUsageOfLimit > 100 ? " (over cap)" : ""}
            </span>
            <span>100% of cap</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className={`h-full rounded-full transition-all ${
                isAtCap ? "bg-rose-500" : "bg-emerald-500"
              }`}
              style={{ width: `${displayBarWidth}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-white/50">
            Limit is active at {limitPercent}%. Once ${capThreshold.toFixed(2)} is reached, new paid
            requests are blocked until the limit is raised or the billing cycle resets.
          </p>
        </div>

        {/* Resolution guide — shown only when at cap */}
        {isAtCap && (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 space-y-3">
            <p className="text-sm font-semibold text-amber-200">
              ⚠ Action required — requests are currently blocked
            </p>
            <p className="text-xs text-white/70">
              Your cap is set to {limitPercent}% of your ${totalMonthlyBudget} monthly budget ($
              {capThreshold.toFixed(2)}). Usage has reached this limit, so new paid requests are
              being rejected and you are not being charged for them.
            </p>
            <div className="space-y-1 text-xs text-white/70">
              <p className="font-semibold text-white">To allow charges and unblock requests:</p>
              <ol className="list-decimal list-inside space-y-1 pl-1">
                <li>
                  Raise your limit above {limitPercent}% — for example, set it to{" "}
                  <span className="text-white font-medium">
                    50% (${(totalMonthlyBudget * 0.5).toFixed(2)})
                  </span>{" "}
                  or{" "}
                  <span className="text-white font-medium">
                    100% (${totalMonthlyBudget.toFixed(2)})
                  </span>
                  .
                </li>
                <li>
                  Update <code className="rounded bg-white/10 px-1">limitPercent</code> in{" "}
                  <code className="rounded bg-white/10 px-1">data/missionData.ts</code> to the
                  new value.
                </li>
                <li>
                  Premium requests will then be charged and processed normally up to the new cap.
                </li>
              </ol>
            </div>
            <p className="text-xs text-white/50">
              Alternatively, wait for your billing cycle to reset on{" "}
              <span className="text-white/70 font-medium">{billingCycleReset}</span> — your usage
              counter will clear and requests will resume at the current {limitPercent}% cap.
            </p>
          </div>
        )}
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
            <p>Budget cap active at {limitPercent}% — ${capThreshold.toFixed(2)}/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
