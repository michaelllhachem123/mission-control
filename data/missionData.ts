export type Agent = {
  id: string;
  name: string;
  title: string;
  status: "online" | "on-mission" | "standby";
  load: number; // percentage
  focus: string;
  summary: string;
  responsibilities: string[];
  checkpoints: { label: string; due: string; owner: string }[];
  signals: { label: string; state: string; tone: "ok" | "warning" | "alert" }[];
};

export type Project = {
  name: string;
  owner: "Jarvis" | "Alfred" | "Joint";
  stage: string;
  health: "on-track" | "at-risk" | "blocked";
  nextStep: string;
  eta: string;
};

export type Review = {
  title: string;
  agent: "Jarvis" | "Alfred" | "Joint";
  due: string;
  channel: string;
  owner: string;
};

export type Prompt = {
  title: string;
  description: string;
  payload: string;
  target: "Jarvis" | "Alfred" | "Both";
};

export type ProcurementItem = {
  vendor: string;
  item: string;
  value: string;
  eta: string;
  owner: "Jarvis" | "Alfred";
  status: "pending" | "ordered" | "delivered";
};

export type InventoryItem = {
  sku: string;
  description: string;
  qty: number;
  location: string;
  status: "ready" | "low" | "ordered";
};

export type FinanceLine = {
  label: string;
  amount: string;
  trend: "up" | "down" | "flat";
  note: string;
};

export type ContractLine = {
  client: string;
  value: string;
  stage: string;
  owner: "Jarvis" | "Alfred";
};

export type ComplianceTask = {
  title: string;
  due: string;
  status: "ok" | "risk";
  owner: string;
};

export type SopItem = {
  title: string;
  owner: string;
  status: "ready" | "draft" | "blocked";
};

export type CalendarItem = {
  title: string;
  time: string;
  channel: string;
  owner: string;
};

export type UserRecord = {
  name: string;
  role: string;
  presence: "online" | "offline" | "focus";
};

