import type { WorkProject } from "../../types/project"

export const hisaab: WorkProject = {
  slug: "hisaab",
  title: "Hisaab",
  status: "shipped",
  oneLiner:
    "Open-source trading journal for Indian traders. Zero backend, zero signup. Built as acquisition funnel for Metis (past side project).",
  role: "Solo Builder",
  company: "Metis",
  period: "2026",
  liveUrl: "https://hisaab.trymetis.app",
  githubUrl: "https://github.com/MuraliChowdhary//hisaab",
  problem:
    "Indian traders don't trust tools with their financial data. 91% of F&O traders lost money last year. They've been burned by platforms that leak data or sell it. Existing journal tools want signups, credit cards, and server access to your tradebook. Nobody wants to upload their Zerodha CSV to a random website.",
  whatIBuilt:
    "A trading journal where no data ever leaves the browser. Drop your CSV from Zerodha, Groww, Upstox, or Angel One. Auto-detects the broker from column headers (12 signature variants, zero user selection). FIFO-matches buys and sells with partial fill support. Shows instant P&L, win rate, equity curve, drawdown chart, calendar heatmap, Sharpe ratio, Monte Carlo simulation, Kelly criterion. Tax report with STCG/LTCG classification and ITR-ready export. Installable as PWA, works offline. MIT licensed. The architecture was the marketing: zero server, zero signup, read every line of code. Every export carried a Metis link. Free tool builds trust. Trust converts to paid signups.",
  features: [
    {
      title: "Zero-Data Architecture",
      description:
        "All processing happens in the browser via IndexedDB and Dexie.js. Trade CSVs are parsed locally, stored in the browser's IndexedDB, and never transmitted to a server. Users can inspect every line of code. Privacy is the default, not a feature.",
    },
    {
      title: "Broker Auto-Detection",
      description:
        "Drop a CSV from any of 4 supported brokers (Zerodha, Groww, Upstox, Angel One). The system auto-detects the broker by matching column header signatures against 12 known variants. No dropdown, no manual selection. Parsed trades are normalized into a unified schema.",
    },
    {
      title: "FIFO Matching Engine",
      description:
        "Matches buy and sell orders using FIFO with partial fill support. Handles split trades, multiple legs, and intraday vs delivery classification. Every matched pair shows realized P&L, holding period, and applicable tax regime (STCG or LTCG).",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Instant P&L, win rate, average winner/loser, equity curve, drawdown chart, calendar heatmap, Sharpe ratio, Sortino ratio, and Monte Carlo simulation. All charts are interactive and update as new trades are imported. Data exports to CSV or PDF.",
    },
    {
      title: "Tax Report Export",
      description:
        "Generates a tax report with STCG/LTCG classification, turnover calculation, and ITR-ready export format. Shows speculative vs non-speculative income split. Includes a summary sheet for CA review. Updated whenever new trades are imported.",
    },
  ],
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
