import type { WorkProject } from "../../types/project"

export const buzzwav: WorkProject = {
  slug: "buzzwav",
  title: "BuzzWav",
  status: "archived",
  oneLiner:
    "AI-powered Reddit analytics that turns subreddit discussions into content ideas. Real-time dashboard, vector search, trend detection.",
  role: "Frontend Lead",
  company: "BuzzWav",
  period: "2025",
  liveUrl: "https://buzzwav.com",
  problem:
    "Content creators spend hours scrolling Reddit looking for one good video topic. BuzzSumo costs Rs 16,000+/month and barely touches Reddit. No affordable tool existed that could monitor subreddits in real time, detect trending discussions before they peak, and generate actual content ideas from what real people were saying.",
  whatIBuilt:
    "Built the entire dashboard experience, marketing site, and subscription system. Subreddit tracking with configurable frequency. AI-powered insight generation with opportunity scoring, viral potential, and content angles via Claude Sonnet. Vector embeddings (Google text-embedding-004) for semantic search across posts. Trend detection with momentum scoring. Content ideas Kanban board with AI brief generation. 4-tier subscription with Razorpay and Cashfree. The product worked. Finding users didn't. Three builders, zero marketers. That gap taught me more about product than any feature ever could.",
  stats: [
    { label: "DB Tables", value: "21" },
    { label: "AI Modules", value: "10" },
    { label: "Sub Tiers", value: "4" },
    { label: "Team Size", value: "3" },
  ],
  tech: [
    "Next.js",
    "React",
    "Convex",
    "Claude Sonnet",
    "OpenRouter",
    "Google Embeddings",
    "Clerk",
    "Razorpay",
  ],
}