export const agents: Agent[] = [
  {
    id: "jarvis",
    name: "Jarvis",
    title: "AI Personal Assistant · Court Vision Sales + AutomiQ CSO/COO",
    status: "online",
    load: 82,
    focus: "AutomiQ deal funnel, Court Vision sales manager, personal ops",
    summary:
      "Running AutomiQ pipeline, following up on Eddy personal shopper MVP, and keeping Michael's calendar + inbox under control.",
    responsibilities: [
      "AutomiQ CSO/COO execution",
      "Court Vision sales + after-sales",
      "Personal assistant + comms",
      "Mission control reporting",
    ],
    checkpoints: [
      { label: "AutomiQ client recap", due: "Today · 18:00", owner: "Jarvis" },
      { label: "Court Vision pricing deck refresh", due: "Tomorrow · 09:30", owner: "Jarvis" },
    ],
    signals: [
      { label: "Lead responses", state: "+3 since morning", tone: "ok" },
      { label: "Installment reminders", state: "2 pending", tone: "warning" },
      { label: "Capacity", state: "82%", tone: "warning" },
    ],
  },
  {
    id: "alfred",
    name: "Alfred",
    title: "COO · Court Vision Platform + Web App Builder",
    status: "on-mission",
    load: 68,
    focus: "Court Vision internal tooling, web app delivery, workflow automation",
    summary:
      "Building the Court Vision mission control UI, maintaining internal APIs, and syncing with Jarvis on deliverable statuses.",
    responsibilities: [
      "Court Vision COO + ops",
      "Internal web app builds",
      "System integrity + hosting",
      "Workflow automation",
    ],
    checkpoints: [
      { label: "Mission Control deploy", due: "Today · 22:00", owner: "Alfred" },
      { label: "Court Vision web portal QA", due: "Fri · 13:00", owner: "Alfred" },
    ],
    signals: [
      { label: "Build status", state: "Next.js dev server ready", tone: "ok" },
      { label: "Error budget", state: "0 blocking issues", tone: "ok" },
      { label: "Capacity", state: "68%", tone: "ok" },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Court Vision Sales Engine",
    owner: "Jarvis",
    stage: "Pricing & pilot rollout",
    health: "on-track",
    nextStep: "Ship updated Lebanon pricing with mission-control link",
    eta: "Fri",
  },
  {
    name: "AutomiQ WhatsApp MVP",
    owner: "Jarvis",
    stage: "Spec finalization",
    health: "at-risk",
    nextStep: "Lock Eddy requirements + catalog automation block",
    eta: "Today",
  },
  {
    name: "Court Vision Web App",
    owner: "Alfred",
    stage: "Frontend polish",
    health: "on-track",
    nextStep: "Inject hero replacements + install trackers",
    eta: "Sat",
  },
  {
    name: "Mission Control Dashboard",
    owner: "Joint",
    stage: "MVP",
    health: "on-track",
    nextStep: "Add live data hooks + remote tunnel",
    eta: "Today",
  },
  {
    name: "Installer Handbook",
    owner: "Alfred",
    stage: "Draft",
    health: "blocked",
    nextStep: "Need SOP inputs from Jarvis",
    eta: "Paused",
  },
];

export const reviews: Review[] = [
  {
    title: "AutomiQ client sync",
    agent: "Jarvis",
    due: "Today 18:30",
    channel: "Telegram",
    owner: "Michael",
  },
  {
    title: "Court Vision install calendar",
    agent: "Alfred",
    due: "Tomorrow 10:00",
    channel: "Mission Control",
    owner: "Michael",
  },
  {
    title: "Pricing + catalog QA",
    agent: "Joint",
    due: "Tomorrow 16:00",
    channel: "Google Meet",
    owner: "Jarvis",
  },
];

export const prompts: Prompt[] = [
  {
    title: "Sync Jarvis pipeline",
    description: "Force-refresh AutomiQ + Court Vision deals, log blockers, send digest",
    payload: "sync pipelines + summarize blockers in 5 bullet points",
    target: "Jarvis",
  },
  {
    title: "Prep Alfred deploy",
    description: "Generate deploy checklist + ngrok tunnel for latest mission-control build",
    payload: "prep deploy checklist for mission control + expose preview link",
    target: "Alfred",
  },
  {
    title: "Shared install board",
    description: "Cross-agent view of install dates, owners, next tasks",
    payload: "compile shared install board with next tasks for each court",
    target: "Both",
  },
  {
    title: "Personal assistant sweep",
    description: "Jarvis personal PA actions (calendar, reminders, inbox triage)",
    payload: "run full PA sweep and list top 3 todo escalations",
    target: "Jarvis",
  },
  {
    title: "Ops health check",
    description: "Alfred infrastructure health snapshot (CPU, uptime, errors)",
    payload: "report latest infra health stats and highlight anomalies",
    target: "Alfred",
  },
];

export const procurementQueue: ProcurementItem[] = [
  {
    vendor: "Eddy Personal Shopper",
    item: "WhatsApp catalog automation",
    value: "$6.4k",
    eta: "Mar 1",
    owner: "Jarvis",
    status: "pending",
  },
  {
    vendor: "LED Courts",
    item: "Lighting controllers",
    value: "$11.2k",
    eta: "Feb 18",
    owner: "Alfred",
    status: "ordered",
  },
  {
    vendor: "SurfacePro",
    item: "Outdoor vinyl kits",
    value: "$4.8k",
    eta: "Feb 25",
    owner: "Alfred",
    status: "delivered",
  },
];

export const inventoryItems: InventoryItem[] = [
  { sku: "CV-PAINT-RED", description: "Acrylic red buckets", qty: 24, location: "Warehouse A", status: "ready" },
  { sku: "CV-PAINT-BLU", description: "Acrylic blue buckets", qty: 12, location: "Warehouse A", status: "low" },
  { sku: "CV-NET-ELT", description: "Elite net systems", qty: 6, location: "Showroom", status: "ordered" },
];

export const financeSnapshot: FinanceLine[] = [
  { label: "MRR", amount: "$38.2k", trend: "up", note: "+6% vs last week" },
  { label: "Cash on hand", amount: "$182k", trend: "flat", note: "45 days runway" },
  { label: "Open invoices", amount: "$21.4k", trend: "down", note: "3 awaiting payment" },
];

export const contractBook: ContractLine[] = [
  { client: "Cedars Club", value: "$58k", stage: "Negotiate", owner: "Jarvis" },
  { client: "Tripoli Academy", value: "$42k", stage: "Draft", owner: "Alfred" },
  { client: "Redd Point", value: "$33k", stage: "Signed", owner: "Jarvis" },
];

export const complianceTasks: ComplianceTask[] = [
  { title: "Insurance cert refresh", due: "Feb 15", status: "ok", owner: "Jarvis" },
  { title: "Worker safety logs", due: "Feb 18", status: "risk", owner: "Alfred" },
];

export const sopItems: SopItem[] = [
  { title: "Installer day-zero pack", owner: "Alfred", status: "draft" },
  { title: "Sales to ops handoff", owner: "Jarvis", status: "ready" },
];

export const calendarItems: CalendarItem[] = [
  { title: "AutomiQ stand-up", time: "09:30 · Google Meet", channel: "Jarvis", owner: "Michael" },
  { title: "Court Vision ops review", time: "13:00 · Zoom", channel: "Alfred", owner: "Michael" },
  { title: "Personal PA sweep", time: "20:00 · Telegram", channel: "Jarvis", owner: "Jarvis" },
];

export const userRoster: UserRecord[] = [
  { name: "Jarvis", role: "AutomiQ CSO/COO", presence: "online" },
  { name: "Alfred", role: "Court Vision COO", presence: "focus" },
  { name: "Rebecca", role: "Field Ops", presence: "offline" },
];

export type DeviceStatus = {
  name: string;
  location: string;
  uptime: string;
  owner: string;
  state: "online" | "idle" | "maintenance";
};

export type JournalEntry = {
  timestamp: string;
  author: string;
  summary: string;
  detail: string;
};

export type DocumentLink = {
  title: string;
  kind: string;
  owner: string;
  updated: string;
};

export type ClientRecord = {
  name: string;
  stage: string;
  health: "on-track" | "at-risk";
  owner: string;
  nextAction: string;
};

export type CoreJob = {
  title: string;
  cadence: string;
  owner: string;
  status: "ready" | "running" | "blocked";
};

export type ApiStat = {
  label: string;
  value: string;
  delta: string;
};

export type PremiumRequestsConfig = {
  /** Monthly paid-request budget in USD */
  totalMonthlyBudget: number;
  /** Amount already consumed this month in USD */
  usedAmount: number;
  /** Hard-cap as a percentage of totalMonthlyBudget (0-100) */
  limitPercent: number;
  /** Date when the monthly billing cycle resets (e.g. "Mar 31") */
  billingCycleReset: string;
};

export type WorkflowPlay = {
  title: string;
  description: string;
  payload: string;
  owner: string;
};

export type InboxThread = {
  source: string;
  subject: string;
  time: string;
  status: "open" | "waiting" | "done";
};

export const devices: DeviceStatus[] = [
  { name: "Jarvis Runtime", location: "iMac · Beirut", uptime: "22h", owner: "Jarvis", state: "online" },
  { name: "Alfred Workbench", location: "Localhost", uptime: "8h", owner: "Alfred", state: "online" },
  { name: "Mission Control Tunnel", location: "loca.lt", uptime: "15m", owner: "Jarvis", state: "maintenance" },
];

export const journalEntries: JournalEntry[] = [
  {
    timestamp: "17:40",
    author: "Jarvis",
    summary: "DNS patched for Telegram",
    detail: "Applied Cloudflare + Google DNS combo, confirmed openclaw status OK.",
  },
  {
    timestamp: "17:55",
    author: "Alfred",
    summary: "Mission control UI refactor",
    detail: "Shifted layout to Apple-style cards, pending deployment.",
  },
];

export const documentShelf: DocumentLink[] = [
  {
    title: "Court Vision – Master Knowledge Pack v1.0",
    kind: "Playbook",
    owner: "Jarvis",
    updated: "Feb 11",
  },
  {
    title: "AutomiQ - And I WhatsApp MVP Spec",
    kind: "Spec",
    owner: "Jarvis",
    updated: "Jan 07",
  },
  {
    title: "Court Vision - Jarvis Sales SOP",
    kind: "SOP",
    owner: "Jarvis",
    updated: "Feb 11",
  },
];

export const clientPipeline: ClientRecord[] = [
  {
    name: "Cedars Club",
    stage: "Negotiation",
    health: "on-track",
    owner: "Jarvis",
    nextAction: "Send revised pricing",
  },
  {
    name: "Tripoli Academy",
    stage: "Draft",
    health: "at-risk",
    owner: "Alfred",
    nextAction: "Confirm install calendar",
  },
  {
    name: "Redd Point",
    stage: "Signed",
    health: "on-track",
    owner: "Jarvis",
    nextAction: "Kick-off call",
  },
];

export const coreJobs: CoreJob[] = [
  { title: "Telegram bot uptime", cadence: "hourly", owner: "Jarvis", status: "running" },
  { title: "Court Vision deploy", cadence: "daily", owner: "Alfred", status: "ready" },
  { title: "AutomiQ deal digest", cadence: "daily", owner: "Jarvis", status: "blocked" },
];

export const apiStats: ApiStat[] = [
  { label: "Requests (24h)", value: "1,284", delta: "+12%" },
  { label: "Tokens burned", value: "138k", delta: "+32%" },
  { label: "Latency", value: "1.8s", delta: "-0.4s" },
];

export const premiumRequestsConfig: PremiumRequestsConfig = {
  totalMonthlyBudget: 150,
  usedAmount: 20,
  limitPercent: 100,
  billingCycleReset: "Mar 31",
};

export const workflowPlays: WorkflowPlay[] = [
  {
    title: "Pipeline refresh",
    description: "Full funnel sync + blocker summary",
    payload: "sync pipelines + summarize blockers",
    owner: "Jarvis",
  },
  {
    title: "Mission deploy",
    description: "Prep latest Next.js build + tunnel link",
    payload: "build mission control + expose secure URL",
    owner: "Alfred",
  },
];

export const inbox: InboxThread[] = [
  { source: "Telegram", subject: "AutomiQ client sync", time: "18:30", status: "open" },
  { source: "Email", subject: "Court Vision catalog feedback", time: "16:10", status: "waiting" },
  { source: "WhatsApp", subject: "Install schedule", time: "Yesterday", status: "done" },
];
