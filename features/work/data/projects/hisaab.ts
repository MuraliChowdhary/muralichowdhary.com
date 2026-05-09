import type { WorkProject } from "../../types/project"

export const hisaab: WorkProject = {
  slug: "hisaab",
  title: "Hisaab",
  status: "shipped",
  oneLiner:
    "Open-source trading journal for Indian traders. Zero backend, zero signup. Built as acquisition funnel for Metis.",
  role: "Solo Builder",
  company: "Metis",
  period: "2026",
  liveUrl: "https://hisaab.trymetis.app",
  githubUrl: "https://github.com/Devansh-365/hisaab",
  problem:
    "Indian traders don't trust tools with their financial data. 91% of F&O traders lost money last year. They've been burned by platforms that leak data or sell it. Existing journal tools want signups, credit cards, and server access to your tradebook. Nobody wants to upload their Zerodha CSV to a random website.",
  whatIBuilt:
    "A trading journal where no data ever leaves the browser. Drop your CSV from Zerodha, Groww, Upstox, or Angel One. Auto-detects the broker from column headers (12 signature variants, zero user selection). FIFO-matches buys and sells with partial fill support. Shows instant P&L, win rate, equity curve, drawdown chart, calendar heatmap, Sharpe ratio, Monte Carlo simulation, Kelly criterion. Tax report with STCG/LTCG classification and ITR-ready export. Installable as PWA, works offline. MIT licensed. The architecture IS the marketing: zero server, zero signup, read every line of code. Every export carries a Metis link. Every empty state shows the Metis ecosystem. Free tool builds trust. Trust converts to paid signups.",
  stats: [
    { label: "Brokers", value: "4" },
    { label: "Header Variants", value: "12" },
    { label: "Analytics Views", value: "5" },
    { label: "Works Offline", value: "PWA" },
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Dexie.js",
    "IndexedDB",
    "Recharts",
    "PWA",
  ],
}
