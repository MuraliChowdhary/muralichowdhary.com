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
  features: [
    {
      title: "Subreddit Tracking",
      description:
        "Users add subreddits and set scan frequency (hourly to daily). Each scan pulls new posts, scores them for opportunity, and surfaces the top 10 in a ranked feed. Historical data builds a trend line for each subreddit.",
    },
    {
      title: "AI Insight Generation",
      description:
        "Claude Sonnet reads the top posts from a subreddit and generates three content angles per post: what angle to take, why it would resonate, and how to structure the hook. Opportunity score is computed from reply velocity, upvote acceleration, and topic uniqueness.",
    },
    {
      title: "Vector Semantic Search",
      description:
        "Every post is embedded via Google text-embedding-004 and stored in Convex. Users can search semantically: 'content ideas about startup failure' returns posts about pivots, shutdowns, and lessons learned even if those exact words never appear.",
    },
    {
      title: "Trend Detection",
      description:
        "Momentum scoring tracks reply velocity, upvote rate, and cross-post frequency over a 72-hour window. Posts that spike get a 'Trending' badge with a momentum graph. Users can set alerts for specific thresholds.",
    },
    {
      title: "Content Ideas Board",
      description:
        "Kanban board with AI brief generation: drag an insight into a column, click generate, and get a full content brief with title options, hook variations, key points, and suggested CTA. Briefs can be exported to Notion or copied to clipboard.",
    },
  ],
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
