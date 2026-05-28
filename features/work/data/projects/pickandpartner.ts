import type { WorkProject } from "../../types/project"

export const pickAndPartner: WorkProject = {
  slug: "pick-and-partner",
  title: "Pick & Partner",
  featured: true,
  status: "shipped",
  thumbnail: "/work/pickandpartner.png",
  thumbnailType: "banner",

  oneLiner:
    "Cross-promotion ecosystem for newsletters with subscriber matching, intelligent attribution, and community-driven growth.",

  role: "Full-Stack Developer",
  company: "Personal Project",
  period: "Sep 2024 to July 2025",

  highlights: [
    "Scaled a cross-promotion ecosystem managing 150+ newsletters with 300,000+ combined subscribers",
    "Built subscriber-sharing algorithms that improved newsletter growth by 30% through strategic partner matching",
    "Implemented UTM attribution using FingerprintJS and Cloudflare Workers, achieving 95% click attribution accuracy",
    "Created a Discord bot for community workflows, increasing engagement by 40% through streamlined collaboration",
  ],

  problem:
    "Newsletter creators struggle to grow organically and often rely on expensive paid acquisition channels. Cross-promotions are highly effective but fragmented, manual, and difficult to track, making it hard for creators to find relevant partners and measure performance.",

  whatIBuilt:
    "Built a newsletter growth platform enabling creators to discover high-fit promotion partners, share subscribers strategically, and track campaign performance. Designed subscriber-sharing algorithms for intelligent partner recommendations, Cloudflare-powered attribution pipelines for reliable UTM tracking, and a Discord bot for real-time community collaboration and partnership workflows.",

  features: [
    {
      title: "Subscriber Matching & Partner Discovery",
      description:
        "Built intelligent matching workflows to connect newsletters based on audience overlap, growth potential, and promotional fit, enabling creators to discover relevant partners efficiently.",
    },
    {
      title: "UTM Attribution & Link Tracking",
      description:
        "Implemented dynamic UTM generation with FingerprintJS and Cloudflare Workers for accurate click attribution, fast redirection, and campaign-level performance visibility.",
    },
    {
      title: "Discord Community Automation",
      description:
        "Developed a Discord.js bot for creator onboarding, promotion coordination, partner discovery, and real-time collaboration workflows within newsletter communities.",
    },
    {
      title: "Growth Analytics & Campaign Visibility",
      description:
        "Enabled creators to measure promotion effectiveness through campaign metrics, click tracking, and engagement insights for data-driven growth decisions.",
    },
  ],
  
  liveUrl: "https://pickandpartner.com/discover",

  stats: [
    { label: "Newsletters", value: "150+" },
    { label: "Subscribers", value: "300K+" },
    { label: "Growth Increase", value: "30%" },
    { label: "Click Accuracy", value: "95%" },
  ],

  tech: [
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Cloudflare Workers",
    "Appwrite",
    "FingerprintJS",
    "Discord.js",
    "REST APIs",
  ],

  architectureImage: "pickandpartner-architecture.png",
}
