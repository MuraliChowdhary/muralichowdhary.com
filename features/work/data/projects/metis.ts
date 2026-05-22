import type { WorkProject } from "../../types/project"

export const metis: WorkProject = {
  slug: "metis",
  title: "Metis",
  featured: true,
  status: "ended",
  thumbnail: "/work/metis.png",
  oneLiner:
    "Side project, Feb to Apr 2026. AI stock analysis for Indian swing traders. 70+ traders surveyed, 2,100+ stocks covered, 25 beta users on WhatsApp. From concept to daily-use product in 48 days.",
  role: "Product Engineer",
  company: "Metis",
  period: "Feb 2026 to Apr 2026",
  liveUrl: "https://trymetis.app",
  highlights: [
    "Cut per-session API cost from $0.25 to $0.06 (76% savings) via multi-provider LLM routing with zero quality regression",
    "70+ user interviews validated the problem before writing a line of code; 25 active beta users on WhatsApp generating daily analyses",
    "Reduced Market Pulse heatmap load from 117 HTTP calls to 16 via batch quote chunking, render time 3-5s to under 1s",
    "Config-driven provider registry with Gemini → Groq → Anthropic fallback chain absorbs outages without user impact",
  ],
  features: [
    {
      title: "Core Analysis Engine",
      description:
        "Real-time NSE/BSE data + 7 technical indicators (RSI, MACD, Bollinger, ATR, SMA, EMA, pivots) + FII/DII flows + option chain (PCR, max pain, OI) feeding a structured verdict with 0-10 confidence score, interest zones, and capital-aware position sizing.",
    },
    {
      title: "Market Pulse (Daily Habit Loop)",
      description:
        "Sector heatmap, AI morning briefs, 8:30 AM IST push notifications, weekly streaks (Duolingo-style with freeze mechanic). Reduced heatmap load from 117 HTTP calls to 16, render time 3-5s to under 1s.",
    },
    {
      title: "Stock Discovery",
      description:
        "Natural language screener over a 2,132-stock NSE universe plus BSE. Quick-Ask inline analysis cards. Market movers by sector drill-down with leaders and laggards.",
    },
    {
      title: "Cost-Optimized AI Infrastructure",
      description:
        "Config-driven provider registry with Gemini → Groq → Anthropic fallback chain. Three cost-optimization passes (model routing, prompt caching, context slicing, Gemini-first utility routing) dropped per-session cost from $0.25 to $0.06-0.08.",
    },
    {
      title: "Shareable Analysis Pages",
      description:
        "SEO-optimized analysis pages with Article JSON-LD and dynamic sitemap that double as organic landing pages. Interactive widget with candlestick charts, technical panels, and flow data.",
    },
    {
      title: "Platform & Growth",
      description:
        "Email OTP + Google SSO, 6-layer security model (input, data, auth, file, infrastructure, ops), dual-layer analytics (PostHog AARRR + in-DB columns), admin panel for beta ops. 7 free SEO tools (Position Size, Risk-Reward, Swing Profit, Capital Gains, Pivot Point, F&O Turnover) targeting 650K+ monthly searches.",
    },
  ],
  problem:
    "91% of Indian retail traders lose money (SEBI 2024 study). I surveyed 70+ traders to find out why. 68% said wrong entry/exit timing was their biggest pain. The tools that existed (Screener.in, TradingView, Chartink) gave raw data but not analysis. They showed you RSI is 58. They didn't tell you what that meant for your trade, where to enter, where to place a stop loss, or how many shares to buy given your capital. And no tool solved the deeper problem: traders don't know what to look at on any given morning.",
  whatIBuilt:
    "Side project I worked on from Feb to Apr 2026. Stopped to focus on other engagements. AI chat that combined real-time NSE and BSE data with actual analysis. Fetched live OHLCV, computed 7 technical indicators (RSI, MACD, Bollinger Bands, ATR, SMA, EMA, pivot points), pulled FII/DII flows, option chain (PCR, max pain, OI), delivery percentages, and macro context (DXY, VIX, crude, gold), then generated a structured verdict with confidence score (0-10 weighted across 5 factors), interest zones, risk levels, and position sizing based on your capital. Rendered as an interactive widget with candlestick charts, technical panels, and flow data, not just text. Built Market Pulse as a daily habit loop with sector heatmap, leaders/laggards drill-down, AI-generated morning briefs, and 8:30 AM IST push notifications. Added weekly streak system (Duolingo-style with freeze mechanic) and Quick-Ask inline analysis cards. Natural language stock screener over a 2,132-stock NSE universe plus BSE. Shareable analysis pages with SEO (Article JSON-LD, dynamic sitemap) that doubled as organic landing pages. Config-driven provider registry with Gemini, Groq, and Anthropic fallback chain and three cost-optimization passes that dropped per-session cost from $0.25 to $0.06-0.08 (68-76% savings) via model routing, prompt caching, context slicing, and Gemini-first utility routing. Email OTP + Google SSO, 6-layer security model (input, data, auth, file, infrastructure, ops), dual-layer analytics (PostHog AARRR + in-DB columns), and an admin panel for beta ops. 7 free SEO tools shipped (Position Size, Risk-Reward, Swing Profit, Capital Gains, Stock Average, Pivot Point, F&O Turnover) targeting 650K+ monthly searches.",
  stats: [
    { label: "Traders Surveyed", value: "70+" },
    { label: "NSE + BSE Stocks", value: "2,100+" },
    { label: "Sector Coverage", value: "1,284" },
    { label: "Beta Users", value: "25" },
    { label: "AI Providers", value: "3" },
    { label: "Cost/Session", value: "$0.06-0.08" },
    { label: "Cost Reduction", value: "76%" },
    { label: "Built In", value: "48 days" },
  ],
  tech: [
    "Next.js",
    "TypeScript",
    "Vercel AI SDK",
    "Claude Sonnet",
    "Gemini 2.5 Flash",
    "Groq Llama 3.3",
    "Drizzle ORM",
    "Neon Postgres",
    "Upstash Redis",
    "PostHog",
    "Serper",
    "FYERS API",
    "NextAuth",
    "Web Push",
    "SWR",
  ],
}
